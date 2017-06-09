    <template>
        <div class="wrapper l-full l-flex-column">
            <FootballHeader></FootballHeader>
            <div class="main member l-flex-1 l-relative">
                <div class="l-full  l-scroll-y">
                    <div class="main-box">
                        <div class="box-tit">
                            <h2> 射手榜 </h2>
                        </div>
                        <div class="member-list" v-if="statisticList.scores">
                            <table width="100%" cellpadding="0" cellspacing="0" v-for="score in statisticList.scores">
                                <colgroup>
                                    <col width="10%">
                                    <col width="">
                                    <col width="18%">
                                </colgroup>
                                <tbody>
                                   <tr>
                                        <td align="left">
                                            <img class="member-face" v-load="score.avatar">
                                        </td>
                                        <td align="left">
                                            <strong>{{score.playername}}</strong>

                                            <p>{{score.teamsxname}}</p>
                                        </td>
                                        <td align="right">
                                            <strong>{{score.goals}}</strong>

                                            <p>{{score.avg_goals}}球/场</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="member-list member-empty" v-if="!statisticList.scores">暂无数据</div>
                    </div>
                    <div class="main-box">
                        <div class="box-tit">
                            <h2>助攻榜</h2>
                        </div>
                       <div class="member-list" v-if="statisticList.assists">
                            <table width="100%" cellpadding="0" cellspacing="0" v-for="assist in statisticList.assists">
                                <colgroup>
                                    <col width="10%">
                                    <col width="">
                                    <col width="18%">
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td align="left">
                                            <img class="member-face" v-load="assist.avatar">
                                        </td>

                                        <td align="left">
                                            <strong>{{assist.playername}}</strong>
                                            <p>{{assist.teamsxname}}</p>
                                        </td>
                                        <td align="right">
                                            <strong>{{assist.assists}}</strong>
                                            <p>{{assist.avg_assists}}助/场</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="member-list member-empty" v-if="!statisticList.assists">暂无数据</div>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
        import FootballHeader from './FootballHeader.vue';
        export default{
            components: {
                FootballHeader
            },
            data(){
                return {
                    id: ''
                };
            },
            computed: {
                statisticList: function(){
                    return this.$store.state.footballStatistics.statistic;
                }
            },
            created(){
                this.id = this.$route.params.id;
                this.getFootStatistics();
            },
            methods: {
                getFootStatistics: function(){
                    this.$store.dispatch('updateFootStatistic', {id: this.id});
                }
            },
            watch: {
                '$route': function(){
                    this.id = this.$route.params.id;
                    this.getFootStatistics();
                }
            }
        };
    </script>
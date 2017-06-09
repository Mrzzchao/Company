<template>
    <div class="wrapper l-full l-flex-column">
        <BasketballHeader></BasketballHeader>

        <section class="l-flex-1 l-relative" >
            <div class="inte-main l-full l-scroll-y">
                <!--有东西部之分-->
                <div v-if="rankList.rettype=='object'" class="games-list rank-tb">
                    <table class="games" width="100%" cellspacing="0" cellpadding="0">
                        <colgroup>
                            <col width="35%">
                            <col width="18%">
                            <col width="15%">
                            <col width="15%">
                            <col width="17%">
                        </colgroup>
                        <tr>
                            <th class="tb-lp">
                                <em class="where-mat">东部</em>
                            </th>
                            <th>胜/负</th>
                            <th>胜率</th>
                            <th>胜差</th>
                            <th align="right">状态</th>
                        </tr>
                        <tr v-for="list in rankList.values.east">
                            <td>
                                <em class="cate-cont"><i class="game-category ">{{list.order}}</i></em>
                                <em class="gamer-cont">
                                    <img v-basket="list.teamlogo" >{{list.teamgbname}}
                                </em>
                            </td>
                            <td>{{list.win}}/{{list.lost}}</td>
                            <td>{{list.winrate}}%</td>
                            <td>{{list.windiff}}</td>
                            <!--如果连续失败就用tb-rp-fail-->
                            <td v-if="list['winstatus']==='1'" class="tb-rp">{{list.wintext}}连胜</td>
                            <td v-if="list['winstatus']==='0'" class="tb-rp-fail tb-rp">{{list.wintext}}连败</td>
                        </tr>
                    </table>

                    <table class="games" width="100%" cellspacing="0" cellpadding="0">
                        <colgroup>
                            <col width="35%">
                            <col width="18%">
                            <col width="15%">
                            <col width="15%">
                            <col width="17%">
                        </colgroup>
                        <tr>
                            <th class="tb-lp">
                                <em class="where-mat">西部</em>
                            </th>
                            <th>胜/负</th>
                            <th>胜率</th>
                            <th>胜差</th>
                            <th align="right">状态</th>
                        </tr>
                        <tr v-for="list in rankList.values.west">
                            <td>
                                <em class="cate-cont"><i class="game-category ">{{list.order}}</i></em>
                                <em class="gamer-cont">
                                    <img v-basket="list.teamlogo" >{{list.teamgbname}}
                                </em>
                            </td>
                            <td>{{list.win}}/{{list.lost}}</td>
                            <td>{{list.winrate}}%</td>
                            <td>{{list.windiff}}</td>
                            <!--如果连续失败就用tb-rp-fail-->
                            <td v-if="list['winstatus']==='1'" class="tb-rp">{{list.wintext}}连胜</td>
                            <td v-if="list['winstatus']==='0'" class="tb-rp-fail tb-rp">{{list.wintext}}连败</td>
                        </tr>
                    </table>
                </div>

                <div v-if="rankList['rettype']==='array'" class="games-list rank-tb">
                    <table class="games" width="100%" cellspacing="0" cellpadding="0">
                        <colgroup>
                            <col width="35%">
                            <col width="18%">
                            <col width="15%">
                            <col width="15%">
                            <col width="17%">
                        </colgroup>
                        <tr>
                            <th class="tb-lp"></th>
                            <th>胜/负</th>
                            <th>胜率</th>
                            <th>胜差</th>
                            <th align="right">状态</th>
                        </tr>
                        <tr v-for="item in rankList.values">
                            <td>
                                <em class="cate-cont"><i class="game-category ">{{item.order}}</i></em>
                                <em class="gamer-cont">
                                    <img v-basket="item.teamlogo" >{{item.teamgbname}}
                                </em>
                            </td>
                            <td>{{item.win}}/{{item.lost}}</td>
                            <td>{{item.winrate}}%</td>
                            <td>{{item.windiff}}</td>
                            <!--如果连续失败就用tb-rp-fail-->
                            <td v-if="item['winstatus']==='1'" class="tb-rp">{{item.wintext}}连胜</td>
                            <td v-if="item['winstatus']==='0'" class="tb-rp-fail tb-rp">{{item.wintext}}连败</td>
                        </tr>
                    </table>
                </div>

            </div>
        </section>
    </div>
</template>

<script>
    import BasketballHeader from './BasketballHeader.vue';
    export default{
        components: {
            BasketballHeader
        },
        data(){
            return {
                id: ''
            };
        },
        computed: {
            rankList: function(){
                // console.log(this.$store.state.rank.rank)
                return this.$store.state.rank.rank;
            }
        },
        created(){
            this.id = this.$route.params.id;
            this.getRankData();
        },
        watch: {
            '$route': function(){
                this.id = this.$route.params.id;
                this.getRankData();
            }

        },
        methods: {
            getRankData: function(){
                this.$store.dispatch('updateRank', {id: this.id});
            }
        }
    };
</script>
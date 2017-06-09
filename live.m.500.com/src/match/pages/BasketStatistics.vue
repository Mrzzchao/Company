<template>
    <div class="wrapper l-full l-flex-column">
        <BasketballHeader></BasketballHeader>
        <section class="count-main l-flex-l l-relative">
            <div class="l-flex-row l-full">
                <!--left scroll-->
                <div class="plleft l-flex-column">
                    <ul class="plleft-list l-scroll-y l-flex-1">
                        <li :class="{'cur':tab === 'score'}" @click="onTab('score')">得分</li>
                        <li :class="{'cur':tab === 'lost'}" @click="onTab('lost')">失分</li>
                        <li :class="{'cur':tab === 'fieldgoal'}" @click="onTab('fieldgoal')">投篮命中率</li>
                        <li :class="{'cur':tab === 'threepoint'}" @click="onTab('threepoint')">三分命中率</li>
                        <li :class="{'cur':tab === 'freethrow'}" @click="onTab('freethrow')">罚球命中率</li>
                        <li :class="{'cur':tab === 'rebound'}" @click="onTab('rebound')">篮板</li>
                        <li :class="{'cur':tab === 'assist'}" @click="onTab('assist')">助攻</li>
                        <li :class="{'cur':tab === 'block'}" @click="onTab('block')">盖帽</li>
                        <li :class="{'cur':tab === 'steal'}" @click="onTab('steal')">抢断</li>
                        <li :class="{'cur':tab === 'turnover'}" @click="onTab('turnover')">失误</li>
                        <li :class="{'cur':tab === 'foul'}" @click="onTab('foul')">犯规</li>
                    </ul>
                </div>

                <!--right scroll-->
                <div class="plright l-flex-l l-flex-column" v-if="isEmpty(statisList)">
                    <h2 class="average-tit">
                        <em>球队</em>场均得分
                    </h2>
                    <ul class="average-list l-flex-l l-srcoll-y" v-for="(list,index) in statisList">
                        <li class="average-item clear">
                            <div class="aver-team">
                                <em class="aver-turn">{{index}}</em>
                                <span class="aver-team-img">
                                    <img :src="list.teamlogo">
                                    <em class="aver-team-name">{{list.teamgbname}}</em>
                                </span>
                            </div>
                            <span class="aver-score">{{list.value}}</span>
                        </li>
                    </ul>
                </div>
                <div class="plright l-flex-l l-flex-column" v-if="!isEmpty(statisList)">
                    <h2 class="average-tit">
                        <em>球队</em>场均得分
                    </h2>
                    <div class="ui-empty" style="padding: 1.54rem 0;">
                        <img class="w240" src="http://tccache.500.com/mobile/widget/empty/images/12.png">
                        <div class="ui-empty-gfont">暂无数据</div>
                    </div>
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
                id: '',
                tab: ''
            };
        },
        created(){
            this.id = this.$route.params.id;
            this.tab = 'score';
            this.getStatisticData();
        },
        computed: {
            statisList(){
                return this.$store.state.basketStatistics.basketStatistic;
            }
        },
        watch: {
            '$route': function () {
                this.id = this.$route.params.id;
                this.tab = 'score';
                this.getStatisticData();
            }
        },
        methods: {
            getStatisticData: function () {
                return this.$store.dispatch('updateBasketStatistic', {id: this.id, key: this.tab});
            },
            onTab: function(type){
                this.tab = type;
                this.getStatisticData(this.tab);
            },
            isEmpty: function(obj){
                return Object.keys(obj).length;
            }
        }
    };
</script>
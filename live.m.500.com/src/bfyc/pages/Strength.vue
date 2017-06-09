<!--ui: http://ui.touch500.boss.com/touch/bifen/v124/record.html-->
<template>

    <div class="l-full l-scroll-y" v-if="strength">
        <!--实力对比列表-->
        <section class="hotc-list">

            <div class="strengh-cont " v-for="match in strength.matches"  v-if="match.status !== '4'" v-tap="{methods: goAnalysis, fid: match.fid}">
                <div class="strengh-time">{{match.order}} {{match.simpleleague}} {{match.matchtime.substr(5)}} <em>{{match.cell.currodds&&match.cell.currodds.join('/')}}</em></div>
                <div class="zhzl-box strengh-item">
                    <div class="strengh-tit"><em>{{match.homesxname}}</em><em>VS</em><em>{{match.awaysxname}}</em></div>
                    <div class="each-resone-all">
                        <div class="zhzl-vs-left gray-bg" :style="{width:match.cell.home_percent+'%'}"></div>
                        <div class="zhzl-vs-right green-bg" :style="{width:match.cell.away_percent+'%'}"></div>
                    </div>
                    <div class="zhzl-bfb-left"><span>{{match.cell.home_percent}}</span><i>%</i></div>
                    <div class="zhzl-bfb-right"><span>{{match.cell.away_percent}}</span><i>%</i></div>
                </div>
            </div>


            <!--已完场-->
            <div class="tag-game-over">已完场</div>


            <div class="strengh-cont "  v-for="match in strength.matches" v-if="match.status === '4'" v-tap="{methods: goAnalysis, fid: match.fid}">
                <div class="strengh-time">{{match.order}} {{match.simpleleague}} {{match.matchtime.substr(5)}} <em>{{match.cell.currodds&&match.cell.currodds.join('/')}}</em></div>
                <div class="zhzl-box strengh-item">
                    <div class="strengh-tit"><em>{{match.homesxname}}</em><em>{{match|score}}</em><em>{{match.awaysxname}}</em></div>
                    <div class="each-resone-all">
                        <div class="zhzl-vs-left gray-bg" :style="{width:match.cell.home_percent+'%'}"></div>
                        <div class="zhzl-vs-right gray-bg" :style="{width:match.cell.away_percent+'%'}"></div>
                    </div>
                    <div class="zhzl-bfb-left"><span>{{match.cell.home_percent}}</span><i>%</i></div>
                    <div class="zhzl-bfb-right"><span>{{match.cell.away_percent}}</span><i>%</i></div>
                </div>
            </div>

        </section>
    </div>

</template>

<script>
    export default{
        computed: {
            strength: function () {
                return this.$store.state.strenght_compare;
            }
        },
        mounted(){
            if (!this.strength) {
                this.$store.dispatch('fetchStrengthCompare');
            }
        },
        methods: {
            goAnalysis: function ({fid}) {
                location.href = `http://m.live.500.com/score/detail.html#/footballdetail/analysis/${fid}`;
            }
        },

        filters: {
            score: (match) => {
                if (match.homescore && match.awayscore){
                    return `${match.homescore}:${match.awayscore}`;
                } else {
                    return 'VS';
                }
            }
        }

    };
</script>

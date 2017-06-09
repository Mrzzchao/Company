<!--ui: http://ui.touch500.boss.com/touch/bifen/v124/record.html-->
<template>
    <div class="l-full l-flex-column">
        <!--顶部的时间-->
        <section class="pre-header">
            <ul>
                <li>比赛</li>
                <li>百家欧赔</li>
                <li>欧赔概率</li>
                <li>必发交易</li>
                <li>冷热</li>
            </ul>
        </section>

        <div class="hotc-box l-flex-1 l-relative">
            <div class="l-full l-scroll-y" v-if="coldHot">
                <!--冷热列表-->
                <section class="hotc-cont"  v-for="match in coldHot.matches" v-if="match.status !== '4'" v-tap="{methods: goAnalysis, fid: match.fid}">
                    <div class="hotc-tab-tit ">{{match.order}} {{match.simpleleague}} {{match.matchtime.substr(5)}}<em :class="{'too-draw': match.tag.color==='gray',
                    'too-cold': match.tag.desc==='主胜过冷'}">{{match.tag.desc}}</em></div>
                    <ul class="hotc-tab-list">
                        <li class="hotc-tab-item">
                            <ul>
                                <li>{{match.homesxname}}</li>
                                <li>{{match.cell.win.avrodds}}</li>
                                <li>{{match.cell.win.europe}}%</li>
                                <li>{{match.cell.win.betfair}}%</li>
                                <li>{{match.cell.win.exp}}</li>
                            </ul>
                        </li>
                        <li class="hotc-tab-item">
                            <ul>
                                <li>平局</li>
                                <li>{{match.cell.draw.avrodds}}</li>
                                <li>{{match.cell.draw.europe}}%</li>
                                <li>{{match.cell.draw.betfair}}%</li>
                                <li>{{match.cell.draw.exp}}</li>
                            </ul>
                        </li>
                        <li class="hotc-tab-item">
                            <ul>
                                <li>{{match.awaysxname}}</li>
                                <li>{{match.cell.lost.avrodds}}</li>
                                <li>{{match.cell.lost.europe}}%</li>
                                <li>{{match.cell.lost.betfair}}%</li>
                                <li>{{match.cell.lost.exp}}</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <!--已完场-->
                <div class="tag-game-over">已完场</div>
                <section class="hotc-cont"  v-for="match in coldHot.matches" v-if="match.status === '4'" v-tap="{methods: goAnalysis, fid: match.fid}">
                    <div class="hotc-tab-tit ">{{match.order}} {{match.simpleleague}} {{match.matchtime.substr(5)}}<em :class="{'too-draw': match.tag.color==='gray',
                    'too-cold': match.tag.desc==='主胜过冷'}">{{match.tag.desc}}</em></div>
                    <ul class="hotc-tab-list">
                        <li class="hotc-tab-item">
                            <ul>
                                <li>{{match.homesxname}}</li>
                                <li>{{match.cell.win.avrodds}}</li>
                                <li>{{match.cell.win.europe}}%</li>
                                <li>{{match.cell.win.betfair}}%</li>
                                <li>{{match.cell.win.exp}}</li>
                            </ul>
                        </li>
                        <li class="hotc-tab-item">
                            <ul>
                                <li>平局</li>
                                <li>{{match.cell.draw.avrodds}}</li>
                                <li>{{match.cell.draw.europe}}%</li>
                                <li>{{match.cell.draw.betfair}}%</li>
                                <li>{{match.cell.draw.exp}}</li>
                            </ul>
                        </li>
                        <li class="hotc-tab-item">
                            <ul>
                                <li>{{match.awaysxname}}</li>
                                <li>{{match.cell.lost.avrodds}}</li>
                                <li>{{match.cell.lost.europe}}%</li>
                                <li>{{match.cell.lost.betfair}}%</li>
                                <li>{{match.cell.lost.exp}}</li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </div>


</template>

<script>
    export default{
        computed: {
            coldHot: function () {
                return this.$store.state.coldhot_distribute;
            }
        },
        mounted(){
            if (!this.coldHot) {
                this.$store.dispatch('fetchColdHotDistribute');
            }
        },
        methods: {
            goAnalysis: function ({fid}) {
                location.href = `http://m.live.500.com/score/detail.html#/footballdetail/analysis/${fid}`;
            }
        },

        filters: {
            score: (match) => {
                if (match.homescore && match.awayscore) {
                    return `${match.homescore}:${match.awayscore}`;
                } else {
                    return 'VS';
                }
            }
        }

    };
</script>

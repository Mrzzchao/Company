<!--ui: http://ui.touch500.boss.com/touch/bifen/v124/predict.html-->
<template>
    <div class="v124-wrap l-full l-flex-column">

        <!--顶部的时间-->
        <section class="hotc-header">
            {{cur}}
            <ul>
                <li :class="{'cur': expect_list&&cur===expect_list[0]}" v-tap="{methods: changeExpect , expect: expect_list&&expect_list[0]}">昨天</li>
                <li :class="{'cur': expect_list&&cur===expect_list[1]}" v-tap="{methods: changeExpect , expect: expect_list&&expect_list[1]}">今天</li>
                <li :class="{'cur': expect_list&&cur===expect_list[2]}" v-tap="{methods: changeExpect , expect: expect_list&&expect_list[2]}">明天</li>
            </ul>
        </section>
        <div class="hot-cool-wrap l-flex-1 l-relative">
            <div class="l-full l-scroll-y">
                <!--比赛列表-->
                <section class="hotc-list">
                    <!--预测广告-->
                    <div class="notice-predict" v-if="good_news">
                        <p>{{good_news}}
                            <!--3月28日预测
                            <em>6中5</em>，最高回报
                            <em>3.50倍</em>-->
                        </p>
                    </div>
                    <ul>
                        <template v-for="match in matches">
                            <!--未完场-->
                            <li class="hotc-item hotc-item-going" v-if="match.status !== '4'">
                                <div class="hotc-left">
                                    <div class="hotc-info-tit">{{match.homesxname}} VS {{match.awaysxname}}</div>
                                    <div class="hotc-info-time">{{match.order}} {{match.simpleleague}}
                                        {{match.matchtime}}
                                    </div>
                                </div>
                                <div class="hotc-right">
                                    <div class="left-statue">命</br>中</div>
                                    <div class="right-predict">
                                        <p>{{match.cell.probability}}<em>%</em></p>
                                        <p>{{match.cell.predict_result|predictResult}} {{match.cell.predict_reback}}</p>
                                    </div>
                                </div>
                            </li>
                        </template>
                    </ul>
                    <!--已完场-->
                    <div class="tag-game-over">已完场</div>

                    <ul>
                        <template v-for="match in matches">
                            <li class="hotc-item" v-if="match.status === '4'">
                                <div class="hotc-left">
                                    <div class="hotc-info-tit">{{match.homesxname}} VS {{match.awaysxname}}</div>
                                    <div class="hotc-info-time">
                                        {{match.order}} {{match.simpleleague}}
                                        {{match.matchtime}}
                                    </div>
                                </div>
                                <div class="hotc-right">
                                    <div class="left-statue" v-if="match.cell.on_target==='1'">命</br>中</div>
                                    <div class="left-statue" v-else>未</br>中</div>
                                    <div class="right-predict">
                                        <p>{{match.cell.probability}}<em>%</em></p>
                                        <p>{{match.cell.predict_result|predictResult}} {{match.cell.predict_reback}}</p>
                                    </div>
                                </div>
                            </li>
                        </template>
                    </ul>

                </section>
                <p class="txt-predict">
                    赛前随赔率变化，预测概率也将有所变化。

                    </br>离开赛时间越近预测概率准确性也就越高哦。

                </p>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                cur: this.curr_expect
            };
        },
        computed: {
            good_news(){
                return this.$store.state.awesome_predict && this.$store.state.awesome_predict.good_news;
            },
            expect_list(){
                return this.$store.state.awesome_predict && this.$store.state.awesome_predict.expect_list;
            },
            curr_expect() {
                return this.$store.state.awesome_predict && this.$store.state.awesome_predict.curr_expect;
            },
            matches(){
                return this.$store.state.awesome_predict && this.cur && this.$store.state.awesome_predict.allMatches[this.cur];
            }
        },
        watch: {
            curr_expect(currExpect){
                this.cur = currExpect;
            }
        },
        mounted() {
            this.$store.dispatch('fetchAwesomePredict');
        },
        methods: {
            changeExpect({expect}){
                this.cur = expect;
                if (!this.$store.state.awesome_predict.allMatches[this.cur]) {
                    this.$store.dispatch('fetchAwesomePredict', this.cur);
                }
            }
        },
        filters: {
            predictResult: (pr) => {
//                3-主胜 1-平局 0-主负
                switch (pr) {
                    case '1':
                        return '平局';
                    case '0':
                        return '主负';
                    case '3':
                        return '主胜';
                }
            }
        }
    };
</script>

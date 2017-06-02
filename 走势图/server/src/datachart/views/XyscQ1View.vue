<template>
    <div>
        <loading v-if="!qyzs"></loading>
        <div v-if="qyzs" class="zous-2col l-full l-flex-row" v-scroll v-zsline>
            <div class="zous-2col-l l-flex-column" :style="{width:'20%'}">
                <table class="zstable2 zstable2-tit">
                    <tbody>
                    <tr>
                        <th>期号</th>
                    </tr>
                    </tbody>
                </table>


                <div class="e-side l-flex-1 l-relative">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table class="zstable2 zstable2-tit">
                            <tbody>
                            <tr v-for="item in qyzs">
                                <td class="itm-qih">{{item.expect}}</td>
                            </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- zous-2col-l end -->

            <div class="zous-2col-r l-flex-1 l-relative">
                <div class="l-full  l-flex-column" :style="{overflow:'hidden'}">
                    <div class="e-header l-relative" :style="{height:'43px'}">
                        <div class="l-full" :style="{overflow:'hidden'}">
                            <table class="zstable2 zstable2-main zstable2-yil">
                                <colgroup>
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                </colgroup>
                                <tbody>
                                <tr>
                                    <th class="bdr2" rowspan="2">冠军</th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                    <th>6</th>
                                    <th>7</th>
                                    <th>8</th>
                                    <th>9</th>
                                    <th>10</th>
                                    <th>11</th>
                                    <th>12</th>
                                </tr>
                                <tr>
                                    <td>锦鼠</td>
                                    <td>斗牛</td>
                                    <td>飞虎</td>
                                    <td>玉兔</td>
                                    <td>蛟龙</td>
                                    <td>腾蛇</td>
                                    <td>天马</td>
                                    <td>公羊</td>
                                    <td>灵猴</td>
                                    <td>雄鸡</td>
                                    <td>猎狗</td>
                                    <td>金猪</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="e-scroll l-flex-1 l-relative">
                        <div class="l-full" :style="{overflow:'hidden'}">
                            <table class="zstable2 zstable2-main zstable2-yil">
                                <colgroup>
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                    <col width="40">
                                </colgroup>
                                <tbody>
                                <tr v-for="row in qyzs">
                                    <td class="bdr2"><span>{{row.opencode[0]}}</span></td>
                                    <td v-for="idx in 12" :class="{'on':row.yilou[idx-1]==='0','bdr2': idx===1}">
                                        <span>{{row.yilou[idx-1]==='0'?idx:row.yilou[idx-1]}}</span>
                                    </td>
                                </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
            <!-- zous-2col-r end -->
        </div>
    </div>
</template>


<script type="text/ecmascript-6">
    // 已阅
    import scroll from '../common/scroll';
    import zsline from '../common/zsline';
    import {raf} from '../common/util';
    import {mapActions} from 'vuex';
    import Loading from '../components/loading.vue';
    import {nameMap} from '../common/constants';
    export default {
        data() {
            return {
                nameMap
            };
        },
        directives: {
            scroll, zsline
        },
        watch: {
            qyzs() {
                this.config();
            }
        },
        computed: {
            qyzs () {
                return this.$store.state.page.q1zs;
            }
        },
        components: {
            Loading
        },
        methods: {
            ...mapActions([
                'getXyscQ1Data'
            ]),
            config() {
                raf(() => {
                    this.$emit('initscroll');
                    this.$emit('initzsline');
                });
            }
        },
        mounted() {
            if (!this.qyzs) {
                this.getXyscQ1Data(this.$route.params.area);
            } else {
                this.config();
            }
        },

        preFetch (store) {
            return store.dispatch('getXyscQ1Data', store.state.route.params.area);
        }

    };

</script>

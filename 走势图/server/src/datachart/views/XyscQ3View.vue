<template>
    <div class="xysc">
        <loading v-if="!q3zs"></loading>
        <div v-if="q3zs" class="zous-2col l-full l-flex-row" v-scroll>
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
                            <tr v-for="item in q3zs">
                                <td class="itm-qih">{{item.expect}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- zous-2col-l end -->

            <div class="zous-2col-r l-flex-1 l-flex-column" :style="{overflow:'hidden'}">
                <div class="e-header l-relative" :style="{height:'66px'}">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table class="zstable2 zstable2-main zstable2-yil">
                            <colgroup>
                                <col v-for="idx in 39" width="40">
                            </colgroup>
                            <tbody>
                            <tr>
                                <th class="th-small bdr2" colspan="3">比赛结果</th>
                                <th class="th-small bdr2" colspan="12">冠军</th>
                                <th class="th-small" colspan="12">亚军</th>
                                <th class="th-small" colspan="12">季军</th>
                            </tr>
                            <tr>
                                <td rowspan="2">冠军</td>
                                <td rowspan="2">亚军</td>
                                <th class="bdr2"  rowspan="2">季军</th>
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
                                <th class="bdr2">12</th>





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
                                <th class="bdr2">12</th>
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
                                <td class="bdr2">金猪</td>

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
                                <td class="bdr2">金猪</td>

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
                                <col v-for="idx in 39" width="40">
                            </colgroup>
                            <tbody>
                                <tr v-for="row in q3zs">
                                    <td><span>{{row.opencode[0]}}</span></td>
                                    <td><span>{{row.opencode[1]}}</span></td>
                                    <td class="bdr2"><span>{{row.opencode[2]}}</span></td>

                                    <td v-for="yl,idx in row.yilou1" :class="{'on':yl==='0','bdr2': idx===11}">
                                        <span>{{yl==='0'?(idx+1):yl}}</span>
                                    </td>
                                    <td v-for="yl,idx in row.yilou2" :class="{'on':yl==='0','bdr2': idx===11}">
                                        <span>{{yl==='0'?(idx+1):yl}}</span>
                                    </td>

                                    <td v-for="yl,idx in row.yilou3" :class="{'on':yl==='0','bdr2': idx===11}">
                                        <span>{{yl==='0'?(idx+1):yl}}</span>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
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
    import { nameMap } from '../common/constants';
    export default {
        data() {
            return {
                nameMap
            };
        },

        components: {
            Loading
        },
        directives: {
            scroll, zsline
        },
        watch: {
            q3zs() {
                this.config();
            }
        },
        computed: {
            q3zs () {
                return this.$store.state.page.q3zs;
            }
        },
        methods: {
            ...mapActions([
                'getXyscQ3Data'
            ]),
            config() {
                raf(() => {
                    this.$emit('initscroll');
                    this.$emit('initzsline');
                });
            }
        },
        mounted() {
            if (!this.q3zs) {
                this.getXyscQ3Data(this.$route.params.area);
            } else {
                this.config();
            }
        },

        preFetch (store) {
            return store.dispatch('getXyscQ3Data', store.state.route.params.area);
        }
    };

</script>

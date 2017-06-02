<template>
    <div class="xysc">
        <loading v-if="!zhzs"></loading>
        <div v-if="zhzs" class="zous-2col l-full l-flex-row zous-qianq" v-scroll>
            <div class="zous-2col-l l-flex-column" :style="{width:'20%'}">
                <table class="zstable2 zstable2-tit">
                    <tbody>
                    <tr>
                        <th :style="{height:'36px'}">期号</th>
                    </tr>
                    </tbody>
                </table>
                <div class="e-side l-flex-1 l-relative">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table class="zstable2 zstable2-tit">
                            <tbody>
                            <tr v-for="item in zhzs">
                                <td class="itm-qih">{{item.expect}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- zous-2col-l end -->

            <div class="zous-2col-r l-flex-1 l-flex-column" :style="{overflow:'hidden'}">
                <div class="e-header l-relative" :style="{height:'36px'}">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table class="zstable2 zstable2-main zstable2-yil">
                            <colgroup>
                                <col v-for="idx in 15" width="40">
                            </colgroup>
                            <tbody>
                            <tr class="two-line">
                                <th colspan="3">比赛结果</th>
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
                            <tr class="two-line">
                                <td>冠军</td>
                                <td>亚军</td>
                                <td>季军</td>
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
                                <col v-for="idx in 15" width="40">
                            </colgroup>
                            <tbody>
                                <tr v-for="row in zhzs">
                                    <td class="on-zjhm"><span>{{row.opencode[0]}}</span></td>
                                    <td class="on-zjhm"><span>{{row.opencode[1]}}</span></td>
                                    <td class="on-zjhm"><span>{{row.opencode[2]}}</span></td>

                                    <td v-for="yl,idx in row.yilou" :class="{'on':yl==='0'&&row.opencode[0]==(idx+1),'on-red': yl==='0'&&row.opencode[1]==(idx+1), 'on-blue': yl==='0'&&row.opencode[2]==(idx+1)}">
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
            zhzs() {
                this.config();
            }
        },
        computed: {
            zhzs () {
                return this.$store.state.page.zhzs;
            }
        },
        methods: {
            ...mapActions([
                'getXyscZhData'
            ]),
            config() {
                raf(() => {
                    this.$emit('initscroll');
                    this.$emit('initzsline');
                });
            }
        },
        mounted() {
            if (!this.zhzs) {
                this.getXyscZhData(this.$route.params.area);
            } else {
                this.config();
            }
        },

        preFetch (store) {
            return store.dispatch('getXyscZhData', store.state.route.params.area);
        }
    };

</script>

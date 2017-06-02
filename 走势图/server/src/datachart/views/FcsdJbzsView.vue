<template>
    <div>
        <loading v-if="!jbzs"></loading>
        <div v-if="jbzs">
            <div class="zous-2col zous-qianq l-full l-flex-row "  v-scroll  v-zsline>
                <div class="zous-2col-l l-flex-column">
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
                                <tr v-for="item in jbzs">
                                    <td class="itm-qih">{{item.expect.slice(-5)}}</td>
                                </tr>
                                <!--<tr >-->
                                    <!--<td :style="{'height': '27px'}" class="itm-qih">出现总次数</td>-->
                                <!--</tr>-->
                                <tr>
                                    <td :style="{'height': '27px'}" class="itm-qih">平均遗漏值</td>
                                </tr>
                                <tr>
                                    <td :style="{'height': '27px'}" class="itm-qih">最大遗漏值</td>
                                </tr>
                                <tr>
                                    <td :style="{'height': '27px'}" class="itm-qih">最大连出值</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- zous-2col-l end -->
                <div class="zous-2col-r l-flex-1 l-relative">
                    <div class="l-full  l-flex-column">
                        <div class="e-header l-relative" :style="{height:'36px'}">
                            <div class="l-full" :style="{overflow:'hidden'}">
                                <table class="zstable2 zstable2-main zstable2-yil ">
                                    <colgroup>
                                        <col width="30" span="50">
                                    </colgroup>
                                    <tbody>
                                    <tr class="two-line">
                                        <th colspan="3" rowspan="2">开奖号码</th>
                                        <th colspan="10">百位</th>
                                        <th colspan="10">十位</th>
                                        <th colspan="10">个位</th>
                                        <th colspan="10">不分位</th>
                                    </tr>
                                    <tr class="two-line">
                                        <td v-for="idx in 10">{{idx-1}}</td>
                                        <td v-for="idx in 10">{{idx-1}}</td>
                                        <td v-for="idx in 10">{{idx-1}}</td>
                                        <td v-for="idx in 10">{{idx-1}}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="e-scroll l-flex-1 l-relative" >
                            <div class="l-full" :style="{overflow:'hidden'}">
                                <table class="zstable2 zstable2-main zstable2-yil l-relative">
                                    <colgroup>
                                        <col width="30" v-for="idx in 43">
                                    </colgroup>
                                    <tbody>
                                    <tr v-for="row in jbzs">
                                        <!--开奖号码-->
                                        <td v-for="idx in 3" class="on-kj"><span>{{row.opencode[idx-1]}} </span></td>
                                        <!--百位-->
                                        <td v-for="yl,idx in row.yilou1" :class="{'on-dyw':yl==='0'}"><span>{{yl==='0'?idx:yl}} </span></td>
                                        <!--十位-->
                                        <td v-for="yl,idx in row.yilou2" :class="{'on-zjhm':yl==='0'}"><span>{{yl==='0'?idx:yl}} </span></td>
                                        <!--个位-->
                                        <td v-for="yl,idx in row.yilou3" :class="{'on-sdgw':yl==='0'}"><span>{{yl==='0'?idx:yl}} </span></td>
                                        <!--不分位-->
                                        <td v-for="yl,idx in row.yilou" :class="{'on-sdbfw':yl==='0'}"><span>{{yl==='0'?idx:yl}} <sup v-if="yl==='0'&&row.num[idx]>1">{{ row.num[idx] }}</sup>  </span></td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" rowspan="5"></td>
                                    </tr>
                                    <!--<tr class="summary line">-->
                                        <!--<td v-for="idx in 10"><span>{{tj.appearcount.yilou1[idx-1]}}</span></td>-->
                                        <!--<td v-for="idx in 10"><span>{{tj.appearcount.yilou2[idx-1]}}</span></td>-->
                                        <!--<td v-for="idx in 10"><span>{{tj.appearcount.yilou3[idx-1]}}</span></td>-->
                                        <!--<td v-for="idx in 10"><span>{{tj.appearcount.yilou4[idx-1]}}</span></td>-->
                                    <!--</tr>-->
                                    <tr class="summary line">
                                        <td v-for="idx in 10"><span>{{tj.avgyl.yilou1[idx-1]}}</span></td>
                                        <td v-for="idx in 10"><span>{{tj.avgyl.yilou2[idx-1]}}</span></td>
                                        <td v-for="idx in 10"><span>{{tj.avgyl.yilou3[idx-1]}}</span></td>
                                        <td v-for="idx in 10"><span>{{tj.avgyl.yilou4[idx-1]}}</span></td>
                                    </tr>
                                    <tr class="summary line">
                                        <td v-for="idx in 10"><span>{{tj.maxyl.yilou1[idx-1]}}</span></td>
                                        <td v-for="idx in 10"><span>{{tj.maxyl.yilou2[idx-1]}}</span></td>
                                        <td v-for="idx in 10"><span>{{tj.maxyl.yilou3[idx-1]}}</span></td>
                                        <td v-for="idx in 10"><span>{{tj.maxyl.yilou4[idx-1]}}</span></td>
                                    </tr>
                                    <tr class="summary line">
                                        <td v-for="idx in 10"><span>{{tj.maxlc.yilou1[idx-1]}}</span></td>
                                        <td v-for="idx in 10"><span>{{tj.maxlc.yilou2[idx-1]}}</span></td>
                                        <td v-for="idx in 10"><span>{{tj.maxlc.yilou3[idx-1]}}</span></td>
                                        <td v-for="idx in 10"><span>{{tj.maxlc.yilou4[idx-1]}}</span></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .zous-qianq .zstable2-yil .on-kj span {
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin: 0 auto;
        border-radius: 50%;
        color: #fff;
        background: #bd5151;
    }
    .zous-qianq .zstable2-yil .on-sdgw span {
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin: 0 auto;
        border-radius: 50%;
        color: #fff;
        background: #499495;
        position: relative;
    }

    .zous-qianq .zstable2-yil .on-sdbfw span {
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin: 0 auto;
        border-radius: 50%;
        color: #fff;
        background:#bd5151;
        position: relative;
    }
    .on-sdbfw sup {
        position: absolute;
        background: #00f;
        right: -5px;
        top: -5px;
        display: block;
        width: 10px;
        height: 10px;
        line-height: 10px;
        border-radius: 5px 5px;
        font-size: 10px;
    }
</style>
<script type="text/ecmascript-6">
    // 已阅
    import {mapActions} from 'vuex';
    import Loading from '../components/loading.vue';
    import scroll from '../common/scroll';
    import zsline from '../common/zsline';
    import {raf} from '../common/util';

    export default{
        components: {
            Loading
        },
        directives: {
            scroll, zsline
        },
        watch: {
            jbzs: function () {
                this.config();
            }
        },

        methods: {
            ...mapActions([
//                'getJbzsData'
                'getSdJbzsData'
            ]),
            config() {
                raf(() => {
                    this.$emit('initscroll');
                    this.$emit('initzsline', ['.on-dyw span', '.on-zjhm span', '.on-sdgw span']);
                });
            }
        },
        computed: {
            jbzs () {
                return this.$store.state.page.jbzs;
            },
            tj () {
                return this.$store.state.page.jbtj;
            }
        },

        mounted() {
            if (!this.jbzs) {
                let area = this.$route.params.area;
                this.getSdJbzsData(area);
            } else {
                this.config();
            }
        },

        preFetch (store) {
            let area = store.state.route.params.area;
//            area = 'ssq';
            return store.dispatch('getSdJbzsData', area);
        }
    };
</script>

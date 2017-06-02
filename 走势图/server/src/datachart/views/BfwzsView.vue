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
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- zous-2col-l end -->
                <div class="zous-2col-r l-flex-1 l-relative">
                    <div class="l-full  l-flex-column">
                        <div class="e-header l-relative" :style="{height:'37px'}">
                            <div class="l-full" :style="{overflow:'hidden'}">
                                <table class="zstable2 zstable2-main zstable2-yil ">
                                    <colgroup>
                                        <col width="30" span="10">
                                    </colgroup>
                                    <tbody>
                                    <tr class="two-line">
                                        <th colspan="10">不分位</th>
                                    </tr>
                                    <tr class="two-line" >
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
                                        <col width="30" v-for="idx in 10">
                                    </colgroup>
                                    <tbody>
                                    <tr v-for="row in jbzs">
                                        <!--不分位-->
                                        <td v-for="yl,idx in row.yilou" :class="{'on-sdbfw':yl==='0'}"><span>{{yl==='0'?idx:yl}}<sup v-if="yl==='0'&&row.num[idx]>1">{{ row.num[idx] }}</sup>  </span></td>
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
    .on-sdbfw span sup {
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
            return store.dispatch('getSdJbzsData', area);
        }
    };
</script>

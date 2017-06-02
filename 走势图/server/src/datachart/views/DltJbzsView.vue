<template>
    <div>
        <loading v-if="!jbzs"></loading>
        <div v-if="jbzs">
            <!--zous-2col zous-qianq zous-2col-long-->
            <div class="zous-2col zous-qianq l-full l-flex-row" v-scroll >
                <div class="zous-2col-l l-flex-column">
                    <table class="zstable2 zstable2-tit zstable2-tit-scrollhd">
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
                                    <td class="itm-qih">{{item.expect}}</td>
                                </tr>
                                <tr >
                                    <td :style="{'height': '27px'}" class="itm-qih">出现总次数</td>
                                </tr>
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
                        <div class="e-header l-relative" :style="{height:'35px'}">
                            <div class="l-full" :style="{overflow:'hidden'}">
                                <table class="zstable2 zstable2-main zstable2-yil abc">

                                    <colgroup>
                                        <col width="30" v-for="idx in $route.meta.QianNum">
                                        <col width="30" v-for="idx in $route.meta.HouNum">
                                    </colgroup>
                                    <tbody>
                                    <tr>
                                        <th v-for="idx in $route.meta.QianNum">{{idx}}</th>
                                        <th v-for="idx in $route.meta.HouNum">{{idx}}</th>

                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="e-scroll l-flex-1 l-relative" >
                            <div class="l-full" :style="{overflow:'hidden'}">
                                <table class="zstable2 zstable2-main zstable2-yil">
                                    <colgroup>
                                        <col width="30" v-for="idx in $route.meta.QianNum">
                                        <col width="30" v-for="idx in $route.meta.HouNum">
                                    </colgroup>
                                    <tbody>
                                    <tr v-for="row in jbzs">
                                        <!-- ; row in list-->
                                        <td v-for="idx in $route.meta.QianNum" :class="{'on':row.redfb[idx-1]==='0'}">
                                            <span >{{row.redfb[idx-1]==='0'?idx:row.redfb[idx-1]}}</span>
                                        </td>
                                        <td v-for="idx in $route.meta.HouNum" :class="{'houq-on':row.bluefb[idx-1]==='0'}">
                                            <span >{{row.bluefb[idx-1]==='0'?idx:row.bluefb[idx-1]}}</span>
                                            <!--:class="{blue: row.redfb[idx-1]==='0'}"-->
                                        </td>
                                    </tr>
                                    <tr class="summary line">
                                        <td v-for="idx in $route.meta.QianNum"><span>{{tj.appearcount.redfb[idx-1]}}</span></td>
                                        <td v-for="idx in $route.meta.HouNum"><span>{{tj.appearcount.bluefb[idx-1]}}</span></td>
                                    </tr>
                                    <tr class="summary line">
                                        <td v-for="idx in $route.meta.QianNum"><span>{{tj.avgyl.redfb[idx-1]}}</span></td>
                                        <td v-for="idx in $route.meta.HouNum"><span>{{tj.avgyl.bluefb[idx-1]}}</span></td>
                                    </tr>
                                    <tr class="summary line">
                                        <td v-for="idx in $route.meta.QianNum"><span>{{tj.maxyl.redfb[idx-1]}}</span></td>
                                        <td v-for="idx in $route.meta.HouNum"><span>{{tj.maxyl.bluefb[idx-1]}}</span></td>
                                    </tr>
                                    <tr class="summary line">
                                        <td v-for="idx in $route.meta.QianNum"><span>{{tj.maxlc.redfb[idx-1]}}</span></td>
                                        <td v-for="idx in $route.meta.HouNum"><span>{{tj.maxlc.bluefb[idx-1]}}</span></td>
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
                'getJbzsData'
            ]),
            config() {
                raf(() => {
                    this.$emit('initscroll');
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
//                this.getJbzsData('dlt');
                this.getJbzsData(area);
            } else {
                this.config();
            }
        },

        preFetch (store) {
            let area = store.state.route.params.area;
//            area = 'dlt';
            return store.dispatch('getJbzsData', area);
        }
    };
</script>

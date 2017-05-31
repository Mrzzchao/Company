<template>
    <div>
        <loading v-if="!jbzs"></loading>
        <!--<SsqJbzs :list="jbzs" :blueNum="$route.meta.blueNum" :redNum="$route.meta.redNum"></SsqJbzs>-->
        <div v-if="jbzs">
            <div class="zous-2col l-full l-flex-row " v-scroll  v-zsline>
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
                            <table
                                    class="zstable2 zstable2-tit">
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
                                        <col width="30" v-for="idx in $route.meta.blueNum">
                                        <col width="30" v-for="idx in $route.meta.redNum">
                                    </colgroup>
                                    <tbody>
                                    <tr>
                                        <th v-for="idx in $route.meta.blueNum">{{idx}}</th>
                                        <th v-for="idx in $route.meta.redNum">{{idx}}</th>

                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="e-scroll l-flex-1 l-relative" >
                            <div class="l-full" :style="{overflow:'hidden'}">
                                <table class="zstable2 zstable2-main zstable2-yil l-relative">
                                    <colgroup>
                                        <col width="30" v-for="idx in $route.meta.blueNum">
                                        <col width="30" v-for="idx in $route.meta.redNum">
                                    </colgroup>
                                    <tbody>
                                    <tr v-for="row in jbzs">
                                        <!-- ; row in list-->
                                        <td v-for="idx in $route.meta.blueNum" :class="{'on':row.redfb[idx-1]==='0'}">
                                            <span >{{row.redfb[idx-1]==='0'?idx:row.redfb[idx-1]}}</span>
                                        </td>
                                        <td v-for="idx in $route.meta.redNum" :class="{'on-blue':row.bluefb[idx-1]==='0'}">
                                            <span :class="{blue: row.bluefb[idx-1]==='0'}">{{row.bluefb[idx-1]==='0'?idx:row.bluefb[idx-1]}}</span>
                                        </td>
                                    </tr>

                                    <tr class="summary line">
                                        <td v-for="idx in $route.meta.blueNum"><span>{{tj.appearcount.redfb[idx-1]}}</span></td>
                                        <td v-for="idx in $route.meta.redNum"><span>{{tj.appearcount.bluefb[idx-1]}}</span></td>
                                    </tr>
                                    <tr class="summary line">
                                        <td v-for="idx in $route.meta.blueNum"><span>{{tj.avgyl.redfb[idx-1]}}</span></td>
                                        <td v-for="idx in $route.meta.redNum"><span>{{tj.avgyl.bluefb[idx-1]}}</span></td>
                                    </tr>
                                    <tr class="summary line">
                                        <td v-for="idx in $route.meta.blueNum"><span>{{tj.maxyl.redfb[idx-1]}}</span></td>
                                        <td v-for="idx in $route.meta.redNum"><span>{{tj.maxyl.bluefb[idx-1]}}</span></td>
                                    </tr>
                                    <tr class="summary line">
                                        <td v-for="idx in $route.meta.blueNum"><span>{{tj.maxlc.redfb[idx-1]}}</span></td>
                                        <td v-for="idx in $route.meta.redNum"><span>{{tj.maxlc.bluefb[idx-1]}}</span></td>
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

<style scoped>

    .zstable2-yil .on-blue span {
        display: inline-block;
        width: 16px;
        height: 16px;
        line-height: 17px;
        margin: 0 auto;
        -webkit-border-radius: 16px;
        border-radius: 16px;
        color: #fff;
        background: #39f;
        /*background: #EB7575;*/
        position: relative;
    }

</style>

<script type="text/ecmascript-6">

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
                    this.$emit('initzsline', ['.on-blue span']);
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
//                if(~area.indexOf('swxw')){
//                    this.getJbzsData('hdswxw')
//                }else {
//                    this.getJbzsData(area)
//                }
                this.getJbzsData(area);
            } else {
                this.config();
            }
        },

        preFetch (store) {
            let area = store.state.route.params.area;
//            area = 'ssq';
            return store.dispatch('getJbzsData', area);
        }
    };
</script>

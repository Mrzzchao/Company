<template>
    <div class="xysc daxiao">
        <loading v-if="!fwzs"></loading>
        <div v-if="fwzs" class="zous-2col l-full l-flex-row" v-scroll>
            <div class="zous-2col-l l-flex-column" :style="{width:'20%'}">
                <table class="zstable2 zstable2-tit">
                    <tbody>
                    <tr>
                        <th :style="{height:'43px'}">期号</th>
                    </tr>
                    </tbody>
                </table>
                <div class="e-side l-flex-1 l-relative">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table class="zstable2 zstable2-tit">
                            <tbody>
                            <tr v-for="item in fwzs">
                                <td class="itm-qih">{{item.expect}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- zous-2col-l end -->

            <div class="zous-2col-r l-flex-1 l-flex-column" :style="{overflow:'hidden'}">
                <div class="e-header l-relative" :style="{height:'45px'}">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table class="zstable2 zstable2-main zstable2-yil">
                            <colgroup>
                                <col v-for="idx in 15" width="40">
                            </colgroup>
                            <tbody>
                            <tr>
                                <th colspan="4" class="bdr2">开奖结果</th>
                                <th colspan="4" class="bdr2">季节分布</th>
                                <th colspan="4" class="bdr2">方位分布</th>
                                <th colspan="3">分区走势</th>

                            </tr>
                            <tr>
                                <td>号码</td>
                                <td>生肖</td>
                                <td>方位</td>
                                <td class="bdr2">季节</td>
                                <td>春</td>
                                <td>夏</td>
                                <td>秋</td>
                                <td class="bdr2">冬</td>
                                <td>东</td>
                                <td>南</td>
                                <td>西</td>
                                <td class="bdr2">北</td>
                                <td>一区</td>
                                <td>二区</td>
                                <td>三区</td>
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
                                <tr v-for="row in fwzs">

                                    <td>{{row.opennum}}</td>
                                    <td>{{row.opensz}}</td>
                                    <td>{{row.openfw}}</td>
                                    <td class="bdr2">{{row.openjj}}</td>

                                    <td :class="{'on': row.jjzs[0]==='0'}"><span>{{row.jjzs[0]==='0'?'春':row.jjzs[0]}}</span></td>
                                    <td :class="{'on': row.jjzs[1]==='0'}"><span>{{row.jjzs[1]==='0'?'夏':row.jjzs[1]}}</span></td>
                                    <td :class="{'on': row.jjzs[2]==='0'}"><span>{{row.jjzs[2]==='0'?'秋':row.jjzs[2]}}</span></td>
                                    <td class="bdr2" :class="{'on': row.jjzs[3]==='0'}"><span>{{row.jjzs[3]==='0'?'冬':row.jjzs[3]}}</span></td>


                                    <td :class="{'on': row.fwzs[0]==='0'}"><span>{{row.fwzs[0]==='0'?'东':row.fwzs[0]}}</span></td>
                                    <td :class="{'on': row.fwzs[1]==='0'}"><span>{{row.fwzs[1]==='0'?'南':row.fwzs[1]}}</span></td>
                                    <td :class="{'on': row.fwzs[2]==='0'}"><span>{{row.fwzs[2]==='0'?'西':row.fwzs[2]}}</span></td>
                                    <td class="bdr2" :class="{'on': row.fwzs[3]==='0'}"><span>{{row.fwzs[3]==='0'?'北':row.fwzs[3]}}</span></td>



                                    <td :class="{'on': row.fqzs[0]==='0'}"><span>{{row.fqzs[0]==='0'?'一区':row.fqzs[0]}}</span></td>
                                    <td :class="{'on': row.fqzs[1]==='0'}"><span>{{row.fqzs[1]==='0'?'二区':row.fqzs[1]}}</span></td>
                                    <td :class="{'on': row.fqzs[2]==='0'}"><span>{{row.fqzs[2]==='0'?'三区':row.fqzs[2]}}</span></td>

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
            fwzs() {
                this.config();
            }
        },
        computed: {
            fwzs () {
                return this.$store.state.page.fwzs;
            }
        },
        methods: {
            ...mapActions([
                'getHc1FwzsData'
            ]),
            config() {
                raf(() => {
                    this.$emit('initscroll');
                    this.$emit('initzsline');
                });
            }
        },
        mounted() {
            if (!this.fwzs) {
                this.getHc1FwzsData(this.$route.params.area);
            } else {
                this.config();
            }
        },

        preFetch (store) {
            return store.dispatch('getHc1FwzsData', store.state.route.params.area);
        }
    };

</script>

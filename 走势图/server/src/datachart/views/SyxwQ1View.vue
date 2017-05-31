<template>
    <div>
        <loading v-if="!qyzs"></loading>
        <div v-if="qyzs" class="zous-2col l-full l-flex-row daxiao" v-scroll v-zsline>
            <div class="zous-2col-l l-flex-column" :style="{width:'30%'}">
                <table class="zstable2 zstable2-tit">
                    <tbody>
                    <tr>
                        <th width="70%">期号</th>
                        <th class="bdr2">开奖<br/>号码</th>
                    </tr>
                    </tbody>
                </table>


                <div class="e-side l-flex-1 l-relative">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table class="zstable2 zstable2-tit">
                            <tbody>
                            <tr v-for="item in qyzs">
                                <td width="70%" class="itm-qih">{{item.expect}}</td>
                                <td class="bdr2"><span>{{item.opencode[0]}}</span></td>
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
                                    <col width="40" v-for="idx in $route.meta.num">

                                    <!--<col width="40">-->
                                </colgroup>
                                <tbody>
                                <tr>
                                    <th :colspan="$route.meta.num">第一个号码</th>
                                </tr>
                                <tr>
                                    <td  v-for="idx in $route.meta.num">{{idx}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="e-scroll l-flex-1 l-relative">
                        <div class="l-full" :style="{overflow:'hidden'}">
                            <table class="zstable2 zstable2-main zstable2-yil l-relative">
                                <colgroup>
                                    <col width="40" v-for="idx in $route.meta.num">
                                </colgroup>
                                <tbody>
                                <tr v-for="row in qyzs">
                                    <td v-for="idx in $route.meta.num" :class="{'on':row.yilou[idx-1]==='0','bdr2': idx===0}">
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
                return this.$store.state.page.qyzs;
            }
        },
        components: {
            Loading
        },
        methods: {
            ...mapActions([
                'getQ1zsData'
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
                this.getQ1zsData(this.$route.params.area);
            } else {
                this.config();
            }
        },

        preFetch (store) {
            return store.dispatch('getQ1zsData', store.state.route.params.area);
        }
    };

</script>

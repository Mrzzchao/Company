<template>
    <div>

        <loading v-if="!zdzs"></loading>
        <!--<Ssqzdzs :list="zdzs" :blueNum="$route.meta.blueNum" :zdNum="$route.meta.zdNum"></Ssqzdzs>-->
        <div v-if="zdzs">
            <div class="zous-2col l-full l-flex-row " :class="{hidden:!zdzs}" v-scroll  v-zsline>
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
                                <tr v-for="item in zdzs">
                                    <td class="itm-qih">{{item.expect}}</td>
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
                                <table class="zstable2 zstable2-main zstable2-yil">
                                    <colgroup>
                                        <col width="30">
                                        <col width="30" v-for="idx in $route.meta.zdNum">
                                    </colgroup>
                                    <tbody><tr>
                                        <th >振荡</th>
                                        <th v-for="idx in $route.meta.zdNum">{{idx-1}}</th>
                                    </tr>
                                    </tbody></table>
                            </div>
                        </div>

                        <div class="e-scroll l-flex-1 l-relative" >
                            <div class="l-full" :style="{overflow:'hidden'}">
                                <table class="zstable2 zstable2-main zstable2-zuh">
                                    <colgroup>
                                        <col width="30">
                                        <col width="30" v-for="idx in $route.meta.zdNum">
                                    </colgroup>
                                    <tbody>
                                    <tr v-for="row in zdzs">
                                       <template v-for="idx in $route.meta.zdNum">
                                        <td  v-if="row.zd[idx-1]==='0'">
                                              <span >{{idx-1}}</span>
                                        </td>
                                     </template>
                                        <td v-for="idx in $route.meta.zdNum" :class="{'on':row.zd[idx-1]==='0'}">
                                            <span :class="{on: row.zd[idx-1]==='0'}">{{row.zd[idx-1]==='0'?idx-1:row.zd[idx-1]}}</span>
                                        </td>
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
            zdzs: function () {
                this.config();
            }
        },

        methods: {
            ...mapActions([
                'getZdzsData'
            ]),
            config() {
                raf(() => {
                    this.$emit('initscroll');
                    this.$emit('initzsline', ['.on span']);
                });
            }
        },
        computed: {
            zdzs () {
                return this.$store.state.page.zdzs;
            }
        },

        mounted() {
            if (!this.zdzs) {
                let area = this.$route.params.area;

                this.getZdzsData(area);
            } else {
                this.config();
            }
        },

        preFetch (store) {
            let area = store.state.route.params.area;
            return store.dispatch('getZdzsData', area);
        }
//        serverCacheKey: props => {
//            return `${props.num}::${props.list[props.list.length - 1].expect}::${props.list[0].expect}::${props.list[0].redfb}`;
//        }
    };
</script>

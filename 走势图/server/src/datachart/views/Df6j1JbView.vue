<template>
    <div class="l-full l-flex-column">
        <!--彩种导航 start-->
        <div class="ui-navbox">
            <div class="ui-navbox-in">
                <ul>
                    <li v-if="$route.meta.hasJb"  :class="{'select':~$route.path.indexOf('/jb.html')}"><router-link :to="{path: 'jb.html'}" replace>基本</router-link></li>



                    <li v-if="$route.meta.tabs.length>7"  :class="{'select':~$route.path.indexOf('/7.html')}"><router-link :to="{path: '7.html'}" replace>{{$route.meta.tabs[7]}}</router-link></li>
                    <li v-if="$route.meta.tabs.length>6"  :class="{'select':~$route.path.indexOf('/6.html')}"><router-link :to="{path: '6.html'}" replace>{{$route.meta.tabs[6]}}</router-link></li>
                    <li v-if="$route.meta.tabs.length>5"  :class="{'select':~$route.path.indexOf('/5.html')}"><router-link :to="{path: '5.html'}" replace>{{$route.meta.tabs[5]}}</router-link></li>
                    <li v-if="$route.meta.tabs.length>4"  :class="{'select':~$route.path.indexOf('/4.html')}"><router-link :to="{path: '4.html'}" replace>{{$route.meta.tabs[4]}}</router-link></li>
                    <li  v-if="$route.meta.tabs.length>3"  :class="{'select':~$route.path.indexOf('/3.html')}"><router-link :to="{path: '3.html'}" replace>{{$route.meta.tabs[3]}}</router-link></li>
                    <li  v-if="$route.meta.tabs.length>2"  :class="{'select':~$route.path.indexOf('/2.html')}"><router-link :to="{path: '2.html'}" replace>{{$route.meta.tabs[2]}}</router-link></li>
                    <li  v-if="$route.meta.tabs.length>1"  :class="{'select':~$route.path.indexOf('/1.html')}"><router-link :to="{path: '1.html'}" replace>{{$route.meta.tabs[1]}}</router-link></li>
                    <li  v-if="$route.meta.tabs.length>0"  :class="{'select':~$route.path.indexOf('/0.html')}"><router-link :to="{path: '0.html'}" replace>{{$route.meta.tabs[0]}}</router-link></li>
                </ul>
            </div>
        </div>
        <!--彩种导航 end-->
        <div class="l-flex-1 l-relative">
            <loading v-if="!zxwz"></loading>


            <div v-else>

                <div class="zous-2col zous-qianq l-full l-flex-row" :class="{hidden:!zxwz}" v-scroll>
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
                                    <tr v-for="row in zxwz">
                                        <td class="itm-qih">{{row.expect}}</td>
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
                                            <col v-for="idx in 76" width="30">
                                        </colgroup>
                                        <tbody>

                                        <tr class="two-line">
                                            <th colspan="6" rowspan="2">开奖号码</th>
                                            <th colspan="10">第一位</th>
                                            <th colspan="10">第二位</th>
                                            <th colspan="10">第三位</th>
                                            <th colspan="10">第四位</th>
                                            <th colspan="10">第五位</th>
                                            <th colspan="10">第六位</th>
                                            <th colspan="12">第七位</th>
                                        </tr>
                                        <tr class="two-line">


                                            <td>0</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>0</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                            <td>鼠</td>
                                            <td>牛</td>
                                            <td>虎</td>
                                            <td>兔</td>
                                            <td>龙</td>
                                            <td>蛇</td>
                                            <td>马</td>
                                            <td>羊</td>
                                            <td>猴</td>
                                            <td>鸡</td>
                                            <td>狗</td>
                                            <td>猪</td>


                                        </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="e-scroll l-flex-1 l-relative">
                                <div class="l-full" :style="{overflow:'hidden'}">
                                    <table class="zstable2 zstable2-main zstable2-yil">
                                        <colgroup>
                                            <col v-for="idx in 76" width="30">
                                        </colgroup>
                                        <tbody>
                                        <tr v-for="row in zxwz">
                                            <!--开奖号码-->
                                            <td v-for="code in row.redcode" class="on-zjhm">
                                                <span>{{code}}</span>
                                            </td>

                                            <td v-for="idx in 70" :class="row.yilou,idx|className">
                                                <span>{{row.yilou, idx|show}}</span>
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
    </div>
</template>

<script type="text/ecmascript-6">
    // 已阅
    import scroll from '../common/scroll';
    import {raf} from '../common/util';
    import {mapActions} from 'vuex';
    import Loading from '../components/loading.vue';

    const meta = ['鼠',
        '牛',
        '虎',
        '兔',
        '龙',
        '蛇',
        '马',
        '羊',
        '猴',
        '鸡',
        '狗',
        '猪'];
    export default{
        components: {
            Loading

        },
        directives: {
            scroll
        },

        methods: {
            ...mapActions([
                'getJbzsData', 'getSfcZfbData', 'getSfcSgtjData'
            ]),
            fetchData() {
                if (this.$route.params.area !== 'sfc') {
                    this.getJbzsData(this.$route.params.area);
                } else {
                    if (this.type === 'zfb') {
                        this.getSfcZfbData(this.$route.params.area);
                    } else {
                        this.getSfcSgtjData(this.$route.params.area);
                    }
                }
            },
            config() {
                raf(() => {
                    this.$emit('initscroll');
                });
            }
        },

        computed: {
            zxwz () {
                return this.$store.state.page.jbzs && this.$store.state.page.jbzs.slice(-30);
            },
            type() {
                return this.$route.path.split('/')[3];
            }
        },
        watch: {
            type() {
                this.$store.state.page.jbzs || this.fetchData();
            },
            zxwz() {
                this.config();
            }
        },

        mounted() {
            if (!this.zxwz) {
                this.fetchData();
            } else {
                this.config();
            }
        },
        filters: {
            show: (yilou, idx) => {
                if (idx <= 60) {
                    return yilou[idx - 1] === '0' ? ((idx - 1) % 10) : yilou[idx - 1];
                } else {
                    return yilou[idx - 1] === '0' ? meta[((idx - 1) % 10)] : yilou[idx - 1];
                }
            },
            className(yilou, idx) {
                if (yilou[idx - 1] === '0') {
                    switch (Math.floor((idx - 1) / 10)) {
                        case 0:return 'on-dyw';
                        case 1:return 'on-dew';
                        case 2:return 'on-dsw';
                        case 3:return 'on-dyw';
                        case 4:return 'on-green';
                        case 5:return 'on-dlw';
                        case 6:return 'on-dqw';
                    }
                }
            }

        },

        preFetch (store) {
            let path = store.state.route.path;
            let action;
            if (~path.indexOf('sfc/zfb')) {
                action = 'getSfcZfbData';
            } else if (~path.indexOf('sfc/sgtj')) {
                action = 'getSfcSgtjData';
            } else {
                action = 'getJbzsData';
            }
            return store.dispatch(action, store.state.route.params.area);
        }
    };
</script>

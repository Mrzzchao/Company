<template>
    <div>
        <loading v-if="!ylzs"></loading>
        <div v-if="ylzs">
           <div class="l-full l-scroll-y">
    <div class="wrapper wrapper-space">
        <div class="zous-col">
            <div class="yil-tit">百位冷热</div>
            <div class="zous-col-bd">
                <table class="zstable4 zstable4-lengr zstable4-lengr-re">
                    <tbody>
                    <tr>
                        <th class="itm-haom" width="15%">号码</th>
                        <th class="itm-zhu">柱状图</th>
                        <th width="15%">次数</th>
                        <th width="15%">比例</th>
                    </tr>
                    <tr v-for="item,idx in ylzs.baiwei" >
                        <td class="itm-haom">{{idx}}</td>
                        <td class="itm-zhu">
                            <!--:width="item.gailv|multiple"-->
                            <div class="zhubar"><span :style="{width:parseFloat(item.gailv)*100*3+'%'}"></span></div>
                        </td>
                        <td>{{item.count}}</td>
                        <td>{{item.gailv|multiple}}</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
        <div class="zous-col">
            <div class="yil-tit">十位冷热</div>
            <div class="zous-col-bd">
                <table class="zstable4 zstable4-lengr zstable4-lengr-re">
                    <tbody>
                    <tr>
                        <th class="itm-haom" width="15%">号码</th>
                        <th class="itm-zhu">柱状图</th>
                        <th width="15%">次数</th>
                        <th width="15%">比例</th>
                    </tr>
                    <tr v-for="item,idx in ylzs.shiwei" >
                        <td class="itm-haom">{{idx}}</td>
                        <td class="itm-zhu">
                            <!--:width="item.gailv|multiple"-->
                            <div class="zhubar"><span :style="{width:parseFloat(item.gailv)*100*3+'%'}"></span></div>
                        </td>
                        <td>{{item.count}}</td>
                        <td>{{item.gailv|multiple}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="zous-col">
            <div class="yil-tit">个位冷热</div>
            <div class="zous-col-bd">
                <table class="zstable4 zstable4-lengr zstable4-lengr-re">
                    <tbody>
                    <tr>
                        <th class="itm-haom" width="15%">号码</th>
                        <th class="itm-zhu">柱状图</th>
                        <th width="15%">次数</th>
                        <th width="15%">比例</th>
                    </tr>
                    <tr v-for="item,idx in ylzs.gewei" >
                        <td class="itm-haom">{{idx}}</td>
                        <td class="itm-zhu">
                            <!--:width="item.gailv|multiple"-->
                            <div class="zhubar"><span :style="{width:parseFloat(item.gailv)*100*3+'%'}"></span></div>
                        </td>
                        <td>{{item.count}}</td>
                        <td>{{item.gailv|multiple}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  </div>
         </div>
    </div>
</template>

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
            ylzs: function () {
                this.config();
            }
        },
        methods: {
            ...mapActions([

                'getYlzsData'
            ]),
            config() {
                raf(() => {
                    this.$emit('initscroll');
                });
            }
        },
        computed: {
            ylzs () {
                return this.$store.state.page.ylzs;
            }
        },
        filters: {
            multiple: (val) => {
                val = parseFloat(val) * 100;
                val = val.toFixed(2);
                return val + '%';
            }
        },
        mounted() {
//            console.log(this.ylzs);
            if (!this.ylzs) {
                let area = this.$route.params.area;
                this.getYlzsData(area);
            } else {
                this.config();
            }
        },
        preFetch (store) {
            let area = store.state.route.params.area;
            return store.dispatch('getYlzsData', area);
        }
    };
</script>
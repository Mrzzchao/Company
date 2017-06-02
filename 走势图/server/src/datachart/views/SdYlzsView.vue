<template>
    <div>
        <loading v-if="!ylzs"></loading>
        <div v-if="ylzs">
             <div class="l-full l-scroll-y">
  <div class="wrapper wrapper-space ">
    <div class="zous-col">
        <div class="yil-tit">百位遗漏</div>
        <div class="zous-col-bd">
            <table class="zstable">
                <tbody>
                <tr>
                    <th width="16%">号码</th>
                    <th width="16%">平均</th>
                    <th width="16%">最大</th>
                    <th width="16%">上次</th>
                    <th width="16%">本次</th>
                    <th width="20%">欲出几率</th>
                </tr>
                <tr v-for="item,idx in ylzs.baiwei" >
                    <td><span class="qian-ball">{{idx}}</span></td>
                    <td>{{item.avgyl}}</td>
                    <td>{{item.maxyl}}</td>
                    <td>{{item.preyl}}</td>
                    <td>{{item.curyl}}</td>
                    <td class="red">{{item.yuchu}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="zous-col">
        <div class="yil-tit">十位遗漏</div>
        <div class="zous-col-bd">
            <table class="zstable">
                <tbody>
                <tr>
                    <th width="16%">号码</th>
                    <th width="16%">平均</th>
                    <th width="16%">最大</th>
                    <th width="16%">上次</th>
                    <th width="16%">本次</th>
                    <th width="20%">欲出几率</th>
                </tr>
                <tr v-for="item,idx in ylzs.shiwei">
                    <td><span class="qian-ball">{{idx}}</span></td>
                    <td>{{item.avgyl}}</td>
                    <td>{{item.maxyl}}</td>
                    <td>{{item.preyl}}</td>
                    <td>{{item.curyl}}</td>
                    <td class="red">{{item.yuchu}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="zous-col">
        <div class="yil-tit">个位遗漏</div>
        <div class="zous-col-bd">
            <table class="zstable">
                <tbody>
                <tr>
                    <th width="16%">号码</th>
                    <th width="16%">平均</th>
                    <th width="16%">最大</th>
                    <th width="16%">上次</th>
                    <th width="16%">本次</th>
                    <th width="20%">欲出几率</th>
                </tr>
                <tr v-for="item,idx in ylzs.gewei">
                    <td><span class="qian-ball">{{idx}}</span></td>
                    <td>{{item.avgyl}}</td>
                    <td>{{item.maxyl}}</td>
                    <td>{{item.preyl}}</td>
                    <td>{{item.curyl}}</td>
                    <td class="red">{{item.yuchu}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <ul class="zous-list">
        <li>[平均遗漏] 指多期遗漏的平均值</li>
        <li>[最大遗漏] 历史上遗漏的最大值</li>
        <li>[上次遗漏] 指该号码上次开出之前的遗漏次数</li>
        <li>[本次遗漏] 指该号码自上次开出之后的遗漏次数</li>
        <li>[欲出几率] 本期遗漏/平均遗漏</li>
    </ul>
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
//                    this.$emit('initzsline', ['.on-dyw span', '.on-zjhm span', '.on-sdgw span']);
                });
            }
        },
        computed: {
            ylzs () {
                return this.$store.state.page.ylzs;
            }
        },
        mounted() {
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

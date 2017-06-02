<template>
    <div>
        <loading v-if="!sxzs"></loading>
        <div v-else class="zous-2col l-full l-flex-row" v-scroll v-zsline>
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
                            <tr v-for="row in sxzs">
                                <td class="itm-qih">{{row.expect}}</td>
                            </tr>
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
            <!-- zous-2col-l end -->
            <div class="zous-2col-r l-flex-1 l-flex-column" :style="{overflow:'hidden'}">
                <div class="e-header l-relative" :style="{height:'37px'}">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table class="zstable2 zstable2-main zstable2-yil">
                            <colgroup>
                                <col width="40">
                                <col width="40">
                                <col v-for="idx in 12" width="30">
                            </colgroup>
                            <tbody>
                            <tr>
                                <th>号码</th>
                                <th class="bdr2">生肖</th>
                                <th>鼠</th>
                                <th>牛</th>
                                <th>虎</th>
                                <th>兔</th>
                                <th>龙</th>
                                <th>蛇</th>
                                <th>马</th>
                                <th>羊</th>
                                <th>猴</th>
                                <th>鸡</th>
                                <th>狗</th>
                                <th>猪</th>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="e-scroll l-flex-1 l-relative" :style="{overflow:'hidden'}">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table class="zstable2 zstable2-main zstable2-yil">
                            <colgroup>
                                <col width="40">
                                <col width="40">
                                <col v-for="idx in 12" width="30">

                            </colgroup>

                            <tbody>
                            <tr v-for="item in sxzs">
                                <td>{{item.opennum}}</td>
                                <td class="bdr2">{{item.opensz}}</td>

                                <template v-for="idx in 12">

                                    <td v-if="item.sxzs[idx-1]==='0'" class="on"><span>{{sxmap[idx-1]}}</span></td>
                                    <td v-else><span>{{item.sxzs[idx-1]}}</span></td>

                                </template>
                            </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    // 已阅
   import scroll from '../common/scroll';
   import zsline from '../common/zsline';
   import {mapActions} from 'vuex';
   import Loading from '../components/loading.vue';
   import {raf} from '../common/util';

   export default{
           data() {
               return {
                   sxmap: ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']
               };
           },
           components: {
               Loading
           },
           directives: {
               scroll, zsline
           },
           watch: {
               sxzs() {
                   this.config();
               }
           },
           methods: {
               ...mapActions([
                   'getHc1SxzsData'
               ]),
               config() {
                   raf(() => {
                       this.$emit('initscroll');
                       this.$emit('initzsline');
                   });
               }
           },
           computed: {
               sxzs () {
                   return this.$store.state.page.dxzs;
               }
           },

           mounted() {
               if (!this.sxzs) {
                   let area = this.$route.params.area;
                   this.getHc1SxzsData(area);
               } else {
                   this.config();
               }
           },
           filters: {
               sxname(sxzs, sxmap) {
                   let sxname = '';
                   sxzs.some((e, i) => {
                       if (e === '0') {
                           sxname = sxmap[i];
                           return true;
                       }
                   });
                   return sxname;
               }
           },

           preFetch (store) {
               let area = store.state.route.params.area;

               return store.dispatch('getHc1SxzsData', area);
           }
   };

</script>

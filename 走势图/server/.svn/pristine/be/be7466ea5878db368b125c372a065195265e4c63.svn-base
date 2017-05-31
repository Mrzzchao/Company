<template>
    <div>
        <loading v-if="!klpk"></loading>
        <div v-else class="zous-2col l-full l-flex-row" v-scroll>
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
                            <tr v-for="row in klpk">
                                <td class="itm-qih">{{row.expect}}</td>

                            </tr>


                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
            <!-- zous-2col-l end -->
            <div class="zous-2col-r l-flex-1 l-flex-column" :style="{overflow:'hidden'}">
                <div class="e-header l-relative" :style="{height:'36px'}">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table class="zstable2 zstable2-main zstable2-yil">
                            <colgroup>
                                <col width="30">
                                <col width="30">
                                <col width="30">
                                <col v-for="idx in 6" width="50">
                            </colgroup>
                            <tbody>
                            <tr>
                                <th colspan="3" class="bdr2">开奖号码</th>
                                <th>对子</th>
                                <th>三条</th>
                                <th>同花</th>
                                <th>顺子</th>
                                <th>同花顺</th>
                                <th>三不同</th>

                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="e-scroll l-flex-1 l-relative" :style="{overflow:'hidden'}">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table class="zstable2 zstable2-main zstable2-yil">
                            <colgroup>
                                <col width="30">
                                <col width="30">
                                <col width="30">
                                <col v-for="idx in 6" width="50">
                            </colgroup>

                            <tbody>
                            <tr v-for="item in klpk">
                                <td class="bdr-no" v-if="item.opencode[0][0]==='1'"><i class="ico-pk color3">♠</i>{{item.opencode[0],codeMap|pai}}</td>
                                <td class="bdr-no" v-if="item.opencode[0][0]==='2'"><i class="ico-pk red">♥</i>{{item.opencode[0],codeMap|pai}}</td>
                                <td class="bdr-no" v-if="item.opencode[0][0]==='3'"><i class="ico-pk color3">♣</i>{{item.opencode[0],codeMap|pai}}</td>
                                <td class="bdr-no" v-if="item.opencode[0][0]==='4'"><i class="ico-pk red">♦</i>{{item.opencode[0],codeMap|pai}}</td>


                                <td class="bdr-no" v-if="item.opencode[1][0]==='1'"><i class="ico-pk color3">♠</i>{{item.opencode[1],codeMap|pai}}</td>
                                <td class="bdr-no" v-if="item.opencode[1][0]==='2'"><i class="ico-pk red">♥</i>{{item.opencode[1],codeMap|pai}}</td>
                                <td class="bdr-no" v-if="item.opencode[1][0]==='3'"><i class="ico-pk color3">♣</i>{{item.opencode[1],codeMap|pai}}</td>
                                <td class="bdr-no" v-if="item.opencode[1][0]==='4'"><i class="ico-pk red">♦</i>{{item.opencode[1],codeMap|pai}}</td>


                                <td class="bdr2" v-if="item.opencode[2][0]==='1'"><i class="ico-pk color3">♠</i>{{item.opencode[2],codeMap|pai}}</td>
                                <td class="bdr2" v-if="item.opencode[2][0]==='2'"><i class="ico-pk red">♥</i>{{item.opencode[2],codeMap|pai}}</td>
                                <td class="bdr2" v-if="item.opencode[2][0]==='3'"><i class="ico-pk color3">♣</i>{{item.opencode[2],codeMap|pai}}</td>
                                <td class="bdr2" v-if="item.opencode[2][0]==='4'"><i class="ico-pk red">♦</i>{{item.opencode[2],codeMap|pai}}</td>



                                <template v-for="yl,idx in item.xt">

                                    <td v-if="yl==='0'" class="k3_bg4">{{nameMap[idx]}}</td>
                                    <td v-else>{{yl}}</td>

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

   import scroll from '../common/scroll';
   import {mapActions} from 'vuex';
   import Loading from '../components/loading.vue';
   import {raf} from '../common/util';

   export default{
       data() {
           return {
               codeMap: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
               nameMap: ['对子', '三条', '同花', '顺子', '同花顺', '三不同']
           };
       },
       components: {
           Loading
       },
       directives: {
           scroll
       },
       watch: {
           klpk() {
               this.config();
           }
       },
       methods: {
           ...mapActions([
               'getKlpkData'
           ]),
           config() {
               raf(() => {
                   this.$emit('initscroll');
               });
           }
       },
       computed: {
           klpk () {
               return this.$store.state.page.jbzs;
           }
       },

       mounted() {
           if (!this.klpk) {
               let area = this.$route.params.area;
               this.getKlpkData(area);
           } else {
               this.config();
           }
       },
       filters: {
           pai(code, codeMap) {
               return codeMap[parseInt(code.substr(1)) - 1];
           },
           numclzz(result) {
               return 'k3_bg1';
           }
       },

       preFetch (store) {
           let area = store.state.route.params.area;

           return store.dispatch('getKlpkData', area);
       }
   };

</script>

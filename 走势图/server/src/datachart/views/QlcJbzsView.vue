<template>
    <div>
        <loading v-if="!jbzs"></loading>
        <div v-else>
            <div class="zous-2col l-full l-flex-row" :class="{hidden:!jbzs}" v-scroll>
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
                                <tr v-for="row in jbzs">
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
                        <div class="e-header l-relative" :style="{height:'37px'}">
                            <div class="l-full" :style="{overflow:'hidden'}">
                                <table class="zstable2 zstable2-main zstable2-yil abc">

                                    <colgroup>
                                        <col width="30" v-for="idx in 30">
                                        <col width="80">
                                        <col width="80">
                                        <col width="80">
                                        <col width="80">

                                    </colgroup>
                                    <tbody>
                                    <tr>
                                        <th v-for="idx in 30">{{idx}}</th>
                                        <th>三区比</th>
                                        <th>一区</th>
                                        <th>二区</th>
                                        <th>三区</th>

                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="e-scroll l-flex-1 l-relative">
                            <div class="l-full" :style="{overflow:'hidden'}">
                                <table
                                        class="zstable2 zstable2-main zstable2-yil">
                                    <colgroup>
                                        <col width="30" v-for="idx in 30">
                                        <col width="80">
                                        <col width="80">
                                        <col width="80">
                                        <col width="80">
                                    </colgroup>
                                    <tbody>
                                    <tr v-for="row in jbzs">
                                        <td v-for="idx in 30" :class="{'on':row.redfb[idx-1]==='0'}">
                                            <span :class="{blue: row.bluecode==idx}">{{row.redfb[idx-1]==='0'?idx:row.redfb[idx-1]}}</span>
                                        </td>
                                        <td><span>{{row.sanfq[0]}}</span></td>
                                        <td><span>{{row.sanfq[0].split(':')[0]}}</span></td>
                                        <td><span>{{row.sanfq[0].split(':')[1]}}</span></td>
                                        <td ><span>{{row.sanfq[0].split(':')[2]}}</span></td>

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
    import {mapActions} from 'vuex';
    import Loading from '../components/loading.vue';
    import scroll from '../common/scroll';
    import {raf} from '../common/util';
    export default{
        components: {
            Loading
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
            }
        },
        directives: {
            scroll
        },

        watch: {
            jbzs() {
                this.config();
            }
        },

        mounted() {
            if (!this.jbzs) {
                this.getJbzsData(this.$route.params.area);
            } else {
                this.config();
            }
        },

        preFetch (store) {
            let area = store.state.route.params.area;
            return store.dispatch('getJbzsData', area);
        }
    };
</script>

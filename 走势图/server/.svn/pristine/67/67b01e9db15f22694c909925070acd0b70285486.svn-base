<template>
    <div class="l-full">
        <loading v-if="!jbzs"></loading>
        <div v-else class="zous-2col l-full l-flex-row" v-scroll v-zsline>
            <div class="zous-2col-l l-flex-column">
                <table class="zstable2 zstable2-tit">
                    <tbody>
                    <tr>
                        <th>期号</th>
                    </tr>
                    </tbody>
                </table>
                <div class="e-side l-flex-1">
                    <table class="zstable2 zstable2-tit">
                        <tbody>
                        <tr v-for="row in jbzs">
                            <td class="itm-qih">{{row.expect}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- zous-2col-l end -->

            <div class="zous-2col-r l-flex-1 l-flex-column" :style="{overflow:'hidden'}">
                <div class="e-header">
                    <table class="zstable2 zstable2-main zstable2-yil">
                        <colgroup>
                            <col v-for="idx in 36" width="30">
                        </colgroup>
                        <tbody>
                        <tr>
                            <th v-for="idx in 36">{{idx}}</th>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="e-scroll l-flex-1 l-relative">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table class="zstable2 zstable2-main zstable2-yil">
                            <colgroup>
                                <col v-for="idx in 36" width="30">
                            </colgroup>
                            <tbody>
                            <tr v-for="row in jbzs">
                                <td v-for="idx in 36" :class="{'on':row.yilou[idx-1]==='0'}">
                                    <span :class="{blue: row.bluecode==idx}">{{row.yilou[idx-1]==='0'?idx:row.yilou[idx-1]}}</span>
                                </td>
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
    import scroll from '../common/scroll';
    import zsline from '../common/zsline';
    import {mapActions} from 'vuex';
    import Loading from '../components/loading.vue';
    import {raf} from '../common/util';

    export default{
        components: {
            Loading
        },
        directives: {
            scroll, zsline
        },
        watch: {
            jbzs() {
                this.config();
            }
        },
        methods: {
            ...mapActions([
                'getHc1JbzsData'
            ]),
            config() {
                raf(() => {
                    this.$emit('initscroll');
                    this.$emit('initzsline');
                });
            }
        },
        computed: {
            jbzs () {
                return this.$store.state.page.jbzs;
            }
        },

        mounted() {
            if (!this.jbzs) {
                let area = this.$route.params.area;
                this.getHc1JbzsData(area);
            } else {
                this.config();
            }
        },

        preFetch (store) {
            let area = store.state.route.params.area;

            return store.dispatch('getHc1JbzsData', area);
        }
    };

</script>

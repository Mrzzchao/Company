<template>
    <div class="l-full l-flex-column">
        <!--彩种导航 start-->
        <div class="ui-navbox">
            <div class="ui-navbox-in">
                <ul>
                    <li  :class="{'select':$route.meta.wz==='jb'}"><router-link :to="{path: 'jb.html'}" replace>基本</router-link></li>
                    <li  :class="{'select':$route.meta.wz==='ww'}"><router-link :to="{path: 'ww.html'}" replace>万位</router-link></li>
                    <li   :class="{'select':$route.meta.wz==='qw'}"><router-link :to="{path: 'qw.html'}" replace>千位</router-link></li>
                    <li   :class="{'select':$route.meta.wz==='bw'}"><router-link :to="{path: 'bw.html'}" replace>百位</router-link></li>
                    <li    :class="{'select':$route.meta.wz==='sw'}"><router-link :to="{path: 'sw.html'}" replace>十位</router-link></li>
                    <li   :class="{'select':$route.meta.wz==='gw'}"><router-link :to="{path: 'gw.html'}" replace>个位</router-link></li>
                </ul>
            </div>
        </div>
        <!--彩种导航 end-->
        <div class="l-flex-1 l-relative">
            <loading v-if="!zxwz"></loading>

            <zxwz-component v-if="$route.meta.wz!=='jb'"  :zxwz="zxwz" :wz="$route.meta.wz"></zxwz-component>
            <sscjb v-else :zxwz="zxwz"></sscjb>
        </div>

    </div>


</template>

<script type="text/ecmascript-6">
    // 已阅
    import {mapActions} from 'vuex';
    import Loading from '../components/loading.vue';
    import ZxWz from '../components/SSCZxWz';
    import Sscjb from '../components/SscJb';

    export default{
        components: {
            Loading,
            zxwzComponent: ZxWz,
            Sscjb
        },

        methods: {
            ...mapActions([
                'getSSCFbzsData'
            ])
        },

        computed: {
            zxwz () {
                return this.$store.state.page.fbzs;
            }
        },

        mounted() {
            if (!this.zxwz) {
                this.getSSCFbzsData(this.$route.params.area);
            }
        },

        preFetch (store) {
            return store.dispatch('getSSCFbzsData', store.state.route.params.area);
        }
    };
</script>

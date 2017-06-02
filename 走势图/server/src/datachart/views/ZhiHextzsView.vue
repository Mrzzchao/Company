<template>
    <div>
        <loading v-if="!ZhiHezs"></loading>
        <ZhiHext :list="ZhiHezs"  :count='$route.meta.count' :ws="$route.meta.ws"></ZhiHext>
    </div>
</template>

<script type="text/ecmascript-6">
    // 已阅
    import {mapActions} from 'vuex';
    import Loading from '../components/loading.vue';
    import ZhiHext from '../components/ZhiHextzs.vue';

    export default{
        components: {
            Loading, ZhiHext
        },

        methods: {
            ...mapActions([
                'getZhiHezsData'
            ])
        },

        computed: {
            ZhiHezs () {
                return this.$store.state.page.ZhiHezs;
            }
        },

        mounted() {
            if (!this.ZhiHezs) {
                let area = this.$route.params.area;
                this.getZhiHezsData(area);
            }
        },

        preFetch (store) {
            let area = store.state.route.params.area;
            return store.dispatch('getZhiHezsData', area);
        }
    };
</script>

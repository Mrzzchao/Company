<template>
    <div>
        <loading v-if="!ZhiHezs"></loading>
        <ZhiHezs :list="ZhiHezs" :openw="$route.meta.openw" :num='$route.meta.num'></ZhiHezs>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapActions} from 'vuex';
    import Loading from '../components/loading.vue';
    import ZhiHezs from '../components/ZhiHezs.vue';

    export default{
        components: {
            Loading, ZhiHezs
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

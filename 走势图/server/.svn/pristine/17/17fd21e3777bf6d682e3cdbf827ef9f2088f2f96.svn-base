<template>
    <div>
        <loading v-if="!dxzs"></loading>
        <dxzs v-if="dxzs&&$route.meta.num" :list="dxzs" :openw="$route.meta.openw" :num='$route.meta.num' :dxtype='$route.meta.dxtype'></dxzs>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapActions} from 'vuex';
    import Loading from '../components/loading.vue';
    import Dxzs from '../components/Dxzs.vue';

    export default{
        components: {
            Loading, Dxzs
        },

        methods: {
            ...mapActions([
                'getDxzsData'
            ])
        },

        computed: {
            dxzs () {
                return this.$store.state.page.dxzs;
            }
        },

        mounted() {
            if (!this.dxzs) {
                let area = this.$route.params.area;
                if (~area.indexOf('swxw')) {
                    this.getDxzsData('hdswxw');
                } else {
                    this.getDxzsData(area);
                }
            }
        },

        preFetch (store) {
            let area = store.state.route.params.area;
            if (~area.indexOf('swxw')) {
                area = 'hdswxw';
            }
            return store.dispatch('getDxzsData', area);
        }
    };
</script>

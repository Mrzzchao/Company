<template>
    <div>
        <loading v-if="!dxzs"></loading>
        <dxxt :list="dxzs"  :count='$route.meta.count' :ws="$route.meta.ws"></dxxt>
    </div>
</template>

<script type="text/ecmascript-6">

    import {mapActions} from 'vuex';
    import Loading from '../components/loading.vue';
    import Dxxt from '../components/Dxxtzs.vue';

    export default{
        components: {
            Loading, Dxxt
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

                this.getDxzsData(area);
            }
        },

        preFetch (store) {
            let area = store.state.route.params.area;
            return store.dispatch('getDxzsData', area);
        }
    };
</script>

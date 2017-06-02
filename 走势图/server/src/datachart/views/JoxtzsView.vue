<template>
    <div>
        <loading v-if="!jozs"></loading>
        <joxt :list="jozs"  :count='$route.meta.count' :ws="$route.meta.ws"></joxt>
    </div>
</template>

<script type="text/ecmascript-6">
    // 已阅
    import {mapActions} from 'vuex';
    import Loading from '../components/loading.vue';
    import Joxt from '../components/Joxtzs.vue';

    export default{
        components: {
            Loading, Joxt
        },

        methods: {
            ...mapActions([
                'getJozsData'
            ])
        },

        computed: {
            jozs () {
                return this.$store.state.page.jozs;
            }
        },

        mounted() {
            if (!this.jozs) {
                let area = this.$route.params.area;

                this.getJozsData(area);
            }
        },

        preFetch (store) {
            let area = store.state.route.params.area;
            return store.dispatch('getJozsData', area);
        }
    };
</script>

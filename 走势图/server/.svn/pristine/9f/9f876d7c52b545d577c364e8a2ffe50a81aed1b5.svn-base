<template>
    <div>
        <loading v-if="!fbzs"></loading>
        <fbzs :list="fbzs" :num="$route.meta.num"></fbzs>
    </div>
</template>

<script type="text/ecmascript-6">

    import {mapActions} from 'vuex';
    import Loading from '../components/loading.vue';
    import Fbzs from '../components/Fbzs.vue';

    export default{
        components: {
            Loading, Fbzs
        },

        methods: {
            ...mapActions([
                'getFbzsData'
            ])
        },

        computed: {
            fbzs () {
                return this.$store.state.page.fbzs;
            }
        },

        mounted() {
            if (!this.fbzs) {
                this.getFbzsData(this.$route.params.area);
            }
        },

        preFetch (store) {
            return store.dispatch('getFbzsData', store.state.route.params.area);
        }
    };
</script>

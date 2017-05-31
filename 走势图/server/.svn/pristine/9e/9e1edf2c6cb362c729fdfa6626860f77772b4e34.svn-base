<template>
    <div>
        <loading v-if="!hzzs"></loading>
        <sfhzzs  :list="hzzs" :num="$route.meta.num" :min="$route.meta.min"></sfhzzs>
    </div>
</template>

<script type="text/ecmascript-6">

    import {mapActions} from 'vuex';
    import Loading from '../components/loading.vue';
    import Sfhzzs from '../components/SFHzzs.vue';

    export default{
        components: {
            Loading, Sfhzzs
        },

        methods: {
            ...mapActions([
                'getHzzsData'
            ])
        },

        computed: {
            hzzs () {
                return this.$store.state.page.hzzs;
            }
        },

        mounted() {
            if (!this.hzzs) {
                this.getHzzsData(this.$route.params.area);
            }
        },

        preFetch (store) {
            return store.dispatch('getHzzsData', store.state.route.params.area);
        }
    };
</script>

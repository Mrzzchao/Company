<template>
    <div>
        <loading v-if="!hzzs"></loading>
        <Sschzzs :hzzs="hzzs"></Sschzzs>
    </div>
</template>

<script type="text/ecmascript-6">

    import {mapActions} from 'vuex';
    import Loading from '../components/loading.vue';
    import SSCHzzs from '../components/SSCHzzs.vue';

    export default{
        components: {
            Loading, Sschzzs: SSCHzzs
        },

        methods: {
            ...mapActions([
                'getSSCHzzsData'
            ])
        },

        computed: {
            hzzs () {
                return this.$store.state.page.hzzs;
            }
        },

        mounted() {
            if (!this.hzzs) {
                this.getSSCHzzsData(this.$route.params.area);
            }
        },

        preFetch (store) {
            return store.dispatch('getSSCHzzsData', store.state.route.params.area);
        }
    };
</script>

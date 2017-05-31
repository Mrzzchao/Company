<template>
    <div>
        <loading v-if="!jbzs"></loading>
        <jbzs :list="jbzs" :num="$route.meta.num"></jbzs>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import Loading from '../components/loading.vue';
    import Jbzs from '../components/Jbzs.vue';

    export default{
        components: {
            Loading, Jbzs
        },

        methods: mapActions([
            'getJbzsData'
        ]),
        computed: {
            jbzs () {
                return this.$store.state.page.jbzs;
            }
        },

        mounted() {
            if (!this.jbzs) {
                let area = this.$route.params.area;
                if (~area.indexOf('swxw')) {
                    this.getJbzsData('hdswxw');
                } else {
                    this.getJbzsData(area);
                }
            }
        },

        preFetch (store) {
            let area = store.state.route.params.area;
            if (~area.indexOf('swxw')) {
                area = 'hdswxw';
            }
            return store.dispatch('getJbzsData', area);
        }
    };
</script>

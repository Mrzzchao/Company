<template>
    <div>
        <loading v-if="!jozs"></loading>
        <jozs v-if="jozs&&$route.meta.num" :list="jozs" :openw="$route.meta.openw" :num='$route.meta.num'></jozs>
    </div>
</template>

<script type="text/ecmascript-6">
    // 已阅
    import {mapActions} from 'vuex';
    import Loading from '../components/loading.vue';
    import Jozs from '../components/Jozs.vue';

    export default{
        components: {
            Loading, Jozs
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
                if (~area.indexOf('swxw')) {
                    this.getJozsData('hdswxw');
                } else {
                    this.getJozsData(area);
                }
            }
        },

        preFetch (store) {
            let area = store.state.route.params.area;
            if (~area.indexOf('swxw')) {
                area = 'hdswxw';
            }
            return store.dispatch('getJozsData', area);
        }
    };
</script>

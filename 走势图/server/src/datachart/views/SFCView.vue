<template>
    <div class="l-full l-flex-column">
        <!--彩种导航 start-->
        <div class="ui-navbox">
            <div class="ui-navbox-in">
                <ul>
                    <li v-if="$route.meta.desc.length>2"  :class="{'select':~$route.path.indexOf('/0.html')}"><router-link :to="{path: '0.html'}" replace>{{$route.meta.desc[0]}}</router-link></li>
                    <li v-if="$route.meta.desc.length>1"  :class="{'select':~$route.path.indexOf('/1.html')}"><router-link :to="{path: '1.html'}" replace>{{$route.meta.desc[1]}}</router-link></li>
                    <li  :class="{'select':~$route.path.indexOf('/2.html')}"><router-link :to="{path: '2.html'}" replace>{{$route.meta.desc[2]}}</router-link></li>
                </ul>
            </div>
        </div>
        <!--彩种导航 end-->
        <div class="l-flex-1 l-relative">
            <loading v-if="!zxwz"></loading>
            <zxwz :zxwz="zxwz" :begin="$route.meta.begin" :ws="$route.meta.ws" :from="$route.meta.from"></zxwz>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    // 已阅
    import {mapActions} from 'vuex';
    import Loading from '../components/loading.vue';
    import ZxWz from '../components/ZxWz';

    export default{
        components: {
            Loading,
            zxwz: ZxWz
        },

        methods: {
            ...mapActions([
                'getZxData'
            ])
        },

        computed: {
            zxwz () {
                return this.$store.state.page[this.$route.meta.field];
            }
        },

        mounted() {
            if (!this.zxwz) {
                this.getZxData(this.$route.params.area, this.$route.meta.field);
            }
        },

        preFetch (store) {
            let area = store.state.route.params.area;
            console.log(store.state.route);
            return store.dispatch('getZxData', area, store.state.route.meta.field);
        }
    };
</script>

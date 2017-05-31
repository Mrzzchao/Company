<template>
    <div class="l-full l-flex-column">
        <!--彩种导航 start-->
        <div class="ui-navbox">
            <div class="ui-navbox-in">
                <ul>
                    <li v-if="$route.matched[0].meta.num>6"  :class="{'select':~$route.path.indexOf('/bww.html')}"><router-link :to="{path: 'bww.html'}" replace>{{$route.matched[0].meta.desc&&$route.matched[0].meta.desc[6]||'百万位'}}</router-link></li>
                    <li v-if="$route.matched[0].meta.num>5"  :class="{'select':~$route.path.indexOf('/sww.html')}"><router-link :to="{path: 'sww.html'}" replace>{{$route.matched[0].meta.desc&&$route.matched[0].meta.desc[5]||'十万位'}}</router-link></li>
                    <li v-if="$route.matched[0].meta.num>4"  :class="{'select':~$route.path.indexOf('/ww.html')}"><router-link :to="{path: 'ww.html'}" replace>{{$route.matched[0].meta.desc&&$route.matched[0].meta.desc[4]||'万位'}}</router-link></li>
                    <li  v-if="$route.matched[0].meta.num>3"  :class="{'select':~$route.path.indexOf('/qw.html')}"><router-link :to="{path: 'qw.html'}" replace>{{$route.matched[0].meta.desc&&$route.matched[0].meta.desc[3]||'千位'}}</router-link></li>
                    <li  v-if="$route.matched[0].meta.num>2"  :class="{'select':~$route.path.indexOf('/bw.html')}"><router-link :to="{path: 'bw.html'}" replace>{{$route.matched[0].meta.desc&&$route.matched[0].meta.desc[2]||'百位'}}</router-link></li>
                    <li  v-if="$route.matched[0].meta.num>1"  :class="{'select':~$route.path.indexOf('/sw.html')}"><router-link :to="{path: 'sw.html'}" replace>{{$route.matched[0].meta.desc&&$route.matched[0].meta.desc[1]||'十位'}}</router-link></li>
                    <li  v-if="$route.matched[0].meta.num>0"  :class="{'select':~$route.path.indexOf('/gw.html')}"><router-link :to="{path: 'gw.html'}" replace>{{$route.matched[0].meta.desc&&$route.matched[0].meta.desc[0]||'个位'}}</router-link></li>
                </ul>
            </div>
        </div>
        <!--彩种导航 end-->
        <div class="l-flex-1 l-relative">
            <loading v-if="!zxwz"></loading>
            <zxwz :zxwz="zxwz" :begin="$route.meta.begin" :ws="$route.meta.ws||$route.matched[0].meta.ws" :from="$route.meta.from||$route.matched[0].meta.from"></zxwz>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

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
                'getJbzsData', 'getSfcZfbData'
            ])
        },

        computed: {
            zxwz () {
                return this.$store.state.page.jbzs;
            }
        },

        mounted() {
            if (!this.zxwz) {
                if (this.$route.params.area !== 'sfc') {
                    this.getJbzsData(this.$route.params.area);
                } else {
                    this.getSfcZfbData(this.$route.params.area);
                }
            }
        },

        preFetch (store) {
            let area = store.state.route.params.area;
            if (area !== 'sfc') {
                return store.dispatch('getJbzsData', area);
            } else {
                return store.dispatch('getSfcZfbData', area);
            }
        }
    };
</script>

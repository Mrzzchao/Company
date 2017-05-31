<template>
    <div class="l-full l-flex-column">
        <!--彩种导航 start-->
        <div class="ui-navbox">
            <div class="ui-navbox-in">
                <ul>
                    <li v-if="$route.meta.hasJb"  :class="{'select':~$route.path.indexOf('/jb.html')}"><router-link :to="{path: 'jb.html'}" replace>基本</router-link></li>
                    <li v-if="$route.meta.tabs.length>8"  :class="{'select':~$route.path.indexOf('/8.html')}"><router-link :to="{path: '8.html'}" replace>{{$route.meta.tabs[8]}}</router-link></li>
                    <li v-if="$route.meta.tabs.length>7"  :class="{'select':~$route.path.indexOf('/7.html')}"><router-link :to="{path: '7.html'}" replace>{{$route.meta.tabs[7]}}</router-link></li>
                    <li v-if="$route.meta.tabs.length>6"  :class="{'select':~$route.path.indexOf('/6.html')}"><router-link :to="{path: '6.html'}" replace>{{$route.meta.tabs[6]}}</router-link></li>
                    <li v-if="$route.meta.tabs.length>5"  :class="{'select':~$route.path.indexOf('/5.html')}"><router-link :to="{path: '5.html'}" replace>{{$route.meta.tabs[5]}}</router-link></li>
                    <li v-if="$route.meta.tabs.length>4"  :class="{'select':~$route.path.indexOf('/4.html')}"><router-link :to="{path: '4.html'}" replace>{{$route.meta.tabs[4]}}</router-link></li>
                    <li  v-if="$route.meta.tabs.length>3"  :class="{'select':~$route.path.indexOf('/3.html')}"><router-link :to="{path: '3.html'}" replace>{{$route.meta.tabs[3]}}</router-link></li>
                    <li  v-if="$route.meta.tabs.length>2"  :class="{'select':~$route.path.indexOf('/2.html')}"><router-link :to="{path: '2.html'}" replace>{{$route.meta.tabs[2]}}</router-link></li>
                    <li  v-if="$route.meta.tabs.length>1"  :class="{'select':~$route.path.indexOf('/1.html')}"><router-link :to="{path: '1.html'}" replace>{{$route.meta.tabs[1]}}</router-link></li>
                    <li  v-if="$route.meta.tabs.length>0"  :class="{'select':~$route.path.indexOf('/0.html')}"><router-link :to="{path: '0.html'}" replace>{{$route.meta.tabs[0]}}</router-link></li>
                </ul>
            </div>
        </div>
        <!--彩种导航 end-->
        <div class="l-flex-1 l-relative">
            <loading v-if="!zxwz"></loading>
            <zxwz :zxwz="zxwz" :begin="$route.meta.begin"  :tit="$route.meta.tit" :zsline="$route.meta.zsline"></zxwz>
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
                'getJbzsData', 'getSfcZfbData', 'getSfcSgtjData'
            ]),
            fetchData() {
                if (this.$route.params.area !== 'sfc') {
                    this.getJbzsData(this.$route.params.area);
                } else {
                    if (this.type === 'zfb') {
                        this.getSfcZfbData(this.$route.params.area);
                    } else {
                        this.getSfcSgtjData(this.$route.params.area);
                    }
                }
            }
        },

        computed: {
            zxwz () {
                if (~this.$route.path.indexOf('sfc/sgtj')) {
                    return this.$store.state.page.dxzs;
                } else {
                    return this.$store.state.page.jbzs;
                }
            },
            type() {
                return this.$route.path.split('/')[3];
            }
        },
        watch: {
            type() {
                if (~this.$route.path.indexOf('sfc/sgtj')) {
                    this.$store.state.page.dxzs || this.fetchData();
                } else {
                    this.$store.state.page.jbzs || this.fetchData();
                }
            }
        },

        mounted() {
            if (!this.zxwz) {
                this.fetchData();
            }
        },

        preFetch (store) {
            let path = store.state.route.path;
            let action;
            if (~path.indexOf('sfc/zfb')) {
                action = 'getSfcZfbData';
            } else if (~path.indexOf('sfc/sgtj')) {
                action = 'getSfcSgtjData';
            } else {
                action = 'getJbzsData';
            }
            return store.dispatch(action, store.state.route.params.area);
        }
    };
</script>

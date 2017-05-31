<template>
    <div class="l-full l-flex-column ssc">
        <!--head begin-->
        <header id="uiHead" class="ui-head">
            <div class="ui-head-in">
                <div class="ui-head-l"><span class="ui-head-btn1"  onclick="location.href = '/datachart/'">返回</span></div>
                <div class="ui-head-m" v-tap="{methods: toggleNav}">
                    <span class="ui-head-logo"></span>
                    <h2 class="ui-head-tit">{{title}}<i v-if="$route.params.area!=='bjpkshi'&&$route.params.area!=='sfc'"
                                                        class="three-up" :class="{'three-down':showNav}"></i></h2>
                </div>

            </div>
        </header>

        <div v-if="showNav" @click="showNav=false" class="l-full"
             style="z-index:2;background-color:rgba(0,0,0,.4)"></div>

        <div v-show="showNav" class="nav-weebox ">
            <span @click="showNav=false" :class="{'select':page==='zx'}"><router-link
                    :to="{path: base+'zx/jb.html',params:{area: $route.params.area}}" replace>基本</router-link></span>
            <span v-if="$route.matched[0].meta.tab==='hz'" @click="showNav=false" :class="{'select':page==='hz'}"><router-link
                    :to="{path: base+'hz.html',params:{area: $route.params.area}}" replace>和值</router-link></span>
            <span v-if="$route.matched[0].meta.tab==='dx'" @click="showNav=false" :class="{'select':page==='dx'}"><router-link
                    :to="{path: base+'dx.html',params:{area: $route.params.area}}" replace>大小</router-link></span>
            <!--<span><a href="kaijiang.html">开奖</a></span>-->
        </div>

        <!--head end-->

        <div class="l-flex-1 l-relative">
            <router-view></router-view>
        </div>
    </div>
</template>


<script>
    import {nameMap} from '../common/constants';
    export default {
        name: 'ssccontainer',
        data() {
            return {
                showNav: false,
                nameMap,
                pageNameMap: {
                    'zx': '直选',
                    'dx': '大小',
                    'hz': '和值'
                }
            };
        },
        computed: {
            base() {
                return `/datachart/${this.$route.params.area}/`;
            },
            page() {
                if (~this.$route.path.indexOf('/zx')) {    // ~的作用是为了使得-1变为false,非-1变为true
                    return 'zx';
                } else if (~this.$route.path.indexOf('/hz')) {
                    return 'hz';
                } else if (~this.$route.path.indexOf('/dx')) {
                    return 'dx';
                }
            },

            // 时时彩标题变化
            title() {
                return [this.nameMap[this.$route.params.area], this.$route.meta.title].join('-');
            }
        },
        methods: {
            nav(param) {
                this.$router.replace({name: param.page, params: {area: this.$route.params.area}});
                this.showNav = false;
            },
            toggleNav() {
                (this.$route.params.area === 'bjpkshi' || this.$route.params.area === 'sfc') || (this.showNav = !this.showNav);
            }
        },
        mounted() {

        }
    };

</script>

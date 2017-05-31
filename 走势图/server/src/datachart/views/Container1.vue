<template>
    <div class="l-full l-flex-column ssc">
        <!--head begin-->
        <header id="uiHead" class="ui-head">
            <div class="ui-head-in">
                <div class="ui-head-l"><span class="ui-head-btn1" onclick="location.href = '/datachart/'">返回</span></div>
                <div class="ui-head-m" v-tap="{methods: toggleNav}">
                    <span class="ui-head-logo"></span>
                    <h2 class="ui-head-tit">{{title}}<i v-if="showToggle"
                                                        class="three-up" :class="{'three-down':showNav}"></i></h2>
                </div>
                <div class="ui-head-r" :style="{display:'none'}">
                    <em class="sx-intro">走势</em>
                </div>
            </div>
        </header>

        <div v-if="showNav" @click="showNav=false" class="l-full"
             style="z-index:2;background-color:rgba(0,0,0,.4)"></div>

        <div v-show="showNav" class="nav-weebox ">

            <span v-if="$route.matched[0].meta.zfb" @click="showNav=false" :class="{'select':~$route.path.indexOf('/zfb/')}">
                <router-link :to="{path: `${base}zfb/${dftab}.html`}" replace>号码分布</router-link></span>
            <span v-if="$route.matched[0].meta.sgtj" @click="showNav=false" :class="{'select':~$route.path.indexOf('/sgtj/')}">
                <router-link :to="{path: `${base}sgtj/${dftab}.html`}" replace>赛果统计</router-link></span>

            <span v-if="$route.matched[0].meta.qj" @click="showNav=false" :class="{'select':~$route.path.indexOf('/qj')}">
                <router-link :to="{path: `${base}qj/${dftab}.html`}" replace>区间分布</router-link></span>

            <span v-if="$route.matched[0].meta.zx" @click="showNav=false" :class="{'select':~$route.path.indexOf('/zx')}">
                <router-link :to="{path: `${base}zx/${dftab}.html`}" replace>直选</router-link></span>
            <span v-if="$route.matched[0].meta.jb" @click="showNav=false" :class="{'select':~$route.path.indexOf('/jb')}">
                <router-link :to="{path: `${base}zx/jb.html`}" replace>基本</router-link></span>

            <span v-if="$route.matched[0].meta.hz" @click="showNav=false" :class="{'select':~$route.path.indexOf('/hz')}">
                <router-link :to="{path: `${base}hz.html`}" replace>和值</router-link></span>

            <span v-if="$route.matched[0].meta.dx" @click="showNav=false" :class="{'select':~$route.path.indexOf('/dx')}">
                <router-link :to="{path: `${base}dx.html`}" replace>大小</router-link></span>
            <span v-if="$route.matched[0].meta.jo" @click="showNav=false" :class="{'select':~$route.path.indexOf('/jo')}">
                <router-link :to="{path: `${base}jo.html`}" replace>奇偶</router-link></span>
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
        name: 'container1',
        data() {
            return {
                showNav: false,
                nameMap
            };
        },
        computed: {
            showToggle() {
                return this.$route.params.area !== 'bjpkshi' && this.$route.params.area !== 'kl8';
            },
            base() {
                return `/datachart/${this.$route.params.area}/`;
            },
            dftab() {
                return this.$route.meta.tabs && (this.$route.meta.tabs.length - 1);
            },

            title() {
                return [this.nameMap[this.$route.params.area], this.$route.meta.title].join('-');
            }
        },
        methods: {
            toggleNav() {
                (this.$route.params.area === 'bjpkshi' || this.$route.params.area === 'kl8') || (this.showNav = !this.showNav);
            }
        },
        mounted() {

        }
    };

</script>

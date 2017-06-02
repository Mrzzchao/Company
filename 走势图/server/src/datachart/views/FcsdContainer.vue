<template>
    <div class="l-full l-flex-column syxw" >
    <!--->
        <!--head begin-->
        <header id="uiHead" class="ui-head">
            <div class="ui-head-in">
                <div class="ui-head-l"><span class="ui-head-btn1" onclick="location.href = '/datachart/'">返回</span></div>
                <div class="ui-head-m" v-tap="{methods: toggleNav}">
                    <span class="ui-head-logo"></span>
                    <h2 class="ui-head-tit">{{nameMap[$route.params.area]}}走势图</h2>
                    <i class="three-up" :class="{'three-down':showNav}"> </i>

                </div>
            </div>
        </header>
        <!--head end-->
        <div  v-show="showNav" @click="showNav=false" class="nav-bg"></div>
        <div  v-show="showNav" class="nav-weebox">
            <ul>
                <li @click="showNav=false" :class="{'select':~$route.path.indexOf('/datachart/dlt/')}" >
                    <a href="/datachart/dlt/" >大乐透</a>
                    <!--<router-link :to="{path: `${base}jb.html`}" replace>大乐透</router-link>-->
                </li>
                <li @click="showNav=false" :class="{'select':~$route.path.indexOf('/datachart/ssq/')}" >
                    <a href="/datachart/ssq/" >双色球</a>
                </li>
                <li @click="showNav=false" :class="{'select':~$route.path.indexOf('/datachart/sd/')}" >
                    <a href="/datachart/sd/" >福彩3D</a>
                </li>
                <li @click="showNav=false" :class="{'select':~$route.path.indexOf('/datachart/pls/')}" >
                    <a href="/datachart/pls/" >排列三</a>
                </li>
                <li @click="showNav=false" :class="{'select':~$route.path.indexOf('/datachart/qxc/')}" >
                    <a href="/datachart/qxc/" >七星彩</a>
                </li>
                <li @click="showNav=false" :class="{'select':~$route.path.indexOf('/datachart/qlc/')}" >
                    <a href="/datachart/qlc/" >七乐彩</a>
                </li>
                <li @click="showNav=false" :class="{'select':~$route.path.indexOf('/datachart/plw/')}" >
                    <a href="/datachart/plw/" >排列五</a>
                </li>
                <li @click="showNav=false" :class="{'select':~$route.path.indexOf('/datachart/sfc/')}" >
                    <a href="/datachart/sfc/" >足彩</a>
                </li>
                <li @click="showNav=false" :class="{'select':~$route.path.indexOf('/datachart/ssc/')}" >
                    <a href="/datachart/ssc/" >重庆时时彩</a>
                </li>
                <li @click="showNav=false" :class="{'select':~$route.path.indexOf('/datachart/jssyxw/')}" >
                    <a href="/datachart/jssyxw/" >江苏11选5</a>
                </li>
                <li @click="showNav=false" :class="{'select':~$route.path.indexOf('/datachart/klpk3/')}" >
                    <a href="/datachart/klpk3/" >快乐扑克3</a>
                </li>
                <li @click="showNav=false" :class="{'select':~$route.path.indexOf('/datachart/xysc/')}" >
                    <a href="/datachart/xysc/" >幸运赛车</a>
                </li>
                <li @click="showNav=false" :class="{'select':~$route.path.indexOf('/datachart/dlc/')}" >
                    <a href="/datachart/dlc/" >江西11选5</a>
                </li>
                <li @click="showNav=false" :class="{'select':~$route.path.indexOf('/datachart/df6j1/')}" >
                    <a href="/datachart/df6j1/" >东方6+1</a>
                </li>

            </ul>
        </div>

     <!--彩种导航 start-->
    <div class="ui-navbox">
        <div class="ui-navbox-in">
            <ul>
                <li :class="{'select':~$route.path.indexOf('jb.html')||~$route.path.indexOf('dx.html')||~$route.path.indexOf('jo.html')||~$route.path.indexOf('zh.html')}">
                    <router-link :to="{path: 'jb.html'}" replace>基本</router-link>
                </li>
                <li :class="{'select':~$route.path.indexOf('/yilou.html')}">
                    <router-link :to="{path: 'yilou.html'}" replace>遗漏</router-link>
                </li>
                <li :class="{'select':~$route.path.indexOf('/lengre.html')}">
                    <router-link :to="{path: 'lengre.html'}" replace>冷热</router-link>
                </li>
            </ul>
        </div>
    </div>
        <!--彩种导航 end-->
        <div class="l-flex-1 l-relative">
            <!--<keep-alive>-->
                <router-view></router-view>
            <!--</keep-alive>-->

        </div>

        <div class="zous-foot-new-wrap" v-if="~$route.path.indexOf('jb.html')||~$route.path.indexOf('dx.html')||~$route.path.indexOf('jo.html')||~$route.path.indexOf('zh.html')">
            <div class="zous-foot-qh">
                <span :class="{'on':~$route.path.indexOf('jb.html')}"><router-link :to="{path: 'jb.html'}" replace >分布</router-link></span>
                <span :class="{'on':~$route.path.indexOf('dx.html')}"><router-link :to="{path: 'dx.html'}" replace>大小</router-link></span>
                <span :class="{'on':~$route.path.indexOf('jo.html')}"><router-link :to="{path: 'jo.html'}" replace>奇偶</router-link></span>
                <span :class="{'on':~$route.path.indexOf('zh.html')}"><router-link :to="{path: 'zh.html'}" replace>质合</router-link></span>
            </div>
        </div>
 </div>
</template>

<script>
    // 已阅
    import { nameMap } from '../common/constants';
    export default {
        data() {
            return {
                showNav: false,
                nameMap
            };
        },
        methods: {
            toggleNav() {
                this.showNav = !this.showNav;
            }
        },
        computed: {
            base() {
                return `/datachart/dlt/`;
            }
        },
        mounted() {

        }
    };

</script>

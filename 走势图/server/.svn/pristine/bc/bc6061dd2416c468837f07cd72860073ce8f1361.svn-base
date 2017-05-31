<template>
    <div class="l-full l-flex-column syxw">
        <!--head begin-->
        <header id="uiHead" class="ui-head">
            <div class="ui-head-in">
                <div class="ui-head-l"><span class="ui-head-btn1" onclick="location.href = '/datachart/'">返回</span></div>
                <div class="ui-head-m">
                    <span class="ui-head-logo"></span>
                    <h2 class="ui-head-tit">{{nameMap[$route.params.area]}}走势图</h2>
                </div>
            </div>
        </header>
        <!--head end-->

        <!--彩种导航 start-->
        <div class="ui-navbox">
            <div class="ui-navbox-in">
                <ul>
                    <li :class="{'select':~$route.path.indexOf('/jb.html')}">
                        <router-link :to="{path: 'jb.html'}" replace>基本</router-link>
                    </li>
                    <!--<li :class="{'select':cur==='hz'}">
                        <router-link :to="{name: 'hz',params: {area: $route.params.area}}" replace>和值</router-link>
                    </li>-->
                    <li :class="{'select':~$route.path.indexOf('dx.html')}">
                        <router-link :to="{path: 'dx.html'}" replace>大小</router-link>
                    </li>

                    <li :class="{'select':~$route.path.indexOf('jo.html')}">
                        <router-link :to="{path: 'jo.html'}" replace>奇偶</router-link>
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

    </div>
</template>


<script>
    import { nameMap } from '../common/constants';
    export default {
        data() {
            return {
                nameMap
            };
        },
        mounted() {

        }
    };

</script>

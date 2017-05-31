<template>
    <div class="l-full l-flex-column syxw klpk">
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
                        <router-link :to="{path: 'jb.html'}" replace>基本走势</router-link>
                    </li>
                    <li :class="{'select':~$route.path.indexOf('/kjhm.html')}">
                        <router-link :to="{path: 'kjhm.html'}" replace>开奖号码分布</router-link>
                    </li>
                    <li :class="{'select':~$route.path.indexOf('hmxt.html')}">
                        <router-link :to="{path: 'hmxt.html'}" replace>号码形态</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!--彩种导航 end-->
        <div class="l-flex-1 l-relative">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>



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

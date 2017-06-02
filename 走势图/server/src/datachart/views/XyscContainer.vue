<template>
    <div class="l-full l-flex-column daxiao">
        <!--head begin-->
        <header id="uiHead" class="ui-head">
            <div class="ui-head-in">
                <div class="ui-head-l"><span class="ui-head-btn1"  onclick="location.href = '/datachart/'">返回</span></div>
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
                    <li :class="{'select':~$route.path.indexOf('/q1.html')}">
                        <router-link :to="{path: 'q1.html'}" replace>前一走势</router-link>
                    </li>
                    <li :class="{'select':~$route.path.indexOf('/q2.html')}">
                        <router-link  :to="{path: 'q2.html'}" replace>前二走势</router-link>
                    </li>
                    <li :class="{'select':~$route.path.indexOf('/q3.html')}">
                        <router-link  :to="{path: 'q3.html'}" replace>前三走势</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!--彩种导航 end-->
        <div class="l-flex-1 l-relative">

            <router-view></router-view>

        </div>

    </div>
</template>


<script>
    // 已阅
    import { nameMap } from '../common/constants';
    export default {
        data() {
            return {
                nameMap
            };
        }

    };

</script>

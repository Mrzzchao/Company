<template>
    <div class="l-full l-flex-column syxw haocai">
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
                    <li :class="{'select':~$route.path.indexOf('/sx.html')}">
                        <router-link  :to="{path: 'sx.html'}" replace>生肖</router-link>
                    </li>
                    <li :class="{'select':~$route.path.indexOf('/fw.html')}">
                        <router-link  :to="{path: 'fw.html'}" replace>方位</router-link>
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
    import { nameMap } from '../common/constants';
    export default {
        data() {
            return {
                nameMap
            };
        }

    };

</script>

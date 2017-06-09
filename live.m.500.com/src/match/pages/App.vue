<template>
    <div class="match-wrap l-full l-flex-column">
        <div class="pl-head-box">
            <div class="pl-head">
                <a class="back-icon pl-back">返回</a>
                <span v-if="tab==='basketball'">篮球赛事中心</span>
                <span v-else>足球赛事中心</span>

            </div>
        </div>
        <!--菜单切换-->
        <nav class="match-tab">
            <a href="#/football" class="match-tab-itm" :class="{'cur':tab==='football'}" >足球</a>
            <a href="#/basketball" class="match-tab-itm" :class="{'cur':tab==='basketball'}" >篮球</a>
        </nav>

        <router-view></router-view>
    </div>

</template>

<script>
    export default{

        computed: {
            tab(){
                if (~this.$route.path.indexOf('football')){
                    return 'football';
                } else {
                    return 'basketball';
                }
            }
        }

    };
</script>
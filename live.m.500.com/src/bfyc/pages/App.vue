<template>
    <div class="v124-wrap l-full l-flex-column">
        <!--head begin-->
        <header id="uiHead" class="ui-head">
            <div class="ui-head-in">
                <div class="ui-head-l">
                    <span class="ui-head-btn1">返回</span>
                </div>
                <div class="ui-head-m">
                    <h2 class="ui-head-tit">{{title}}</h2>
                </div>
            </div>
        </header>


        <!--顶部的tab-->
        <div class="l-flex-1 l-relative">

            <router-view></router-view>

        </div>

    </div>

</template>

<script>
    export default{

        computed: {
            title(){
                switch (this.$route.path){
                    case '/predict': return '精选预测';
                    case '/record': return '战绩特征';
                    case '/strength': return '实力对比';
                    case '/hotcool': return '冷热分析';
                    default: return '比分预测';
                }
            }

        },
        methods: {

        },
        mounted(){
//            入口
        }

    };
</script>
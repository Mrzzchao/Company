<template>
    <header class="header inte-header" v-if="footmatch">
        <div class="info">
            <a href="#/football" class="back-icon">返回</a>
            <div class="info-c">
                <div class="info-pic">
                    <img :src="footmatch.matchlogo">
                </div>
                <div class="info-itm">
                    <h1>{{footmatch.simplegbname}}</h1>
                </div>
            </div>
        </div>
        <!--菜单切换-->
        <nav class="sk-tab">
            <a :class="{'cur':tab=='schedule'}" @click="onTab('schedule')">赛程<i :class="{'sktab-arrow':tab=='schedule'}"></i></a>
            <a :class="{'cur':tab=='integral'}" @click="onTab('integral')">积分榜<i :class="{'sktab-arrow':tab=='integral'}"></i></a>
            <a :class="{'cur':tab=='statistics'}" @click="onTab('statistics')">统计<i :class="{'sktab-arrow':tab=='statistics'}"></i></a>
        </nav>
    </header>
</template>

<script>
    export default{
        data(){
            return {
                id: '',
                tab: ''
            };
        },
        computed: {
            footmatch: function(){
                return this.$store.state.footballHeader.title;
            }
        },
        created(){
            this.id = this.$route.params.id;
            this.getTitleData();
            let str = this.$route.path;
            if (~str.lastIndexOf('integral')) this.tab = 'integral';
            else if (~str.lastIndexOf('schedule')) this.tab = 'schedule';
            else this.tab = 'statistics';
        },
        watch: {
            '$route': function(){
                this.id = this.$route.params.id;
                this.getTitleData();
                this.onTab();
            }

        },
        methods: {
            getTitleData: function () {
                this.$store.dispatch('updateFootballTitle', {id: this.id});
            },
            onTab: function(type){
                this.tab = type;
                switch (this.tab){
                    case 'schedule':{
                        location.href = '#/football-league/schedule/' + this.id;
                        break;
                    }
                    case 'integral':{
                        location.href = '#/football-league/integral/' + this.id;
                        break;
                    }
                    case 'statistics':{
                        location.href = '#/football-league/statistics/' + this.id;
                        break;
                    }
                }
            }
        }
    };

</script>
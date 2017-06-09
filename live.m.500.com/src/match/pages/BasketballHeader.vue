<template>
    <header class="header inte-header-b" v-if="match">
        <div class="info">
            <a class="back-icon" href="#/basketball">返回</a>
            <div class="info-c">
                <div class="info-pic">
                    <img :src="match.matchlogo">
                </div>
                <div class="info-itm">
                    <h1>{{match.simplegbname}}</h1>
                </div>
            </div>
        </div>
        <nav class="sk-tab">
            <a :class="{'cur':tab=='schedule'}" @click="onTab('schedule')">赛程<i :class="{'sktab-arrow':tab=='schedule'}"></i></a>
            <a :class="{'cur':tab=='rank'}" @click="onTab('rank')">排名<i :class="{'sktab-arrow':tab=='rank'}"></i></a>
            <a :class="{'cur':tab=='statistics'}" @click="onTab('statistics')">统计<i :class="{'sktab-arrow':tab=='statistics'}"></i></a>
        </nav>
    </header>
</template>

<script>
    export default{
        name: 'BasketballHeader',
        // props:['id','tab'],
        data(){
            return {
                id: '',
                tab: ''
            };
        },
        computed: {
            match: function(){
                return this.$store.state.basketballHeader.title;
            }
        },
        created(){
            this.id = this.$route.params.id;
            this.getTitleData();
            let str = this.$route.path;
            if (~str.lastIndexOf('rank')) this.tab = 'rank';
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
                // console.log(this.id);
                this.$store.dispatch('updateBasketballTitle', {id: this.id});
            },
            onTab: function(type){
                this.tab = type;
                // console.log(this.tab);
                switch (this.tab){
                    case 'schedule':{
                        location.href = '#/basketball-league/schedule/' + this.id;
                        break;
                    }
                    case 'rank':{
                        location.href = '#/basketball-league/rank/' + this.id;
                        break;
                    }
                    case 'statistics':{
                        location.href = '#/basketball-league/statistic/' + this.id;
                        break;
                    }
                }
            }
        }
    };
</script>

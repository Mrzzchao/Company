<template>
    <section class="hot-match l-flex-1 l-relative">
        <div class="l-full l-scroll-y ">
            <h1 class="hot-match-tit">热门</h1>
            <ul class="hot-match-list" v-for="list in match">
                <li class="hot-match-item">
                    <a class="link-all-match" :href=" '#/football-league/integral/'+list.leagueid">
                        <em class="match-icon">
                            <img v-bind:src="list['matchlogo']">
                        </em>
                        <em class="match-tit">{{list['matchgbname']}}</em>
                    </a>
                </li>
            </ul>

            <div class="all-match">
                <a href="#/match/football" class="link-all-match">全部赛事<i class="icon-more"></i></a>
            </div>

        </div>
    </section>

</template>

<script>

    export default{
        computed: {
            match: function(){
                return this.$store.state.football.footballMatch;
            }
        },
        created(){
            this.getData();
        },
        methods: {
            getData: function(){
                this.$store.dispatch('getFootballData');
            }
        }
    };

</script>

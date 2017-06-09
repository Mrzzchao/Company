<template>
    <div class="match-wrap l-full l-flex-column">
        <!--头部-->
        <div class="pl-head-box">
            <div class="pl-head">
                <a class="back-icon pl-back" href="#/football">返回</a>
                足球赛事列表
            </div>
        </div>
        <!--菜单切换区-->
        <nav class="match-tab match-list-tab">
            <div class="match-tab-itm" :class="{'cur':tab=='Europe'}" v-on:click="onTab('Europe')">欧洲</div>
            <div class="match-tab-itm" :class="{'cur':tab=='Asian'}" v-on:click="onTab('Asian')">亚洲</div>
            <div class="match-tab-itm" :class="{'cur':tab=='America'}" v-on:click="onTab('America')">美洲</div>
            <div class="match-tab-itm" :class="{'cur':tab=='Africa'}" v-on:click="onTab('Africa')">非洲</div>
            <div class="match-tab-itm" :class="{'cur':tab=='Inter'}" v-on:click="onTab('Inter')">国际</div>
        </nav>
        <div class="l-flex-1 l-relative">
            <div class="l-full l-scroll-y ">
                <section class="hot-match" >
                    <h1 class="hot-match-tit">洲际赛事</h1>
                    <ul class="hot-match-list" v-for="item in cup">
                        <li class="hot-match-item">
                            <a class="link-all-match" :href="'#/football-league/integral/'+item['leagueid']">
                                <em class="match-icon">
                                    <img :src="item['matchlogo']">
                                </em>
                                <em class="match-tit">{{item['matchgbname']}}</em>
                            </a>
                        </li>
                    </ul>
                </section>

                <section class="hot-match" v-if="tab!=='Inter'">
                    <h1 class="hot-match-tit">各国联赛</h1>
                    <ul class="hot-match-list" v-for="(list,index) in league">
                        <li class="hot-match-item">
                            <a class="link-all-match" v-on:click="collap(index)">
                                <em class="match-icon">
                                    <img :src="list['countrylogo']"/></em>
                                <em class="match-tit">{{list['countryname']}}</em>
                                <i class="icon-open" :class="{'icon-close':isActive[index]}"></i>
                            </a>

                            <ul class="hot-match-list match-list-detail" :class="{'hide':!isActive[index]}" v-for="detail in list.leaguelist">
                                <li class="hot-match-item">
                                    <a :href="'#/football-league/integral/'+detail.seasonid" class="link-all-match">
                                        <em class="match-icon">
                                            <img :src="detail['matchlogo']"/></em>
                                        <em class="match-tit">{{detail['matchgbname']}}</em>
                                    </a>
                                </li>
                            </ul>

                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                tab: 'Europe',
                isActive: {}
            };
        },
        computed: {
            cup: function(){
                return this.$store.state.allFootball.cups;
            },
            league: function(){
                return this.$store.state.allFootball.leagues;
            }
        },
        created(){
            this.getCupsData();
            this.getLeaguesData();
        },
        methods: {
            onTab: function (type) {
                this.tab = type;
                this.getCupsData();
                this.getLeaguesData();
            },
            getCupsData: function () {
                switch (this.tab) {
                    case 'Europe':
                        return this.$store.dispatch('updateCups', {'vtype': 1});
                    case 'Asian':
                        return this.$store.dispatch('updateCups', {'vtype': 2});
                    case 'America':
                        return this.$store.dispatch('updateCups', {'vtype': 3});
                    case 'Africa':
                        return this.$store.dispatch('updateCups', {'vtype': 4});
                    case 'Inter':
                        return this.$store.dispatch('updateCups', {'vtype': 5});
                }
            },
            getLeaguesData: function () {
                switch (this.tab) {
                    case 'Europe':
                        return this.$store.dispatch('updateLeagues', {'vtype': 1});
                    case 'Asian':
                        return this.$store.dispatch('updateLeagues', {'vtype': 2});
                    case 'America':
                        return this.$store.dispatch('updateLeagues', {'vtype': 3});
                    case 'Africa':
                        return this.$store.dispatch('updateLeagues', {'vtype': 4});
                }
            },

            collap: function (index) {
                this.$set(this.isActive, index, !this.isActive[index]);
            }

        }
    };

</script>
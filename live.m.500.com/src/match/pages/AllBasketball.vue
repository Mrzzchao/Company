<template>
        <div class="match-wrap l-full l-flex-column">
            <!--头部-->
            <div class="pl-head-box">
                <div class="pl-head">
                    <a class="back-icon pl-back" href="#/basketball">返回</a>
                    篮球赛事列表
                </div>
            </div>
            <!--菜单切换区-->
            <nav class="match-tab match-list-tab match-list-b">
                <div class="match-tab-itm" :class="{'cur':tab=='Europe'}" @click="onTab('Europe')">欧洲</div>
                <div class="match-tab-itm" :class="{'cur':tab=='Asian'}" @click="onTab('Asian')">亚洲</div>
                <div class="match-tab-itm" :class="{'cur':tab=='America'}" @click="onTab('America')">美洲</div>
                <div class="match-tab-itm" :class="{'cur':tab=='Cup'}" @click="onTab('Cup')">杯赛</div>
            </nav>
            <div class="l-flex-1 l-relative baseketball-cont">
                <div class="l-full l-scroll-y ">
                    <section class="hot-match" >
                        <ul v-if="tab!='Cup'" class="hot-match-list" v-for="list in match">
                            <li class="hot-match-item">
                                <a :href="'#/basketball-league/rank/'+list['leagueid']" class="link-all-match">
                                    <em class="match-icon"><img :src="list['matchlogo']"/></em>
                                    <em class="match-tit">{{list['matchgbname']}}</em>
                                </a>
                            </li>
                        </ul>

                        <ul v-if="tab=='Cup'" class="hot-match-list" v-for="(item,index) in match">
                            <li class="hot-match-item">
                                <a class="link-all-match" @click="collap(index)">
                                    <em class="match-icon">
                                        <img :src="item['countrylogo']"/></em>
                                    <em class="match-tit">{{item['countryname']}}</em>
                                    <i class="icon-open" :class="{'icon-close':isActive[index]}"></i>
                                </a>

                                <!--各国联赛详细-->
                                <ul class="hot-match-list match-list-detail" v-if="isActive[index]" v-for="detail in item.leaguelist">
                                    <li class="hot-match-item">
                                        <a :href=" '#/basketball-league/rank/'+ detail.leagueid" class="link-all-match">
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
            match: function(){
                switch (this.tab){
                    case 'Europe': return this.$store.state.allBasketball.europe;
                    case 'America': return this.$store.state.allBasketball.america;
                    case 'Asian': return this.$store.state.allBasketball.asian;
                    case 'Cup': return this.$store.state.allBasketball.cup;
                }
            }
        },

        created(){
            if (!this.match){
                switch (this.tab){
                    case 'Europe': return this.$store.dispatch('updateEurope');
                    case 'America': return this.$store.dispatch('updateAmerica');
                    case 'Asian': return this.$store.dispatch('updateAsian');
                    case 'Cup': return this.$store.dispatch('updateCup');
                }
            }
        },
        methods: {
            onTab: function(type){
                this.tab = type;
                switch (this.tab){
                    case 'Europe': {
                        if (!this.$store.state.allBasketball.europe){
                            this.$store.dispatch('updateEurope');
                        }
                        break;
                    }
                    case 'America': {
                        if (!this.$store.state.allBasketball.america){
                            this.$store.dispatch('updateAmerica');
                        }
                        break;
                    }
                    case 'Asian': {
                        if (!this.$store.state.allBasketball.asian){
                            this.$store.dispatch('updateAsian');
                        }
                        break;
                    }
                    case 'Cup': {
                        if (!this.$store.state.allBasketball.cup){
                            this.$store.dispatch('updateCup');
                        }
                        break;
                    }
                }
            },

            collap: function(index){
                this.$set(this.isActive, index, !this.isActive[index]);
                // alert(index);
                // alert(this.isActive[index]);
            }
        }
    };

</script>
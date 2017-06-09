<template>
	<div>
		<div class="in-tab responsive">
			<a :class="{'cur':tab=='jclq'}"
			   href="#/basketball"
			   class="wfqh"
			   v-on:click="isPlayType=!isPlayType">{{basketballPlaytypeList[playType]}}<i class="toggle-arrow"></i><i class="tab-arrow"></i><i class="tab-arrow"></i></a>
			<a :class="{'cur':tab=='concern'}"
			   href="#/basketball/concern">我的比赛<i class="tab-arrow"></i></a>
		</div>
		<div class="qi-list-box"
		     v-if="tab=='concern'">
			<div class="gz-tips">
				<div class="gz-tips-icon"></div>
				显示最近10天您有关注、购买过的比赛
			</div>
			<emptyView type="star"
			           v-if="!isLogin&&tab=='concern'"
			           extra-text="登录后即可关注你喜欢的比赛"
			           btn-text="点我登录"
			           v-on:bottnClick="doLogin"></emptyView>
		</div>
	
		<expect v-if="tab!='concern'"
		        :expect="currExpect"
		        :expectlist="match.expect_list"
		        v-on:expectChange="updateExpect"></expect>
		<playtype v-if="isPlayType"
		          type="basketball"
		          :playType="playType"
		          v-on:playTypeChange="updatePlayType"></playtype>
		<list v-if="tab!='concern'||(isLogin&&tab=='concern')"
		      :matchlist="matchlist"
		      :expect="currExpect"
			  :tab="tab"></list>
		<transition name="slide">
			<league :matchlist="match.matches"
			        :option="filterOptions"
			        v-on:remove="removeLeague"
			        v-on:onFilterOptions="doFilterOptions"
			        :playType="playType"
			        v-if="isLeague"></league>
		</transition>
	</div>
</template>
<script>
import playtype from '../components/playtype.vue';
import expect from '../components/expect_list.vue';
import list from '../components/basketball_list.vue';
import platform from '../common/platform';
import league from './league';
import emptyView from './empty-view';

export default {
    name: 'basketball',
    computed: {
        match: function () {
            return this.$store.getters.getBasketballMatch;
        },
        expect: function () {
            return this.match.curr_expect;
        }
    },
    data() {
        return {
            basketballPlaytypeList: { jclq: '竞彩篮球', all: '全部' },
            playType: 'jclq',
            isPlayType: false,
            currExpect: '',
            tab: 'jclq',
            isLeague: false,
            isLogin: false,
            matchlist: [],
            filterOptions: {}
        };
    },
    components: {
        playtype, expect, list, league, emptyView
    },
    created() {
        this.$set(this.$data, 'tab', this.$route.params.tab ? this.$route.params.tab : 'jclq');
        this.$set(this.$data, 'playType', this.$route.params.playType ? this.$route.params.playType : 'jclq');
        this.getMatch(true);

        platform.ready(() => {
            this.isLogin = platform.isLogin();
        });
    },
    watch: {
        'expect': function (val) {
            this.currExpect = val;
        },
        'match': function (val) {
            if (val) {
                this.matchlist = val.matches;
            } else {
                this.matchlist = [];
            }
        },
        '$route': function (val) {
            this.$set(this.$data, 'currExpect', '');
            this.$set(this.$data, 'isPlayType', false);
            this.$set(this.$data, 'tab', this.$route.params.tab ? this.$route.params.tab : 'jclq');
            this.$set(this.$data, 'playType', this.$route.params.playType ? this.$route.params.playType : 'jclq');
            this.getMatch(true);
        }
    },
    methods: {
        onFilter() {
            if (!this.isLogin && this.tab === 'concern') {
                this.isLeague = false;
            } else {
                this.isLeague = true;
            }
        },
        updateExpect: function (expect) {
            this.$set(this.$data, 'currExpect', expect);
            this.getMatch();
        },
        updatePlayType: function (playType) {
            this.$set(this.$data, 'playType', playType);
        },
        removeLeague: function () {
            this.isLeague = false;
        },
        doFilterOptions: function (op) {
            this.isLeague = false;
            this.matchlist = this.match.matches.filter(function (item) {
                return op[item.simpleleague];
            });
            this.filterOptions = op;
        },
        getMatch: function (isForceLoad) {
            if (isForceLoad || (this.currExpect && this.currExpect !== this.match.curr_expect)) {
                if (this.tab === 'jclq') {
                    this.$store.dispatch('getBasketballMatch', {
                        'vtype': this.playType,
                        'expect': this.currExpect
                    });
                }
                if (this.tab === 'concern') {
                    platform.ready(() => {
                        if (platform.isLogin()) {
                            this.$store.dispatch('getBasketballConcernMatch', {
                                'vtype': '2'
                            });
                        }
                    });
                }
                this.getConcernInfo();
            }
        },
        getConcernInfo: function () {
            platform.ready(() => {
                if (platform.isLogin()) {
                    this.$store.dispatch('getConcernInfo', { 'vtype': '2', 'lottery': this.playType });
                }
            });
        },
        doLogin: function () {
            platform.login();
        }
    }
};

</script>

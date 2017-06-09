<template>
	<div>
		<div class="in-tab responsive">
			<a :class="{'cur':tab=='jczq'}"
			   class="wfqh"
			   v-on:click="onTab()">{{footballPlaytypeList[playType]}}<i class="toggle-arrow" :class="{'rotate180':isPlayType}"></i><i class="tab-arrow"></i><i class="tab-arrow"></i></a>
			<a :class="{'cur':tab=='hot'}"
			   href="#/football/hot">精选<i class="tab-arrow"></i></a>
			<a :class="{'cur':tab=='concern'}"
			   href="#/football/concern">我的比赛<i class="tab-arrow"></i></a>
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
		<playtype v-if="isPlayType&&tab!='concern'"
		          type="football"
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
<script type="text/ecmascript-6">

import playtype from '../components/playtype.vue';
import expect from '../components/expect_list.vue';
import list from '../components/football_list.vue';
import platform from '../common/platform';
import league from './league';
import emptyView from './empty-view';

export default {
    name: 'football',
    computed: {
        match: function () {
            return this.$store.getters.getFootballMatch;
        },
        expect: function () {
            return this.match.curr_expect;
        }
    },
    data() {
        return {
            footballPlaytypeList: { jczq: '竞彩足球', sfc: '胜负彩', bjdc: '北京单场', all: '全部' },
            playType: 'jczq',
            isPlayType: false,
            tab: 'jczq',
            currExpect: '',
            isLeague: false,
            isLogin: false,
            matchlist: [], // 正式比赛列表,
            filterOptions: {}
        };
    },
    components: {
        playtype, expect, list, league, emptyView
    },
    created() {
        this.$set(this.$data, 'tab', this.$route.params.tab ? this.$route.params.tab : 'jczq');
        this.$set(this.$data, 'playType', this.$route.params.playType ? this.$route.params.playType : 'jczq');
        this.getMatch(true);
        platform.ready(() => {
            this.isLogin = platform.isLogin();
        });
    },
    watch: {
        'match': function (val) {
            if (val && val.matches) {
                this.matchlist = val.matches.slice(0);
                this.currExpect = val.curr_expect;
            } else {
                this.matchlist = [];
            }
        },
        '$route': function (val) {
            this.$set(this.$data, 'currExpect', '');
            this.$set(this.$data, 'playType', this.$route.params.playType ? this.$route.params.playType : 'jczq');
            this.$set(this.$data, 'isPlayType', false);
            this.$set(this.$data, 'tab', this.$route.params.tab ? this.$route.params.tab : 'jczq');
            this.getMatch(true);
        }
    },
    methods: {
        onFilter() {
            console.log('filter');
            if (!this.isLogin && this.tab === 'concern') {
                this.isLeague = false;
            } else {
                this.isLeague = true;
            }
        },
        onTab: function () {
            if (this.tab === 'jczq') {
                this.isPlayType = !this.isPlayType;
            } else {
                location.href = '#/football';
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
                if (this.tab === 'jczq') {
                    this.$store.dispatch('getFootballMatch', {
                        'vtype': this.playType,
                        'expect': this.currExpect
                    });
                }
                if (this.tab === 'hot') {
                    this.$store.dispatch('getFootballHotMatch', {
                        'expect': this.currExpect
                    });
                }
                if (this.tab === 'concern') {
                    this.$store.dispatch('updateFootballMatch', {});
                    platform.ready(() => {
                        if (platform.isLogin()) {
                            this.$store.dispatch('getFootballConcernMatch', {
                                'vtype': '1'
                            });
                        } else {
                            this.$store.dispatch('updateRequestState', false);
                        }
                    });
                }
                this.getConcernInfo();
            }
        },
        getConcernInfo: function () {
            platform.ready(() => {
                if (platform.isLogin()) {
                    this.$store.dispatch('getConcernInfo', { 'vtype': '1', 'lottery': this.playType });
                }
            });
        },
        doLogin: function () {
            platform.login();
        }
    }
};

</script>

<template>
    <div class="main-index">
        <div class="loading"
             :class="{'hide':!isRequest}">
            <div class="icon"></div>
            <div class="icon-shadow"></div>
        </div>
        <emptyView v-if="!isRequest&&isEmpty"
                   type="no-data"
                   extra-text="暂无数据"></emptyView>
        <emptyView v-if="!isRequest&&isEmpty&&tab=='concern'"
                   type="no-data"
                   extra-text="收录近期你关注或已购的比赛,方便查看"></emptyView>
        <div v-if="list.length>0"
             class="list">
            <div class="list-item"
                 :id="$item.fid"
                 v-for="$item in list">

                <div class="list-tit">
                    <span class="list-day"> {{$item.order}}&nbsp;&nbsp;{{$item.simpleleague}}</span>

                    <span class="list-state color3"
                          v-if="$item.status == StatusCode.NOT_STARTED ||$item.status==StatusCode.CANCELED || $item.status==StatusCode.CHANGED || $item.status==StatusCode.REMOVED || $item.status==StatusCode.PAUSED || $item.status==StatusCode.UNSURE">
										{{$item.matchtime.substring(5,16)}}</span>
                    <span class="list-state color3"
                          v-if="$item.status==StatusCode.ENDED">完场</span>

                    <span class="list-state green"
                          v-if="$item.status==StatusCode.MID">中场休息</span>
                    <span class="list-state green"
                          v-if="$item.status == StatusCode.FIRST_HALF || $item.status == StatusCode.LAST_HALF">{{$item.match_at | matchAtFmt($item.status == StatusCode.FIRST_HALF)}}<i
                            class="dian">'</i></span>
                    <span class="list-state green"
                          v-if="$item.status==StatusCode.ENDED && $item.extra_statusid == StatusCode.SPOT_KICK_STARTED">点球 {{$item.spot_kick_score}}</span>

                    <span class="list-time"
                          v-if="$item.status==StatusCode.MID || $item.status == StatusCode.FIRST_HALF || $item.status == StatusCode.LAST_HALF || $item.status == StatusCode.MID || $item.status == StatusCode.ENDED">
											{{$item.matchtime.substring(5,16)}}</span>
                    <span class="list-time"
                          v-if="$item.status == StatusCode.NOT_STARTED ||$item.status==StatusCode.CANCELED || $item.status==StatusCode.CHANGED || $item.status==StatusCode.REMOVED || $item.status==StatusCode.PAUSED || $item.status==StatusCode.UNSURE"></span>
                </div>
                <div class="list-team">
                    <div class="team team-l f30"><img :src="$item.homelogo"> {{$item.homesxname|truncate(4)}}
                        <sub class="team-site f22"
                             v-if="$item.zlc == 1">(中)</sub>
                        <i class="red-pai f22"
                           v-show="$item.home_red_counts > 0">{{$item.home_red_counts}}</i>
                    </div>

                    <div class="team-c"
                         v-if="$item.status == StatusCode.FIRST_HALF || $item.status == StatusCode.LAST_HALF || $item.status == StatusCode.MID || $item.status == StatusCode.ENDED"
                         :class="{'green':$item.status != StatusCode.ENDED,'color3':$item.status == StatusCode.ENDED}">
                        <p class="score">
                            <em class="score-itm">{{$item.homescore}}</em>
                            <span class="score-c">:</span>
                            <em class="score-itm">{{$item.awayscore}}</em>
                        </p>
                    </div>
                    <div class="team-c"
                         v-if="$item.status == StatusCode.NOT_STARTED"
                         @click="onCollect($item.fid,$item.isfocus)">
                        <i class="collect"
                           :class="{'cur':$item.isfocus=='1'}"></i>
                    </div>

                    <div class="team-c"
                         v-if="$item.status==StatusCode.CANCELED"><span class="f30 ffw">取消</span></div>
                    <div class="team-c"
                         v-if="$item.status==StatusCode.CHANGED"><span class="f30 ffw">改期</span></div>
                    <div class="team-c"
                         v-if="$item.status==StatusCode.REMOVED"><span class="f30 ffw">腰斩</span></div>
                    <div class="team-c"
                         v-if="$item.status==StatusCode.PAUSED"><span class="f30 ffw">中断</span></div>
                    <div class="team-c"
                         v-if="$item.status==StatusCode.UNSURE"><span class="f30 ffw">待定</span></div>

                    <div class="team team-r f30">
                        <i class="red-pai f22"
                           v-if="$item.away_red_counts>0">{{$item.away_red_counts}}</i> {{$item.awaysxname|truncate(4)}}
                        <img :src="$item.awaylogo">
                    </div>
                </div>
                <div class="list-info f22">
                    <span v-if="$item.status == StatusCode.MID||$item.status==StatusCode.LAST_HALF||$item.status==StatusCode.ENDED">半场 {{$item.homehalfscore}}:{{$item.awayhalfscore}}&nbsp;</span>
                    <span v-if="$item.status == StatusCode.ENDED && $item.extra_statusid == StatusCode.EXTRA_STARTED">90'内 {{$item.homescore}}:{{$item.awayscore}}&nbsp;</span>
                    <span v-if="$item.status == StatusCode.ENDED && $item.extra_statusid == StatusCode.EXTRA_ENDED">90'内 {{$item.homescore}}:{{$item.awayscore}} 加时 {{$item.extra_time_score}}&nbsp;</span>
                    <span v-if="$item.status == StatusCode.ENDED && $item.extra_statusid == StatusCode.SPOT_KICK_ENDED">90'内 {{$item.homescore}}:{{$item.awayscore}} {{$item.extra_exist==1?('加时'+$item.extra_time_score):''}} 点球 {{$item.spot_kick_score}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import status from '../common/footballstatus';
    import platform from '../common/platform';
    import websocket from '../common/websocket';
    import emptyView from './empty-view';
    export default {
        props: ['matchlist', 'expect', 'tab'],
        data: function () {
            return {
                StatusCode: status,
                itemIndex: {},
                list: []
            };
        },
        computed: {
            concernSateList: function () {
                return this.$store.getters.getConcern;
            },
            isRequest: function () {
                return this.$store.getters.getRequestState;
            },
            isEmpty: function () {
                return this.list.length === 0;
            }
        },
        components: {
            emptyView
        },
        created() {
            this.itemIndex = {};
        },
        methods: {
            onCollect: function (fid, isfocus) {
                platform.ready(() => {
                    if (platform.isLogin()) {
                        let op = isfocus === '1' ? 'unset' : 'set';
                        this.$store.dispatch('updateConcernState', {
                            vtype: '1',
                            fid: fid,
                            op: op,
                            lotid: '46',
                            expect: this.expect
                        });
                        if (this.$route.params.tab === 'concern' && isfocus === '1') {
                            this.list = this.list.filter(function (item) {
                                return item.fid !== fid;
                            });
                        } else {
                            let match = this.list[this.itemIndex[fid]];
                            match.isfocus = isfocus === '1' ? '0' : '1';
                            this.$set(this.list, this.itemIndex[fid], match);
                        }
                    } else {
                        platform.login();
                    }
                });
            },
            updateConcern: function () {
                for (var i = 0, j = this.concernSateList.length; i < j; i++) {
                    let o = this.concernSateList[i];
                    let match = this.list[this.itemIndex[o.fid]];
                    if (match && match.fid === o.fid && o.isfocus === '1') {
                        match['isfocus'] = o.isfocus;
                        this.$set(this.list, this.itemIndex[o.fid], match);
                    }
                }
            },
            subscribeFootball: function () {
                let list = this.list.filter(match => match.status !== this.StatusCode.ENDED).map(match => match.fid);
                websocket.subscribeFootballInfo(list);// 订阅 websocket 通知
                websocket.eventBus.$on(websocket.pushEvents.FOOTBALL_INFO, ({data}) => {
                    let match = this.list[this.itemIndex[data.fid]];
                    if (match && match.fid === data.fid) {
                        this.$set(this.list, this.itemIndex[data.fid], Object.assign({}, match, data));
                    }
                });
            },
            scrollToPostion: function () {
                document.querySelector('div.list-view') && (document.querySelector('div.list-view').setAttribute('style', 'opacity: 0'));
                window.scrollTo(0, 0);
                let item = 0;
                for (var i = 0, j = this.matchlist.length; i < j; i++) {
                    let status = this.matchlist[i].status;
                    if (status === '3' || status === '2' || status === '1' || status === '0') {
                        item = i;
                        break;
                    }
                }
                var target = document.querySelector('div.list-item');
                if (target && document.querySelectorAll('div.list-item').length > item) {
                    if (item > 2) {
                        document.body.scrollTop = target.offsetHeight * item;
                    }
                }
                if (document.querySelector('div.list-view')) {
                    document.querySelector('div.list-view').removeAttribute('style');
                }
            }
        },
        watch: {
            'matchlist': function (val) {
                if (val) {
                    this.list = val.slice(0);
                    for (var i = 0, j = val.length; i < j; i++) {
                        this.itemIndex[val[i].fid] = i;
                    }
                    this.updateConcern();
                    this.subscribeFootball();
                    this.$nextTick(function () {
                        this.scrollToPostion();
                    });
                } else {
                    this.list = [];
                }
            },
            'concernSateList': function (val) {
                this.updateConcern();
            }
        },
        filters: {
            matchtimeFmt: (macthtime) => {
                return macthtime.match(/\d{2}:\d{2}/)[0];
            },
            matchdateFmt: (macthtime) => {
                return macthtime.match(/\d{2}-\d{2}/)[0];
            },
            matchAtFmt: (matchAt, isFirstHalf) => {
                let second = Number(matchAt);
                if (second >= 45 * 60) {
                    return isFirstHalf ? '45+' : '90+';
                }
                var minute = Math.ceil(Number(matchAt) / 60);
                if (minute <= 0) {
                    minute = 1;
                }
                return isFirstHalf ? minute : (minute + 45);
            },
            matchtimeFm: (macthtime) => {
                return macthtime.match(/\d{2}:\d{2}/)[0];
            },
            truncate: function (input, length, tail) {
                if (input.length <= length) {
                    return input;
                }
                return input.slice(0, length) + (tail != null ? tail : '...');
            }
        }
    };

</script>
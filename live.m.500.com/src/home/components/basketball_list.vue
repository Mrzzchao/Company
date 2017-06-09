<template>
    <div class="main-index">
        <div class="loading"
             :class="{'hide':!isRequest}">
            <div class="icon"></div>
            <div class="icon-shadow"></div>
        </div>
        <emptyView v-if="!isRequest&&isEmpty&&tab!='concern'"
                   type="no-data"
                   extra-text="暂无数据"></emptyView>
        <emptyView v-if="!isRequest&&isEmpty&&tab=='concern'"
                   type="no-data"
                   extra-text="收录近期你关注或已购的比赛,方便查看"></emptyView>
    
        <div class="list">
            <div class="list-item"
                 v-for="$item in list">
    
                <div class="list-tit"><span class="list-day">{{$item.order}}&nbsp;&nbsp;{{$item.simpleleague}}</span>
                    <span class="list-state color3"
                          v-if="$item.status == StatusCode.NOT_STARTED">{{$item.matchdate.slice(5,10)}} {{$item.matchdate.slice(11,16)}}</span>
                    <span class="list-state green"
                          v-if="
                                            $item.status == StatusCode.SECTION_1 ||
                                            $item.status == StatusCode.SECTION_2 ||
                                            $item.status == StatusCode.SECTION_3 ||
                                            $item.status == StatusCode.SECTION_4">{{$item.match_at}} {{$item.status_desc}}</span>
                    <div class="list-state green"
                         v-if="$item.status == StatusCode.OVERTIME_1 ||
                                            $item.status == StatusCode.OVERTIME_2 ||
                                            $item.status == StatusCode.OVERTIME_3 ||
                                            $item.status == StatusCode.OVERTIME_4">{{$item.match_at}} {{ StatusName[$item.status] || $item.status_desc}}
                    </div>
                    <span class="list-state green"
                          v-if="$item.status == StatusCode.MID">中场休息</span>
                    <span class="list-state color3"
                          v-if="$item.status == StatusCode.ENDED">完场</span>
                    <span class="list-state color3"
                          v-if="$item.status == StatusCode.CHANGED">改期</span>
                    <span class="list-time">{{$item.status != StatusCode.NOT_STARTED?($item.matchdate.slice(5,10)+'&nbsp;&nbsp;'+$item.matchdate.slice(11,16)):''}}</span>
                </div>
                <div class="list-team">
                    <div class="team team-l f30"><img :src="$item.awaylogo"> {{$item.awaysxname|truncate(4)}}
                    </div>
                    <div class="team-c"
                         v-if="$item.status != StatusCode.NOT_STARTED && $item.status != StatusCode.CHANGED"
                         :class="{'green':$item.status != StatusCode.ENDED,'color3':$item.status == StatusCode.ENDED}">
                        <p class="score">
                            <em class="score-itm"
                                v-scroll-text="{'score':$item.awayscore,'class':'itmMove',timeOut:1,oldClass:'score-itm'}">
                                        <i>{{$item.awayscore}}</i>
                                        <i>{{$item.awayscore}}</i>
                                    </em>
                            <span class="score-c">:</span>
                            <em class="score-itm"
                                v-scroll-text="{'score':$item.homescore,'class':'itmMove',timeOut:1,oldClass:'score-itm'}">
                                        <i>{{$item.homescore}}</i>
                                        <i>{{$item.homescore}}</i>
                                    </em>
                        </p>
                    </div>
                    <div class="team-c"
                         v-if="$item.status == StatusCode.NOT_STARTED">
                        <i class="collect"
                           :class="{'cur':$item.isfocus == '1'}"
                           @click="onCollect($item.fid,$item.isfocus)"></i>
                    </div>
                    <div class="team team-r f30">
                        {{$item.homesxname|truncate(4)}} <img :src="$item.homelogo">
                    </div>
                </div>
                <div class="list-info f22"
                     v-if="$item.status==StatusCode.ENDED"> 总分：{{$item.total}}&nbsp;&nbsp;分差：{{$item.diff}} </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script type="text/ecmascript-6">
import status from '../common/basketballstatus';
import platform from '../common/platform';
import websocket from '../common/websocket';
import emptyView from './empty-view';

export default {
    props: ['matchlist', 'expect', 'tab'],
    data: function () {
        return {
            StatusCode: status.BBallStatusCode,
            StatusName: status.BBallStatusName,
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

    },
    watch: {
        'matchlist': function (val) {
            if (val) {
                this.list = val.slice(0);
                for (var i = 0, j = val.length; i < j; i++) {
                    this.itemIndex[val[i].fid] = i;
                }
                this.updateConcern();
                this.subscribeBasketball();
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
        truncate: function (input, length, tail) {
            if (input.length <= length) {
                return input;
            }
            return input.slice(0, length) + (tail != null ? tail : '...');
        }
    },
    methods: {
        onCollect: function (fid, isfocus) {
            platform.ready(() => {
                if (platform.isLogin()) {
                    let op = isfocus === '1' ? 'unset' : 'set';
                    this.$store.dispatch('updateConcernState', { vtype: '2', fid: fid, op: op, lotid: '47', expect: this.expect });

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
        subscribeBasketball: function () {
            let list = this.list.filter(match => match.status !== this.StatusCode.ENDED).map(match => match.fid);
            websocket.subscribeBasketballInfo(list);// 订阅 websocket 通知
            websocket.eventBus.$on(websocket.pushEvents.BASKETBALL_INFO, ({ data }) => {
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
                if (['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'].indexOf(status) > -1) {
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
    }
};

</script>
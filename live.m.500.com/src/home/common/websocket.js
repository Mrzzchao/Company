import SockJS from 'sockjs-client';
import config from './config';
import Vue from 'vue';
export default {
    pushEvents: {
        FOOTBALL_INFO: 0, // 足球对阵信息的推送
        BASKETBALL_INFO: 1, // 篮球对阵信息的推送
        FOOTBALL_EVENT: 2, // 足球事件列表的推送
        BASKETBALL_EVENT: 3 // 篮球事件列表的推送
    },
    eventBus: new Vue(), // 使用vue 作为事件总线
    socket: null,
    isConnect: false,
    supportWebsocket: typeof WebSocket !== 'undefined',
    messageEvent: [],
    packageList: [],
    intervalPing: null,
    init: function () {
        if (!this.supportWebsocket || this.isConnect) {
            return;
        }
        this.socket = new SockJS(config.websocketUrl);
        this.socket.onopen = () => {
            console.log('webSocket connect to:' + config.websocketUrl);
            this.isConnect = true;
            this.sendAll();
            this.sendPingPackage();
        };
        this.socket.onclose = () => {
            this.isConnect = false;
            this.clearPingPackage();
            console.log('websocket closed');
            var _this = this;
            setTimeout(() => {
                _this.init();
            }, 2000);
        };
        this.socket.onmessage = (res) => {
            try {
                res = JSON.parse(res.data);
                console.log(res);
                this.eventBus.$emit(res.stamp, { topic: res.topic, data: res.data });
            } catch (ex) {
                console.log(ex);
            }
        };
    },
    sendAll: function () {
        if (this.packageList.length > 0) {
            let list = this.packageList.slice();
            this.packageList.length = 0;
            list.forEach(packet => this.send(packet));
        }
    },
    send: function (data) {
        if (!this.supportWebsocket) {
            return;
        }
        if (!this.isConnect) {
            this.packageList.push(data);
            return this.init();
        }
        try {
            this.socket.send(JSON.stringify(data));
        } catch (e) {
            console.error(e);
            var _this = this;
            setTimeout(function() {
                _this.send(data);
            }, 100);
        }
    },
    sendPingPackage() {
        this.intervalPing = setInterval(() => {
            this.send({
                'action': 'ping',
                'from': JSON.stringify({
                    url: window.location.href,
                    time: new Date().getTime()
                })
            });
        }, 10 * 1000);
    },
    clearPingPackage() {
        clearInterval(this.intervalPing);
    },
    subscribeFootballInfo: function (fidList) {
        if (!fidList || fidList.length < 1) {
            return;
        }
        let eventList = fidList.map(fid => {
            return 'LIVE:FOOTBALL:INFO:' + fid;
        });
        this.send({
            action: 'subs',
            stamp: this.pushEvents.FOOTBALL_INFO,
            data: eventList
        });
    },
    subscribeBasketballInfo: function (fidList) {
        if (!fidList || fidList.length < 1) {
            return;
        }
        let eventList = fidList.map(fid => {
            return 'LIVE:BASKETBALL:INFO:' + fid;
        });
        this.send({
            action: 'subs',
            stamp: this.pushEvents.BASKETBALL_INFO,
            data: eventList
        });
    }
};
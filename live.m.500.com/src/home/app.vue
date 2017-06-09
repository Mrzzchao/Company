<template>

    <div>
        <div class="headernav">
            <div class="headernavL"><a v-if="!hideHomeBack" v-tap="{methods: back}" class="home-icon">返回</a></div>
            <ul class="toggle-cz">
                <li :class="{'cur': lottery=='football'}" v-tap="{methods: nav, lottery: 'football'}">足球</li>
                <li :class="{'cur': lottery=='basketball'}" v-tap="{methods: nav, lottery: 'basketball'}">篮球</li>
            </ul>
            <div class="headernavR">
                <a v-if="!hideMatchCenter" href="match#/football" class="league-icon"></a>
                <a class="sx-icon" v-tap="{methods: showSelect}" href="javascript:void(0);"></a>
            </div>
        </div>
        <router-view ref="ball"></router-view>
    </div>


</template>

<script>
    import platform from './common/platform';
    export default {
        data() {
            return {
                hideMatchCenter: window.EsApp && window.EsApp.getInfo && window.EsApp.getInfo().apple_hide === 1,
                hideHomeBack: window.EsApp && (!(location.search.indexOf('app_online') > -1 || location.search.indexOf('app_home') > -1))
            };
        },
        computed: {
            lottery() {
                if (~this.$route.path.indexOf('football')) {
                    return 'football';
                } else {
                    return 'basketball';
                }
            }
        },
        methods: {
            back() {
                if (platform.isApp) {
                    return window['EsApp'].invoke('home');
                }
                if (document.domain.indexOf('c.m.500.com') > -1 || document.referrer.indexOf('c.m.500.com') > -1) {
                    location.replace('http://c.m.500.com');
                } else {
                    location.replace('http://m.500.com');
                }
            },
            showSelect: function () {
                typeof this.$refs.ball.onFilter === 'function' && this.$refs.ball.onFilter();
            },
            nav({lottery}) {
                this.$router.replace('/' + lottery);
            }
        }

    };

</script>
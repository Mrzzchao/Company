<template>
    <div id="app">
        <div class="ui-layer" v-if="show&&fromSogou"></div>
        <!-- 疯狂猜球 start -->
        <div class="pop-guess" v-show="show&&fromSogou">
            <a class="pop-btn" href="http://crazybet.choopaoo.com/crazyland/crazyapp.html?sgzs" target="_blank"></a>
            <span class="close" @click="close"></span>
        </div>
        <!-- 疯狂猜球 end -->
        <router-view></router-view>
    </div>
</template>

<style type="text/css">
    li a{
        display: block;
        text-decoration: none;
    }
    :-webkit-any-link{
        color: inherit;
        text-decoration: none;
    }


    .klpk .zstable2-tit td{
        height: 25px;
    }
    .on-zjhm span,.on-dyw span, .on-dsw span, .on-dsiw span, .on-dww span{position: relative}
    .ui-layer {position: fixed; left: 0; top: 0; right: 0; bottom: 0; background: #333; opacity: .6; z-index: 99;}
    .pop-guess {width: 170px; height: 242px; position: fixed; left: 50%; top: 50%; margin-left: -85px; margin-top: -121px; background: url(http://www.500cache.com/mobile/touch/images/huodong/guess/popbg.jpg) no-repeat; background-size: 170px; z-index: 100;}
    .pop-guess .pop-btn {display:block; width: 153px; height: 39px; position: absolute; left: 50%; bottom: 14px; margin-left: -77px; background: url(http://www.500cache.com/mobile/touch/images/huodong/guess/popbtn.png) no-repeat; background-size: 194px;}
    .pop-guess .close {display: block; width: 40px; height: 40px; position: absolute; top: -17px; right: -17px;background: url(http://www.500cache.com/mobile/touch/images/huodong/guess/popbtn.png) no-repeat -153px 0; background-size: 194px;}
</style>

<script>
    export default{
        data() {
            return {
                show: true,
                fromSogou: false
            };
        },
        methods: {
            close() {
                this.show = false;
            }
        },
        created() {
            if (typeof window !== 'undefined') {
                if (window.originCount !== null) {
                    console.log(window.originCount);
//                    if (window.originCount === '?0_ala_h5sougou') {
//                        this.fromSogou = true;
//                    }
                }
            }
        }
    };

</script>

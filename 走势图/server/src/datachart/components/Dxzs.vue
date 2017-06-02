<!--广西福彩快乐双彩 klsc-->
<template>
    <div>
        <div class="zous-2col l-full l-flex-row daxiao " :class="{hidden:!list}" v-scroll>
            <div class="zous-2col-l l-flex-column" :style="{width:'23%'}">
                <table class="zstable2 zstable2-tit">
                    <tbody>
                    <tr>
                        <th>期号</th>
                    </tr>
                    </tbody>
                </table>
                <div class="e-side l-flex-1 l-relative">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table class="zstable2 zstable2-tit">
                            <tbody>
                                <tr v-for="row in list">
                                    <td class="itm-qih">{{row.expect}}</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
            <!-- zous-2col-l end -->
            <div class="zous-2col-r l-flex-1 l-flex-column" :style="{overflow:'hidden'}">
                <div class="e-header l-relative" :style="{height:'43px'}">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table class="zstable2 zstable2-main zstable2-yil">
                            <colgroup>
                                <col :width="openw">
                                <col v-for="idx in num*2" width="30">
                            </colgroup>
                            <tbody>
                            <tr>
                                <template v-if="$route.meta.title&&$route.meta.title==='ssq'">
                                   <th rowspan="2" class="bdr2">红球</th>
                                    <th v-for="idx in num" colspan="2" :class="{'bdr2':idx!==num}">{{ssqdesc[idx-1]}}</th>
                                </template>
                                <template v-else>
                                <th rowspan="2" class="bdr2">号码</th>
                                <th v-for="idx in num" colspan="2" :class="{'bdr2':idx!==num}">{{wzdesc[idx-1]}}</th>
                                </template>
                            </tr>
                            <tr>
                                <template v-if="dxtype&&dxtype==='dlt'" >
                                    <template v-for="idx in num">
                                        <td>小</td>
                                        <td :class="{bdr2:idx!==num}">大</td>
                                    </template>
                                </template>
                                <template v-else>
                                    <template  v-for="idx in num">
                                        <td>大</td>
                                        <td :class="{bdr2:idx!==num}">小</td>
                                    </template>
                                </template>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="e-scroll l-flex-1 l-relative" :style="{overflow:'hidden'}">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table class="zstable2 zstable2-main zstable2-yil">
                            <colgroup>
                                <col :width="openw">
                                <col v-for="idx in num*2" width="30">

                            </colgroup>

                            <tbody>
                                <tr v-for="item in list">
                                    <td class="bdr2">{{item.opencode&&item.opencode.join(' ')||item.redcode&&item.redcode.split(',').join(' ')}}</td>

                                    <template v-if="dxtype&&dxtype==='dlt'" v-for="idx in num">
                                        <td v-if="item['reddx'+idx]" :class="{'tdbg2':item['reddx'+idx][0]==='0','bdr2':idx===1}">{{item['reddx'+idx][0]==='0'?'小':item['reddx'+idx][0]}}</td>
                                        <td v-if="item['reddx'+idx]" :class="{'tdbg1':item['reddx'+idx][1]==='0'}" class="bdr2">{{item['reddx'+idx][1]==='0'?'大':item['reddx'+idx][1]}}</td>
                                   </template>
                                    <template v-else v-for="idx in num">
                                        <td v-if="item['reddx'+idx]" :class="{'tdbg2':item['reddx'+idx][0]==='0','bdr2':idx===1}">{{item['reddx'+idx][0]==='0'?'大':item['reddx'+idx][0]}}</td>
                                        <td v-if="item['reddx'+idx]" :class="{'tdbg1':item['reddx'+idx][1]==='0'}" class="bdr2">{{item['reddx'+idx][1]==='0'?'小':item['reddx'+idx][1]}}</td>
                                    </template>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>


<script>
    import scroll from '../common/scroll';

    import {raf} from '../common/util';

    export default{
        data() {
            return {
                wzdesc: ['第一位', '第二位', '第三位', '第四位', '第五位', '第六位', '第七位', '第八位', '第九位', '第十位', '第十一位', '第十二位', '第十三位', '第十四位', '第十五位', '第十六位', '第十七位', '第十八位', '第十九位', '第二十位'],
                ssqdesc: ['红一', '红二', '红三', '红四', '红五', '红六']
            };
        },

        name: 'dxzs-component',
        props: {
            list: {
                required: true
            },
            openw: {
                type: Number
            },
            num: {
                required: true,
                type: Number
            },
            dxtype: {
                required: false,
                type: String
            }
        },

        directives: {
            scroll
        },

        mounted() {
            if (this.list) {
                this.config();
            }
        },
        watch: {
            list() {
                this.config();
            }
        },
        methods: {
            config() {
                raf(() => {
                    this.$emit('initscroll');
                });
            }
        },
        filters: {

        },

        serverCacheKey: props => {
            return `${props.num}::${props.list[props.list.length - 1].expect}::${props.list[0].expect}::${props.list[0].redcode}`;
        }
    };
</script>

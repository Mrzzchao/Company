<template>
    <div>
        <div class="zous-2col zous-qianq l-full l-flex-row" :class="{hidden:!list}" v-scroll>
            <div class="zous-2col-l l-flex-column">
                <table class="zstable2 zstable2-tit">
                    <tbody>
                    <tr>
                        <th>期号</th>
                    </tr>
                    </tbody>
                </table>
                <div class="e-side l-flex-1 l-relative">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table
                                class="zstable2 zstable2-tit">
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
            <div class="zous-2col-r l-flex-1 l-relative">
                <div class="l-full  l-flex-column">
                    <div class="e-header l-relative" :style="{height:'35px'}">
                        <div class="l-full" :style="{overflow:'hidden'}">
                            <table class="zstable2 zstable2-main zstable2-yil">

                                <colgroup>
                                    <col v-for="idx in (num+23)" width="30">
                                </colgroup>
                                <tbody>
                                <!--<tr>
                                    <th v-for="idx in num">{{idx}}</th>
                                </tr>-->

                                <tr class="two-line">
                                    <th colspan="5" rowspan="2">开奖号码</th>
                                    <th :colspan="num">开奖号码分布图</th>
                                    <th colspan="6">奇数个数遗漏（偶数）</th>
                                    <th colspan="6">小数个数遗漏（大数）</th>
                                    <th colspan="6">质数个数遗漏（合数）</th>
                                </tr>
                                <tr class="two-line">


                                    <td v-for="idx in num">{{idx}}</td>
                                    <td>0</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>0</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>0</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="e-scroll l-flex-1 l-relative">
                        <div class="l-full" :style="{overflow:'hidden'}">
                            <table class="zstable2 zstable2-main zstable2-yil l-relative">
                                <colgroup>
                                    <!--<col v-for="idx in num" width="30">-->
                                    <col v-for="idx in (num+23)" width="30">

                                </colgroup>
                                <tbody>
                                <tr v-for="row in list">
                                    <!--开奖号码-->
                                    <td v-for="code in row.opencode" class="on-zjhm">
                                        <span>{{code}}</span>
                                    </td>

                                    <td v-for="idx in num" :class="{'on':row.yilou[idx-1]==='0'}">
                                        <span>{{row.yilou[idx-1]==='0'?idx:row.yilou[idx-1]}}</span>
                                    </td>



                                    <!--奇数个数遗漏（偶数）-->
                                    <td v-for="yl,idx in row.jsyilou" :class="{'cbg4':yl==='0'}">
                                        <span>{{yl==='0'?idx:yl}}</span>
                                    </td>


                                    <!--小数个数遗漏（大数）-->
                                    <td v-for="yl,idx in row.xsyilou" :class="{'cbg4':yl==='0'}">
                                        <span>{{yl==='0'?idx:yl}}</span>
                                    </td>
                                    <!--质数个数遗漏（合数）-->
                                    <td v-for="yl,idx in row.zsyilou" :class="{'cbg4':yl==='0'}">
                                        <span>{{yl==='0'?idx:yl}}</span>
                                    </td>

                                </tr>
                                </tbody>
                            </table>
                        </div>
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

        name: 'fbzs-component',
        props: {
            list: {
                required: true
            },
            num: {
                require: true,
                type: Number
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

        serverCacheKey: props => {
            return `${props.list[props.list.length - 1].expect}::${props.list[0].expect}::${props.list[0].yilou}`;
        }
    };
</script>

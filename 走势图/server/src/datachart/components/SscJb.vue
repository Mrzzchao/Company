<template>
    <div class="zous-2col l-full l-flex-row zous-qianq" v-scroll v-zsline>
        <div class="zous-2col-l l-flex-column" :style="{width:'20%'}">
            <table class="zstable2 zstable2-tit">
                <tbody>
                <tr>
                    <th :style="{height:'36px'}">期号</th>
                </tr>
                </tbody>
            </table>
            <div class="e-side l-flex-1 l-relative">
                <div class="l-full" :style="{overflow:'hidden'}">
                    <table class="zstable2 zstable2-tit">
                        <tbody>
                        <tr v-for="item in zxwz">
                            <td class="itm-qih">{{item.expect.slice(-6)}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="zous-2col-r l-flex-1 l-flex-column" :style="{overflow:'hidden'}">
            <div class="e-header l-relative" :style="{height:'36px'}">
                <div class="l-full" :style="{overflow:'hidden'}">
                    <table class="zstable2 zstable2-main zstable2-yil">
                        <colgroup>
                            <col width="60">

                            <col span="50" width="30">
                            <col width="50">
                            <col width="50">
                            <col width="50">
                            <col width="50">
                            <col width="100">
                            <col width="100">

                        </colgroup>
                        <tbody>
                        <tr class="two-line">
                            <th rowspan="2">开奖号码</th>
                            <th colspan="10">万位数趋势</th>
                            <th colspan="10">千位数趋势</th>
                            <th colspan="10">百位数趋势</th>
                            <th colspan="10">十位数趋势</th>
                            <th colspan="10">个位数趋势</th>
                            <th colspan="2">奇偶比</th>
                            <th colspan="2">大小比</th>
                            <th rowspan="2">重号</th>
                            <th rowspan="2">和值</th>

                        </tr>
                        <tr class="two-line">
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>

                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>

                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>

                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>0</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>奇</td>
                            <td>偶</td>
                            <td>大</td>
                            <td>小</td>

                        </tr>


                        </tbody>
                    </table>
                </div>
            </div>
            <div class="e-scroll l-flex-1 l-relative">
                <div class="l-full" :style="{overflow:'hidden'}">
                    <table class="zstable2 zstable2-main zstable2-yil l-relative">
                        <colgroup>
                            <col width="60">
                            <col span="50" width="30">
                            <col width="50" span="4">
                            <col width="100">
                            <col width="100">
                        </colgroup>
                        <tbody>
                        <tr v-for="row in zxwz">

                            <td><span>{{row.opencode.split(',').join('')}}</span></td>
                            <!--万位-->
                            <td v-for="yl,idx in row.ww" :class="{'on-zjhm':yl==='0'}">
                                <span>{{yl==='0'?idx:yl}}</span>
                            </td>
                            <!--千位-->
                            <td v-for="yl,idx in row.qw" :class="{'on-dyw':yl==='0'}">
                                <span>{{yl==='0'?idx:yl}}</span>
                            </td>
                            <!--百位-->
                            <td v-for="yl,idx in row.bw" :class="{'on-dsw':yl==='0'}">
                                <span>{{yl==='0'?idx:yl}}</span>
                            </td>
                            <!--十位-->
                            <td v-for="yl,idx in row.sw" :class="{'on-dsiw':yl==='0'}">
                                <span>{{yl==='0'?idx:yl}}</span>
                            </td>
                            <!--个位-->
                            <td v-for="yl,idx in row.gw" :class="{'on-dww':yl==='0'}">
                                <span>{{yl==='0'?idx:yl}}</span>
                            </td>
                            <!--奇偶比-->
                            <td><span>{{row.jo[0]}}</span></td>
                            <td><span>{{row.jo[2]}}</span></td>
                            <!--大小比-->
                            <td><span>{{row.dx[0]}}</span></td>
                            <td><span>{{row.dx[2]}}</span></td>
                            <!--重号-->
                            <td><span>{{row.ch}}</span></td>
                            <!--和值-->
                            <td><span>{{row.hz}}</span></td>


                        </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    import scroll from '../common/scroll';
    import zsline from '../common/zsline';
    import {raf} from '../common/util';

    export default{
        props: {
            zxwz: {
                required: true
            }
        },

        directives: {
            scroll, zsline
        },
        computed: {},
        filters: {},

        mounted() {
            if (this.zxwz) {
                this.config();
            }
        },
        watch: {
            zxwz() {
                this.config();
            }
        },
        methods: {
            config() {
                raf(() => {
                    this.$emit('initscroll');
                    this.$emit('initzsline', ['.on-zjhm span', '.on-dyw span', '.on-dsw span', '.on-dsiw span', '.on-dww span']);
//                    this.$emit('initzsline');
                });
            }
        }

    };

</script>

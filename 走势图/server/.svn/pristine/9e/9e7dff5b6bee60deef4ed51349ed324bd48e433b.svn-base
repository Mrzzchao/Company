<!--大小形态走势-->
<template>
    <div>
        <div class="zous-2col l-full l-flex-row syxw daxiao" :class="{hidden:!list}" v-scroll>
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
                <div class="e-header l-relative" :style="{height:'45px'}">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table class="zstable2 zstable2-main zstable2-yil" v-if="count===8">
                            <colgroup>
                                <!--<col :width="openw">-->
                                <col width="80">
                                <col width="60">
                                <col v-for="idx in count" width="50">
                            </colgroup>
                            <tbody>
                            <tr>
                                <th rowspan="2" class="bdr2">号码</th>
                                <th colspan="9">奇偶形态分布</th>

                            </tr>
                            <tr>
                                <td><span class="red2">奇偶形态</span></td>
                                <th v-for="idx in count">{{wzdesc[count][idx-1]}}</th>
                            </tr>
                            </tbody>
                        </table>
                        <table class="zstable2 zstable2-main zstable2-yil" v-else>
                            <colgroup>
                                <col width="100">
                                <col width="80">
                                <col v-for="idx in count" width="80">
                            </colgroup>
                            <tbody>
                            <tr>
                                <th rowspan="2" class="bdr2">号码</th>
                                <th colspan="17">奇偶形态分布</th>

                            </tr>
                            <tr>
                                <td><span class="red2">奇偶形态</span></td>
                                <th v-for="idx in count">{{wzdesc[count][idx-1]}}</th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="e-scroll l-flex-1 l-relative" :style="{overflow:'hidden'}">
                    <div class="l-full" :style="{overflow:'hidden'}">
                        <table class="zstable2 zstable2-main zstable2-yil">
                            <colgroup v-if="count===8">
                                <col width="80">
                                <col width="60">

                                <col v-for="idx in count" width="50">

                            </colgroup>

                            <colgroup v-else>
                                <col width="100">
                                <col width="80">
                                <col v-for="idx in count" width="80">
                            </colgroup>
                            <tbody>
                            <tr v-for="item in list">
                                <td class="bdr2">{{item.opencode&&item.opencode.join(' ')||item.redcode&&item.redcode.split(',').join(' ')}}</td>
                                <td><span class="red2">{{item.joxt,ws|showdx}}</span></td>

                                <td v-for="idx in count">
                                    <span v-if="item.yilou[idx-1]==='0'" class="green2">{{wzdesc[count][idx-1]}}</span>
                                    <span v-else>{{item.yilou[idx-1]}}</span>
                                </td>

                            </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>


<script type="text/ecmascript-6">
    import scroll from '../common/scroll';
    import {raf} from '../common/util';

    export default{
        data() {
            return {
                wzdesc: {
                    '8': ['奇奇奇', '奇奇偶', '奇偶奇', '奇偶偶', '偶奇奇', '偶奇偶', '偶偶奇', '偶偶偶'],
                    // eslint-disable-next-line
                    '16': ['奇奇奇奇', '奇奇奇偶', '奇奇偶奇', '	奇奇偶偶', '奇偶奇奇', '奇偶奇偶', '奇偶偶奇	', '奇偶偶偶', '偶奇奇奇', '偶奇奇偶', '偶奇偶奇', '偶奇偶偶', '偶偶奇奇', '偶偶奇偶', '偶偶偶奇', '偶偶偶偶']

                }
            };
        },

        name: 'joxtzs-component',
        props: {
            list: {
                required: true
            },
            count: {
                required: true,
                type: Number
            },
            ws: {
                required: true,
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
        filters: {
            showdx(code, ws) {
                // eslint-disable-next-line
                return code.split('').map((i) => (i == 0||i == 2) ? '偶' : '奇').join(' ');
            }

        },

        serverCacheKey: props => {
            return `${props.count}::${props.list[props.list.length - 1].expect}::${props.list[0].expect}::${props.list[0].redcode}`;
        }
    };
</script>

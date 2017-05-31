<template>
    <div class="zous-2col l-full l-flex-row" :class="{hidden:!list}" v-scroll v-zsline>
        <div class="zous-2col-l l-flex-column">
            <table class="zstable2 zstable2-tit">
                <tbody>
                <tr>
                    <th width="60%">期号</th>
                    <th>值</th>
                </tr>
                </tbody>
            </table>
            <div class="e-side l-flex-1 l-relative">
                <div class="l-full" :style="{overflow:'hidden'}">
                    <table
                            class="zstable2 zstable2-tit">
                        <tbody>
                        <tr v-for="item in list">
                            <td class="itm-qih" width="60%">{{item.expect.substr(-5)}}</td>
                            <td>{{item.sum}}</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        <!-- zous-2col-l end -->

        <div class="zous-2col-r l-flex-1 l-flex-column">
            <div class="e-header l-relative" :style="{height:'35px'}">
                <div class="l-full" :style="{overflow:'hidden'}">
                    <table
                            class="zstable2 zstable2-main zstable2-yil">
                        <colgroup>
                            <col v-for="idx in num" width="30">
                        </colgroup>
                        <tbody>
                        <tr>
                            <th v-for="idx in num">{{min+idx-1}}</th>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="e-scroll l-flex-1 l-relative">
                <div class="l-full" :style="{overflow:'hidden'}">
                    <table
                            class="zstable2 zstable2-main zstable2-yil zous-2col-chart l-relative">
                        <colgroup>
                            <col v-for="idx in num" width="30">
                        </colgroup>
                        <tbody>
                        <tr v-for="item in list">
                            <td v-for="idx in num" :class="{'on':item.hzyilou[idx-1]==='0'}"><span>{{item.hzyilou[idx-1]==='0'?item.sum:item.hzyilou[idx-1]}}</span>
                            </td>

                        </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import scroll from '../common/scroll';
    import zsline from '../common/zsline';
    import {raf} from '../common/util';
    export default{
        name: 'kl12sumvalue',
        props: {
            list: {
                required: true
            },
            num: {
                required: true,
                type: Number
            },
            min: {
                default: 15,
                required: true,
                type: Number
            }
        },
        directives: {
            scroll, zsline
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
                    this.$emit('initzsline');
                });
            }
        },
        serverCacheKey: props => {
            return `${props.list[props.list.length - 1].expect}::${props.list[0].expect}::${props.list[0].hzyilou}`;
        }

    };
</script>

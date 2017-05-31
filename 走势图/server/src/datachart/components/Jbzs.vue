<template>
    <div>
        <div class="zous-2col l-full l-flex-row" :class="{hidden:!list}" v-scroll>
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
                    <div class="e-header l-relative" :style="{height:'37px'}">
                        <div class="l-full" :style="{overflow:'hidden'}">
                            <table class="zstable2 zstable2-main zstable2-yil abc">

                                <colgroup>
                                    <col width="30" v-for="idx in num">
                                </colgroup>
                                <tbody>
                                <tr>
                                    <th v-for="idx in num">{{idx}}</th>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="e-scroll l-flex-1 l-relative">
                        <div class="l-full" :style="{overflow:'hidden'}">
                            <table
                                    class="zstable2 zstable2-main zstable2-yil">
                                <colgroup>
                                    <col width="30" v-for="idx in num">
                                </colgroup>
                                <tbody>
                                <tr v-for="row in list">
                                    <td v-for="idx in num" :class="{'on':row.redfb[idx-1]==='0'}">
                                        <span :class="{blue: row.bluecode==idx}">{{row.redfb[idx-1]==='0'?idx:row.redfb[idx-1]}}</span>
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
        name: 'jbzs-component',
        props: {
            list: {
                required: true
            },
            num: {
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

        serverCacheKey: props => {
            return `${props.num}::${props.list[props.list.length - 1].expect}::${props.list[0].expect}::${props.list[0].redfb}`;
        }
    };
</script>

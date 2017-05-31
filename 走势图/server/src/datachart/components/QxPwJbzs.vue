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
                        <tr v-for="item in jbzs">
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
                            <template v-if="type==='qxc'">
                                <col v-for="idx in 70" width="30">
                            </template>
                            <template v-else>
                                <col v-for="idx in 50" width="30">
                            </template>

                        </colgroup>
                        <tbody>
                        <tr class="two-line">
                            <th colspan="10">第一位</th>
                            <th colspan="10">第二位</th>
                            <th colspan="10">第三位</th>
                            <th colspan="10">第四位</th>
                            <th colspan="10">第五位</th>

                            <template v-if="type==='qxc'">
                                <th colspan="10">第六位</th>
                                <th colspan="10">第七位</th>
                            </template>

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

                            <template v-if="type==='qxc'">
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

                            </template>


                        </tr>


                        </tbody>
                    </table>
                </div>
            </div>
            <div class="e-scroll l-flex-1 l-relative">
                <div class="l-full" :style="{overflow:'hidden'}">
                    <table class="zstable2 zstable2-main zstable2-yil l-relative">
                        <colgroup>
                            <template v-if="type==='qxc'">
                                <col v-for="idx in 70" width="30">
                            </template>
                            <template v-else>
                                <col v-for="idx in 50" width="30">
                            </template>
                        </colgroup>

                        <tbody>
                        <tr v-for="row in jbzs">

                            <td v-for="yl,idx in row.yilou1" :class="{'on-zjhm onwz1':yl==='0'}">
                                <span>{{yl==='0'?idx:yl}}</span>
                            </td>

                            <td v-for="yl,idx in row.yilou2" :class="{'on-dyw onwz2':yl==='0'}">
                                <span>{{yl==='0'?idx:yl}}</span>
                            </td>

                            <td v-for="yl,idx in row.yilou3" :class="{'on-dsw onwz3':yl==='0'}">
                                <span>{{yl==='0'?idx:yl}}</span>
                            </td>

                            <td v-for="yl,idx in row.yilou4" :class="{'on-dsiw onwz4':yl==='0'}">
                                <span>{{yl==='0'?idx:yl}}</span>
                            </td>

                            <td v-for="yl,idx in row.yilou5" :class="{'on-dww onwz5':yl==='0'}">
                                <span>{{yl==='0'?idx:yl}}</span>
                            </td>

                            <template v-if="type==='qxc'">
                                <td v-for="yl,idx in row.yilou6" :class="{'on-zjhm onwz6':yl==='0'}">
                                    <span>{{yl==='0'?idx:yl}}</span>
                                </td>
                                <td v-for="yl,idx in row.yilou7" :class="{'on-dyw onwz7':yl==='0'}">
                                    <span>{{yl==='0'?idx:yl}}</span>
                                </td>
                            </template>



                        </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import zsline from '../common/zsline';
    import {raf} from '../common/util';
    import scroll from '../common/scroll';
    export default{

        props: {
            jbzs: {
                required: true
            },
            type: {
                required: true
            }
        },

        directives: {
            zsline, scroll
        },
        computed: {

        },
        filters: {

        },

        mounted() {
            if (this.jbzs) {
                this.config();
            }
        },

        watch: {
            jbzs() {
                this.config();
            },
            column() {
                this.config();
            }
        },
        methods: {
            config() {
                raf(() => {
                    this.$emit('initzsline', ['.onwz1 span', '.onwz2 span', '.onwz3 span', '.onwz4 span', '.onwz5 span', '.onwz6 span', '.onwz7 span']);
                    this.$emit('initscroll');
                });
            }
        }

    };

</script>

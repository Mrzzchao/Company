<template>
    <div class="zous-2col l-full l-flex-column">
        <!--彩种导航 end-->
        <table class="zstable2 zstable2-main zstable2-tit">
            <colgroup>
                <col width="20%">
                <col v-for="idx in 10">
            </colgroup>
            <tbody>
            <tr>
                <th>期号</th>
                <th>0</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
            </tr>
            </tbody>
        </table>
        <div class="zous-2col l-flex-1 l-relative" v-zsline>
            <div class="l-full l-scroll-y e-scroll">
                <table class="zstable2 zstable2-main zstable2-yil">
                    <colgroup>
                        <col width="20%">
                        <col v-for="idx in 10">
                    </colgroup>
                    <tbody>
                    <tr v-for="item in zxwz">
                        <td>{{item.expect.substr(-7)}}</td>
                        <td :class="{'on':item[wz][0]==='0'}"><span>{{item[wz][0]==='0'?'0':item[wz][0]}}</span></td>
                        <td :class="{'on':item[wz][1]==='0'}"><span>{{item[wz][1]==='0'?'1':item[wz][1]}}</span></td>
                        <td :class="{'on':item[wz][2]==='0'}"><span>{{item[wz][2]==='0'?'2':item[wz][2]}}</span></td>
                        <td :class="{'on':item[wz][3]==='0'}"><span>{{item[wz][3]==='0'?'3':item[wz][3]}}</span></td>
                        <td :class="{'on':item[wz][4]==='0'}"><span>{{item[wz][4]==='0'?'4':item[wz][4]}}</span></td>
                        <td :class="{'on':item[wz][5]==='0'}"><span>{{item[wz][5]==='0'?'5':item[wz][5]}}</span></td>
                        <td :class="{'on':item[wz][6]==='0'}"><span>{{item[wz][6]==='0'?'6':item[wz][6]}}</span></td>
                        <td :class="{'on':item[wz][7]==='0'}"><span>{{item[wz][7]==='0'?'7':item[wz][7]}}</span></td>
                        <td :class="{'on':item[wz][8]==='0'}"><span>{{item[wz][8]==='0'?'8':item[wz][8]}}</span></td>
                        <td :class="{'on':item[wz][9]==='0'}"><span>{{item[wz][9]==='0'?'9':item[wz][9]}}</span></td>
                    </tr>
                    </tbody>
                </table>


            </div>

        </div>
    </div>
</template>


<script>
    // 已阅
    import zsline from '../common/zsline';
    import {raf} from '../common/util';

    export default{
        props: {
            zxwz: {
                required: true
            },
            wz: {
                required: true
            }
        },

        directives: {
            zsline
        },

        mounted() {
            if (this.zxwz) {
                this.config();
            }
        },
        watch: {
            zxwz() {
                this.config();
            },
            wz() {
                this.config();
            }
        },
        methods: {
            config() {
                raf(() => {
                    this.$emit('initzsline');
                });
            }
        }

    };
</script>

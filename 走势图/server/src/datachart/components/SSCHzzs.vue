<template>
    <div class="zous-2col l-full l-flex-row" :class="{hidden:!hzzs}" v-scroll v-zsline>
        <div class="zous-2col-l l-flex-column">
            <table class="zstable2 zstable2-tit">
                <tbody>
                <tr>
                    <th width="72%">期号</th>
                    <th>值</th>
                </tr>
                </tbody>
            </table>
            <div class="e-side l-flex-1 l-relative">
                <div class="l-full" :style="{overflow:'hidden'}">
                    <table
                            class="zstable2 zstable2-tit">
                        <tbody>
                        <tr v-for="item in hzzs">
                            <td class="itm-qih" width="72%">{{item.expect.substr(-7)}}
                            </td>
                            <td>{{item.hz}}</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        <!-- zous-2col-l end -->

        <div class="zous-2col-r l-flex-1 l-flex-column">
            <div class="e-header l-relative" :style="{height:'37px'}">
                <div class="l-full" :style="{overflow:'hidden'}">
                    <table class="zstable2 zstable2-main zstable2-yil">
                        <colgroup>
                            <col width="30" span="46">
                        </colgroup>
                        <tbody>
                        <tr>
                            <th v-for="idx in 46">{{idx-1}}</th>
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
                            <col width="30" span="46">
                        </colgroup>
                        <tbody>
                        <tr v-for="item in hzzs">
                            <td :class="{'on':item.hzzs[0]==='0'}">
                                <span>{{item.hzzs[0]==='0'?'0':item.hzzs[0]}}</span></td>
                            <td :class="{'on':item.hzzs[1]==='0'}">
                                <span>{{item.hzzs[1]==='0'?'1':item.hzzs[1]}}</span></td>
                            <td :class="{'on':item.hzzs[2]==='0'}">
                                <span>{{item.hzzs[2]==='0'?'2':item.hzzs[2]}}</span></td>
                            <td :class="{'on':item.hzzs[3]==='0'}">
                                <span>{{item.hzzs[3]==='0'?'3':item.hzzs[3]}}</span></td>
                            <td :class="{'on':item.hzzs[4]==='0'}">
                                <span>{{item.hzzs[4]==='0'?'4':item.hzzs[4]}}</span></td>
                            <td :class="{'on':item.hzzs[5]==='0'}">
                                <span>{{item.hzzs[5]==='0'?'5':item.hzzs[5]}}</span></td>
                            <td :class="{'on':item.hzzs[6]==='0'}">
                                <span>{{item.hzzs[6]==='0'?'6':item.hzzs[6]}}</span></td>
                            <td :class="{'on':item.hzzs[7]==='0'}">
                                <span>{{item.hzzs[7]==='0'?'7':item.hzzs[7]}}</span></td>
                            <td :class="{'on':item.hzzs[8]==='0'}">
                                <span>{{item.hzzs[8]==='0'?'8':item.hzzs[8]}}</span></td>
                            <td :class="{'on':item.hzzs[9]==='0'}">
                                <span>{{item.hzzs[9]==='0'?'9':item.hzzs[9]}}</span></td>
                            <td :class="{'on':item.hzzs[10]==='0'}">
                                <span>{{item.hzzs[10]==='0'?'10':item.hzzs[10]}}</span></td>
                            <td :class="{'on':item.hzzs[11]==='0'}">
                                <span>{{item.hzzs[11]==='0'?'11':item.hzzs[11]}}</span></td>
                            <td :class="{'on':item.hzzs[12]==='0'}">
                                <span>{{item.hzzs[12]==='0'?'12':item.hzzs[12]}}</span></td>
                            <td :class="{'on':item.hzzs[13]==='0'}">
                                <span>{{item.hzzs[13]==='0'?'13':item.hzzs[13]}}</span></td>
                            <td :class="{'on':item.hzzs[14]==='0'}">
                                <span>{{item.hzzs[14]==='0'?'14':item.hzzs[14]}}</span></td>
                            <td :class="{'on':item.hzzs[15]==='0'}">
                                <span>{{item.hzzs[15]==='0'?'15':item.hzzs[15]}}</span></td>
                            <td :class="{'on':item.hzzs[16]==='0'}">
                                <span>{{item.hzzs[16]==='0'?'16':item.hzzs[16]}}</span></td>
                            <td :class="{'on':item.hzzs[17]==='0'}">
                                <span>{{item.hzzs[17]==='0'?'17':item.hzzs[17]}}</span></td>
                            <td :class="{'on':item.hzzs[18]==='0'}">
                                <span>{{item.hzzs[18]==='0'?'18':item.hzzs[18]}}</span></td>
                            <td :class="{'on':item.hzzs[19]==='0'}">
                                <span>{{item.hzzs[19]==='0'?'19':item.hzzs[19]}}</span></td>
                            <td :class="{'on':item.hzzs[20]==='0'}">
                                <span>{{item.hzzs[20]==='0'?'20':item.hzzs[20]}}</span></td>


                            <td :class="{'on':item.hzzs[21]==='0'}">
                                <span>{{item.hzzs[21]==='0'?'21':item.hzzs[21]}}</span></td>
                            <td :class="{'on':item.hzzs[22]==='0'}">
                                <span>{{item.hzzs[22]==='0'?'22':item.hzzs[22]}}</span></td>
                            <td :class="{'on':item.hzzs[23]==='0'}">
                                <span>{{item.hzzs[23]==='0'?'23':item.hzzs[23]}}</span></td>
                            <td :class="{'on':item.hzzs[24]==='0'}">
                                <span>{{item.hzzs[24]==='0'?'24':item.hzzs[24]}}</span></td>
                            <td :class="{'on':item.hzzs[25]==='0'}">
                                <span>{{item.hzzs[25]==='0'?'25':item.hzzs[25]}}</span></td>
                            <td :class="{'on':item.hzzs[26]==='0'}">
                                <span>{{item.hzzs[26]==='0'?'26':item.hzzs[26]}}</span></td>
                            <td :class="{'on':item.hzzs[27]==='0'}">
                                <span>{{item.hzzs[27]==='0'?'27':item.hzzs[27]}}</span></td>
                            <td :class="{'on':item.hzzs[28]==='0'}">
                                <span>{{item.hzzs[28]==='0'?'28':item.hzzs[28]}}</span></td>
                            <td :class="{'on':item.hzzs[29]==='0'}">
                                <span>{{item.hzzs[29]==='0'?'29':item.hzzs[29]}}</span></td>

                            <td :class="{'on':item.hzzs[30]==='0'}">
                                <span>{{item.hzzs[30]==='0'?'30':item.hzzs[30]}}</span></td>
                            <td :class="{'on':item.hzzs[31]==='0'}">
                                <span>{{item.hzzs[31]==='0'?'31':item.hzzs[31]}}</span></td>
                            <td :class="{'on':item.hzzs[2]==='0'}">
                                <span>{{item.hzzs[32]==='0'?'32':item.hzzs[32]}}</span></td>
                            <td :class="{'on':item.hzzs[3]==='0'}">
                                <span>{{item.hzzs[33]==='0'?'33':item.hzzs[33]}}</span></td>
                            <td :class="{'on':item.hzzs[34]==='0'}">
                                <span>{{item.hzzs[34]==='0'?'34':item.hzzs[34]}}</span></td>
                            <td :class="{'on':item.hzzs[35]==='0'}">
                                <span>{{item.hzzs[35]==='0'?'35':item.hzzs[35]}}</span></td>
                            <td :class="{'on':item.hzzs[36]==='0'}">
                                <span>{{item.hzzs[36]==='0'?'36':item.hzzs[36]}}</span></td>
                            <td :class="{'on':item.hzzs[37]==='0'}">
                                <span>{{item.hzzs[37]==='0'?'37':item.hzzs[37]}}</span></td>
                            <td :class="{'on':item.hzzs[38]==='0'}">
                                <span>{{item.hzzs[38]==='0'?'38':item.hzzs[38]}}</span></td>
                            <td :class="{'on':item.hzzs[39]==='0'}">
                                <span>{{item.hzzs[39]==='0'?'39':item.hzzs[39]}}</span></td>

                            <td :class="{'on':item.hzzs[40]==='0'}">
                                <span>{{item.hzzs[40]==='0'?'40':item.hzzs[40]}}</span></td>
                            <td :class="{'on':item.hzzs[41]==='0'}">
                                <span>{{item.hzzs[41]==='0'?'41':item.hzzs[41]}}</span></td>
                            <td :class="{'on':item.hzzs[42]==='0'}">
                                <span>{{item.hzzs[42]==='0'?'42':item.hzzs[42]}}</span></td>
                            <td :class="{'on':item.hzzs[43]==='0'}">
                                <span>{{item.hzzs[43]==='0'?'43':item.hzzs[43]}}</span></td>
                            <td :class="{'on':item.hzzs[4]==='0'}">
                                <span>{{item.hzzs[44]==='0'?'44':item.hzzs[44]}}</span></td>
                            <td :class="{'on':item.hzzs[5]==='0'}">
                                <span>{{item.hzzs[45]==='0'?'45':item.hzzs[45]}}</span></td>

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
        name: 'sscsumvalue',
        props: {
            hzzs: {
                required: true
            }
        },
        directives: {
            scroll, zsline
        },
        mounted() {
            if (this.hzzs) {
                this.config();
            }
        },

        watch: {
            hzzs() {
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
            return `${props.hzzs[props.hzzs.length - 1].expect}::${props.hzzs[0].expect}`;
        }

    };
</script>

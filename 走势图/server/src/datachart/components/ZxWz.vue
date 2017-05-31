<template>
    <div class="zous-2col l-full l-flex-column">
        <!--彩种导航 end-->
        <table class="zstable2 zstable2-main zstable2-tit">
            <tbody>
            <tr>
                <th width="22%">期号</th>
                <th  v-for="flag in tit">{{flag}}</th>
            </tr>
            </tbody>
        </table>
        <div class="zous-2col l-flex-1 l-relative" v-zsline>
            <div class="l-full l-scroll-y e-scroll">
                <table class="zstable2 zstable2-main zstable2-yil">
                    <tbody>
                    <tr v-for="item in zxwz" track-by="expect">
                        <td width="22%">{{item.expect.substr(-7)}}</td>
                        <td v-for="flag,idx in tit"
                            :class="{'on':item.yilou[begin+idx]==='0'}">
                            <span>{{item.yilou[begin+idx]==='0'?flag:item.yilou[begin+idx]}}</span>
                        </td>
                    </tr>


                    </tbody>
                </table>


            </div>

        </div>
    </div>
</template>

<script>
    import zsline from '../common/zsline';
    import {raf} from '../common/util';

    export default{

        props: {
            zxwz: {
                required: true
            },
            begin: {
                required: true,
                type: Number
            },
            tit: {
                required: true,
                type: Array
            },
            zsline: {
                default: true,
                type: Boolean
            }
        },

        directives: {
            zsline
        },
        computed: {

        },
        filters: {

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
            begin() {
                this.config();
            }

        },
        methods: {
            config() {
                raf(() => {
                    if (!this.zsline) {
                        this.$emit('clearZsLine');
                        return;
                    }
                    this.$emit('initzsline');
                });
            }
        }

    };

</script>

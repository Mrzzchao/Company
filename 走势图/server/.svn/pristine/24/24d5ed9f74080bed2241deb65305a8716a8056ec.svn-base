<template>
    <div class="zous-2col l-full l-flex-column">
        <!--彩种导航 end-->
        <table class="zstable2 zstable2-main zstable2-tit">
            <tbody>
            <tr>
                <th width="22%">期号</th>
                <th  v-for="flag in 10">{{flag-1}}</th>
            </tr>
            </tbody>
        </table>
        <div class="zous-2col l-flex-1 l-relative" v-zsline>
            <div class="l-full l-scroll-y e-scroll">
                <table class="zstable2 zstable2-main zstable2-yil">
                    <tbody>
                    <tr v-for="item in zxwz" track-by="expect">
                        <td width="22%">{{item.expect.substr(-7)}}</td>
                        <td v-for="flag,idx in item[column]"
                            :class="{'on':flag==='0'}">
                            <span>{{flag==='0'?idx:flag}}</span>
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
            column: {
                required: true
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
            column() {
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

<template>
    <div class="l-full l-flex-column syxw">
        <!--head begin-->
        <header id="uiHead" class="ui-head">
            <div class="ui-head-in">
                <div class="ui-head-l"><span class="ui-head-btn1" onclick="location.href = '/datachart/'">返回</span></div>
                <div class="ui-head-m">
                    <span class="ui-head-logo"></span>
                    <h2 class="ui-head-tit">{{nameMap[$route.params.area]}}走势图</h2>
                </div>
            </div>
        </header>
        <!--head end-->

        <!--彩种导航 end-->
        <div class="l-flex-1 l-relative">
            <div class="l-full l-flex-column">
                <!--彩种导航 start-->
                <div class="ui-navbox">
                    <div class="ui-navbox-in">
                        <ul>
                            <li  :class="{'select':~$route.path.indexOf('/0.html')}"><router-link :to="{path: '0.html'}" replace>基本</router-link></li>
                            <li :class="{'select':~$route.path.indexOf('/1.html')}"><router-link :to="{path: '1.html'}" replace>第一位</router-link></li>
                            <li :class="{'select':~$route.path.indexOf('/2.html')}"><router-link :to="{path: '2.html'}" replace>第二位</router-link></li>
                            <li :class="{'select':~$route.path.indexOf('/3.html')}"><router-link :to="{path: '3.html'}" replace>第三位</router-link></li>
                            <li :class="{'select':~$route.path.indexOf('/4.html')}"><router-link :to="{path: '4.html'}" replace>第四位</router-link></li>
                            <li :class="{'select':~$route.path.indexOf('/5.html')}"><router-link :to="{path: '5.html'}" replace>第五位</router-link></li>


                            <template v-if="$route.params.area==='qxc'">
                                <li :class="{'select':~$route.path.indexOf('/6.html')}"><router-link :to="{path: '6.html'}" replace>第六位</router-link></li>
                                <li :class="{'select':~$route.path.indexOf('/7.html')}"><router-link :to="{path: '7.html'}" replace>第七位</router-link></li>

                            </template>

                        </ul>
                    </div>
                </div>
                <!--彩种导航 end-->
                <div class="l-flex-1 l-relative">
                    <loading v-if="!jbzs"></loading>
                    <qxpwwz v-if="$route.meta.column" :zxwz="jbzs" :column="$route.meta.column"></qxpwwz>
                    <qxpwjbzs v-if="!$route.meta.column" :jbzs="jbzs" :type="$route.params.area"></qxpwjbzs>
                </div>
            </div>



        </div>

    </div>
</template>


<script type="text/ecmascript-6">
    import { nameMap } from '../common/constants';
    import Qxpwwz from '../components/QxPwWz.vue';
    import Qxpwjbzs from '../components/QxPwJbzs.vue';
    import Loading from '../components/loading.vue';
    import {mapActions} from 'vuex';
    export default {
        data() {
            return {
                nameMap
            };
        },
        components: {
            Qxpwwz, Loading, Qxpwjbzs
        },

        methods: {
            ...mapActions([
                'getJbzsData'
            ])

        },
        computed: {
            jbzs () {
                return this.$store.state.page.jbzs;
            }

        },
        mounted() {
            if (!this.jbzs) {
                this.getJbzsData(this.$route.params.area);
            }
        },
        preFetch (store) {
            return store.dispatch('getJbzsData', store.state.route.params.area);
        }
    };

</script>

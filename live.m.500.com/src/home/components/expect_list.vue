<template>
    <div>
        <div class="qi-list-box">
            <div class="qi-list">
                <ul class="responsive">
                    <li :class="{'qi-gray':isFirst()}" @click="pre">前一天</li>
                    <li class="qiqh" @click="isWin=!isWin,isExpect=!isExpect">{{expect}} {{expect|expectFmt}}<i
                            class="qi-arrow" :class="{'rotateborder':isExpect}"></i></li>
                    <li :class="{'qi-gray':isLast()}" @click="next">后一天</li>
                </ul>
            </div>
        </div>
        <div class="qi-pop-box" v-if="isExpect">
            <div class="ui-navbox-item">
                <ul>
                    <li v-for="item in expectlist" :class="{'select':item==expect}" @click="updateExpect(item)"><span>{{item}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <winlayer v-if="isWin"></winlayer>
    </div>
</template>
<script>

    import winlayer from '../components/winlayer.vue';

    export default{
        name: 'expect_win',
        props: ['expectlist', 'expect'],
        data: function () {
            return {
                isExpect: false,
                isWin: false
            };
        },
        created: function () {

        },
        components: {
            winlayer
        },
        methods: {
            updateExpect: function (expect) {
                this.$set(this.$data, 'isExpect', false);
                this.$set(this.$data, 'isWin', false);
                this.$emit('expectChange', expect);
            },
            isFirst: function () {
                return !this.expectlist || this.expectlist.length === 0 || this.expectlist.indexOf(this.expect) === (this.expectlist.length - 1);
            },
            isLast: function () {
                return !this.expectlist || this.expectlist.length === 0 || this.expectlist.indexOf(this.expect) === 0;
            },
            pre: function () {
                if (!this.isFirst()) {
                    this.updateExpect(this.expectlist[this.expectlist.indexOf(this.expect) + 1]);
                }
            },
            next: function () {
                if (!this.isLast()) {
                    this.updateExpect(this.expectlist[this.expectlist.indexOf(this.expect) - 1]);
                }
            }
        },
        watch: {
            '$route': function (val) {
                this.$set(this.$data, 'isExpect', false);
                this.$set(this.$data, 'isWin', false);
            }
        },
        filters: {
            expectFmt: function (expect) {
                if (!expect || expect.match(/\d{4}-\d{2}-\d{2}/) == null) {
                    return '期';
                }
                return ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][new Date(expect).getDay()];
            }
        }
    };
</script>
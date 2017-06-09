<template>
    <div class="saixuan-box saixuan-show">
        <div class="saix-h">
            <div class="saix-fixed">
                <div class="red-head">筛选</div>
                <div class="sll-bs">所有联赛，共<span class="red">{{matchCount}}</span>场比赛</div>
                <div class="saixuan-tab-box">
                    <ul class="saixuan-tab responsive">
                        <li @click="selectAll()">全选</li>
                        <li @click="inverseAll">反选</li>
                        <li @click="selectFiveLeague()">五大联赛</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="ui-navbox-item sx-bg-t">
            <ul>
                <li :class="{select:selectOptions[key]}" v-for="(val,key) in filterOptions"><span @click="onOptions(key)">{{key}}</span></li>
            </ul>
        </div>
        <div class="saixuan-footer">
            <div class="saixuan-footer-fixed">
                <ul class="btn-sx responsive">
                    <li class="white-btn" @click="closeWin()">取消</li>
                    <li class="red-btn" @click="confirm()">确定</li>
                </ul>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'league',
        props: ['matchlist', 'playType', 'option'],
        data: function () {
            return {
                fiveLeagues: { '西甲': 1, '意甲': 2, '英超': 3, '德甲': 4, '法甲': 5 },
                filterOptions: {},
                selectOptions: {},
                matchCount: 0
            };
        },
        watch: {
            'matchlist': function () {
                this.processFilterOptions();
            }
        },
        created() {
            if (this.option) {
                this.selectOptions = Object.assign({}, this.option);
            }
            this.processFilterOptions();
        },
        methods: {
            processFilterOptions: function (val) {
                this.filterOptions = {};
                if (this.matchlist && this.matchlist.length > 0) {
                    this.matchCount = this.matchlist.length;
                    this.matchlist.forEach(match => {
                        this.filterOptions[match.simpleleague] = true;
                    });
                }
            },
            closeWin: function () {
                this.$emit('remove');
            },
            onOptions: function (val) {
                if (this.selectOptions[val]) {
                    delete this.selectOptions[val];
                } else {
                    this.selectOptions[val] = true;
                }
                this.$set(this.$data, 'selectOptions', Object.assign({}, this.selectOptions));//
            },
            selectAll: function () {
                Object.keys(this.filterOptions).forEach((key) => {
                    this.selectOptions[key] = true;
                });
                this.$set(this.$data, 'selectOptions', Object.assign({}, this.selectOptions));//
            },
            inverseAll: function () {
                Object.keys(this.filterOptions).forEach((key) => {
                    this.onOptions(key);
                });
            },
            selectFiveLeague: function () {
                this.selectOptions = {};
                Object.keys(this.filterOptions).forEach((key) => {
                    if (this.fiveLeagues[key]) {
                        this.selectOptions[key] = true;
                    }
                });
                this.$set(this.$data, 'selectOptions', Object.assign({}, this.selectOptions));//
            },
            confirm: function() {
                if (Object.keys(this.selectOptions).length < 1) {
                    return alert('至少选择1个联赛');
                }
                this.$emit('onFilterOptions', this.selectOptions);
            }
        }
    };

</script>
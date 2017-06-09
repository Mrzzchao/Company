<template>
    <div>
        <div class="ui-empty"   v-if="type=='star'">
            <img :src="baseImgUrl+imageMap[type]" 
                 :class="{w136: type == 'loading', w240: type != 'loading'}">
            <p class="ui-empty-dfont"
                 v-if="message">{{message}}</p>
            <p class="ui-empty-gfont"
                 v-if="extraText">{{extraText}}</p>
            <button class="ui-empty-btn"
                    style="margin-top:25px;"
                    @click="bottnClick()"
                    v-if="btnText">{{btnText}}</button>
        </div>
        <div class="ui-empty"
             style="padding: 1.54rem 0;"
              v-if="type=='no-data'">
            <img :src="baseImgUrl+imageMap[type]"
                 class="w240">
            <div class="ui-empty-dfont"
                 drunk-if="message">{{message}}</div>
            <div class="ui-empty-gfont"
                 drunk-if="extraText">{{extraText}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['type', 'message', 'extraText', 'btnText'],
    created() {

    },
    data: function () {
        return {
            'baseImgUrl': 'http://tccache.500.com/mobile/widget/empty/images/',
            'imageMap': {
                'network-error': '18.png',
                'loading': 'load.gif',
                'normal': '07.png',
                'no-match-fball': '08.png',
                'no-match-bball': '09.png',
                'star': '10.png',
                'no-data': '12.png'
            }
        };
    },
    watch: {

    },
    components: {

    },
    methods: {
        bottnClick: function() {
            this.$emit('bottnClick');
        }
    }
};
</script>
<style>
.ui-empty {
    padding: 2.72rem 0;
    text-align: center;
}

.ui-empty img {
    margin-bottom: 0.933333rem;
}

.ui-empty .w240 {
    width: 3.2rem;
}

.ui-empty .w170 {
    width: 2.266667rem;
}

.ui-empty .w136 {
    width: 1.813333rem;
}

.ui-empty .w126 {
    width: 1.68rem;
}

.ui-empty-dfont {
    font-size: 0.453333rem;
    color: #333;
    height: 0.893333rem;
    line-height: 0.893333rem;
}

.ui-empty-gfont {
    font-size: 0.4rem;
    color: #b3b3b3;
    margin-bottom: 0.773333rem;
    padding: 0 0.5rem;
}

.ui-empty-btn {
    font-size: 0.426667rem;
    color: #333;
    height: 1.12rem;
    border: 1px solid #c3c3c3;
    border-radius: 0.106667rem;
    background: #fff;
    width: 4.666667rem;
}

.ui-empty-font {
    color: #b3b3b3;
    font-size: 0.4rem;
    padding: 0.22rem 0;
    text-align: center;
}
</style>

<template>
    <div class="l-full l-box-center" :style="{'z-index':100}">
        <div class="txtcenter" :style="{'text-align':'center'}">
            <img :style="{'margin-bottom': '.6rem',width:'80px'}" src="http://m.500.com/cache/mobile/widget/empty/images/load.gif" />
            <div class="ui-empty-dfont" :style="{'font-size':'14px', color: '#444', height: '14px', 'line-height': '14px', 'margin-top': '5px'}">正在加载中...</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'loading-component',
        serverCacheKey: props => {
            return `loading-component`;
        }
    };
</script>

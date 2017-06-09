<template>
	<div>
		<div class="ui-navbox-weebox">
			<div class="ui-navbox-item" v-if="type=='football'">
				<ul>
					<li :class="{'select':playType=='jczq'}" onclick="window.location.href='#/football'"><span>竞彩足球</span></li>
					<li :class="{'select':playType=='sfc'}"  onclick="window.location.href='#/football/jczq/sfc'"><span>胜负彩</span></li>
					<li :class="{'select':playType=='bjdc'}" onclick="window.location.href='#/football/jczq/bjdc'"><span>北京单场</span></li>
					<li :class="{'select':playType=='all'}"  onclick="window.location.href='#/football/jczq/all'"><span>全部</span></li>
				</ul>
			</div>
			<div class="ui-navbox-item" v-if="type=='basketball'">
				<ul>
					<li :class="{'select':playType=='jclq'}" onclick="window.location.href='#/basketball'"><span>竞彩篮球</span></li>
					<li :class="{'select':playType=='all'}" onclick="window.location.href='#/basketball/jclq/all'"><span>全部</span></li>
				</ul>
			</div>
		</div>
		<winlayer></winlayer>
	</div>
</template>
<script>

	import winlayer from '../components/winlayer.vue';

	export default {
	    props: ['type', 'playType'],
	    created() {

	    },
	    components: {
	        winlayer
	    },
	    methods: {
	        updatePlayType: function (playType) {
	            this.$emit('playTypeChange', playType);
	        }
	    }
	};

</script>
<template>
    <div class="wrapper l-full l-flex-column">
        <BasketballHeader></BasketballHeader>

        <section class="l-flex-1 l-relative" >
            <div class="inte-main l-full l-scroll-y">

            </div>
        </section>
    </div>
</template>

<script>
    import BasketballHeader from './BasketballHeader.vue';
    export default{
        components: {
            BasketballHeader
        },
        data(){
            return {
                id: ''
            };
        },
        computed: {
            rankList: function(){
                // console.log(this.$store.state.rank.rank)
                return this.$store.state.rank.rank;
            }
        },
        created(){
            this.id = this.$route.params.id;
            this.getRankData();
        },
        watch: {
            '$route': function(){
                this.id = this.$route.params.id;
                this.getRankData();
            }

        },
        methods: {
            getRankData: function(){
                this.$store.dispatch('updateRank', {id: this.id});
            }
        }
    };
</script>
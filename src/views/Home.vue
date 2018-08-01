<template>
    <layout>

    </layout>
</template>
<script>
export default {
    beforeCreate(){
        this.$store.commit('setItem', {
            key:"activeCategory",
            value:'all'
        });
        
        // this.$store.commit('setItem', {
        //     key:"posts",
        //     value:this.$store.state.posts
        // });
    },
    data(){
        return{}
    },
    computed:{},
    methods:{}
}
</script>


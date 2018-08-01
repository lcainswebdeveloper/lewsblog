<template>
    <div>
        <utility-loader-dots v-if="!isReady"></utility-loader-dots>
        <layout v-if="isReady"></layout>
    </div>
</template>
<script>
export default {
    name:"Category",
    beforeCreate(){
        this.$store.commit('setItem', {
            key:"activeCategory",
            value:this.$route.params.slug
        });
    },
    computed:{
        isReady(){
            return typeof this.$store.getters.filteredPosts == 'object';
        },
        activeCategory(){
            return this.$store.getters.activeCategoryData;
        }
    },
    methods:{}
}
</script>


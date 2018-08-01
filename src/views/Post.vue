<template>
    <div>
        <utility-loader-dots v-if="!isReady"></utility-loader-dots>
        <layout v-if="isReady">
            <div slot="posts">
                <utility-loader-dots v-if="!isReady"></utility-loader-dots>
                <div class="blog-list" v-if="isReady == true">
                    <post-single :blog-post="blogPost" :show-full="true"></post-single>
                </div>
            </div>
        </layout>
    </div>
</template>
<script>
export default {
    name:"Post",
    computed:{
        blogPost(){
            return _.find(this.$store.state.posts, post => {
                return post.slug == this.$route.params.slug;
            });
        },
        isReady(){
            return true;
        }
    }
}
</script>


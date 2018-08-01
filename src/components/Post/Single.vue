<template>
    <div class="blog-listing">
        <small class="post-back" v-if="showFull"><a @click.prevent="$router.go(-1)" href="#">< Back</a></small>
        <small class="post-date-author">{{blogPost.created_at | readableDate }} by {{blogPost.user.name}}</small>
        <h3>{{blogPost.title}}</h3>
        <post-category-string :post-categories="blogPost.categories"></post-category-string>
        <div v-if="!showFull" class="post-abstract" v-html="blogPost.abstract"></div>
        <div v-if="showFull" class="post-content" v-html="blogPost.content"></div>
        <router-link v-if="!showFull" :to="'/post/' + blogPost.slug">Read More</router-link>
        <div v-if="authenticated">
            <hr>
            <post-button :active-record="blogPost">
                <i slot="btn-text" class="fas fa-pencil-alt"></i>
            </post-button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        blogPost:{required:true},
        showFull:{default:false}
    },
    computed:{
        authenticated(){
            return this.$store.state.authenticated;
        }
    }
}
</script>

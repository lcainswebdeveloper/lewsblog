<template>
    <div class="row">
        <div class="col-xs-4">
            <category-button></category-button>
            <slot name="categories">
                <ul class="blog-list">
                    <li>
                        <router-link to="/category/all">({{$store.state.posts.length}}) All</router-link>
                    </li>
                    <li v-for="category in $store.getters.orderedCategories">
                        <router-link :to="'/category/' + category.slug">({{category.posts.length}}) {{category.title}}</router-link>
                    </li>
                </ul>
            </slot>
            
        </div>
        <div class="col-xs-8">
            <post-button></post-button>
            <slot name="posts">
                <div class="blog-list">
                    <div v-for="post in $store.getters.filteredPosts" class="blog-listing">
                        <small>{{post.created_at | readableDate }} by {{post.user.name}}</small>
                        <h3>{{post.title}}</h3>
                        <h5>Posted In All &bull; PHP</h5>
                    </div>
                </div>
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

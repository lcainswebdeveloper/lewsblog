<template>
    <div class="row">
        <div class="col-xs-4">
            <category-button>
                <span slot="btn-text"><i class="fas fa-plus"></i> Category</span>
            </category-button>
            <slot name="categories">
                <utility-loader-dots v-if="$store.state.refreshingCategories == true"></utility-loader-dots>
                <ul class="blog-list" v-if="!$store.state.refreshingCategories"> 
                    <li>
                        <router-link to="/category/all">({{$store.state.posts.length}}) All</router-link>
                    </li>
                    <li v-for="category in $store.getters.orderedCategories">
                        <router-link :to="'/category/' + category.slug">({{category.posts.length}}) {{category.title}}</router-link>
                        <category-button :active-record="category">
                            <i slot="btn-text" class="fas fa-pencil-alt"></i>
                        </category-button>
                    </li>
                </ul>
            </slot>
        </div>
        <div class="col-xs-8">
            <slot name="posts">
                <post-button>
                    <span slot="btn-text"><i class="fas fa-plus"></i> Post</span>
                </post-button>
                <utility-loader-dots v-if="$store.state.refreshingPosts == true"></utility-loader-dots>
                <div class="blog-list">
                    <small v-if="$store.getters.filteredPosts.length == 0">No Posts available in this category</small>
                    <post-single v-if="!$store.state.refreshingPosts" :blog-post="post" v-for="post in $store.getters.filteredPosts"></post-single>
                </div>
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

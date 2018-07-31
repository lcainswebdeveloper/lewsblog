<template>
    <div class="row">
        <div class="col-xs-4">
            <category-button></category-button>
            <slot name="categories"></slot>
            <ul class="blog-list">
                <li>
                    <router-link to="/category/all">All</router-link>
                </li>
                <li v-for="category in $store.getters.orderedCategories">
                    <router-link :to="'/category/' + category.slug">{{category.title}}</router-link>
                </li>
            </ul>
        </div>
        <div class="col-xs-8">
            <post-button></post-button>
            <slot name="posts"></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

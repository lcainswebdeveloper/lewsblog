<template>
    <div>
        <h5 class="category-string">Posted In
            <span class="category-link-span">
                <router-link to="/category/all">All</router-link>
            </span>  
            <span v-for="category in postCategories" class="category-link-span">
                <router-link :to="'/category/' + category.slug">{{category.title}}</router-link>
            </span>    
        </h5>   
    </div>
</template>
<script>
export default {
    computed:{
        
    },
    props:{
        postCategories:{required:true}
    }
}
</script>


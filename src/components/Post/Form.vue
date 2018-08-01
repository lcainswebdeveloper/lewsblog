<template>
    <div>
        <utility-loader-dots v-if="submitting"></utility-loader-dots>
        <form v-show="!submitting" @submit.prevent="persist" :action="formUrl">
            <form-group label-title="Title" :form-errors="errors" field-name="title">
                <form-text placeholder="Title" v-model="title" field-name="title"></form-text>
            </form-group>
            <form-group label-title="Content" :form-errors="errors" field-name="content">
                <form-textarea placeholder="Content" v-model="content" field-name="content"></form-textarea>
            </form-group>
            <form-group label-title="Categories" :form-errors="errors" field-name="categories">
                <div class="row">
                    <div v-for="category in categoryList" class="col-xs-6">
                        <input type="checkbox" v-model="categories" :value="category.id" :id="'category-' + category.id"> <label :for="'category-' + category.id"> {{category.title}}</label>
                    </div>
                </div>
            </form-group>
            <button class="btn btn-info">Save</button>
        </form>
    </div>
</template>

<script>
import Errors from './../../classes/errors';
export default{
        name:"PostForm",
        data(){
            return{
                title:"",
                content:"",
                categories:[],
                submitting:false,
                formUrl:"blog-post/create",
                errors:new Errors()
            }
        },
        computed:{
            categoryList(){
                return this.$store.getters.orderedCategories;
            }
        },
        methods:{
            persist(){
                this.errors = new Errors();
                if(!this.submitting){
                    this.submitting = true;
                    axios.post(this.formUrl, {
                        "title":this.title,
                        "content":this.content,
                        "categories":this.categories,
                        "api_token":this.$store.state.authToken
                    })
                    .then(response => {
                        Flash.success(response.data.title + ' was added successfully');
                        this.$store.commit('pushTo', {
                            key: 'posts',
                            value: response.data
                        });
                        this.$emit('close');
                        this.submitting = false;
                    })
                    .catch(error => {
                        if(error.response.data){
                            if(error.response.status == 422){
                                this.errors.record(error.response.data);
                            }else{
                                Flash.error(error.response.data.message);
                            }
                        }else{
                            Flash.error("Unable to save the category. Please try again.");
                        }
                        this.submitting = false;
                    });
                }
            }
        }
    }
</script>

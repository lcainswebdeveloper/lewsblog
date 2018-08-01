<template>
    <div>
        <utility-loader-dots v-if="submitting"></utility-loader-dots>
        <form v-show="!submitting" @submit.prevent="persist" :action="formUrl">
            <form-group label-title="Title" :form-errors="errors" field-name="title">
                <form-text placeholder="Title" v-model="title" field-name="title"></form-text>
            </form-group>
            <form-group label-title="Abstract" :form-errors="errors" field-name="abstract">
                <form-text placeholder="Abstract" v-model="abstract" field-name="abstract"></form-text>
            </form-group>
            <form-group label-title="Content" :form-errors="errors" field-name="content">
                <form-textarea placeholder="Content" v-model="content" field-name="content"></form-textarea>
            </form-group>
            <form-group label-title="Categories" :form-errors="errors" field-name="categories">
                <div class="row">
                    <div v-for="category in categoryList" class="col-xs-4">
                        <input type="checkbox" v-model="categories" :value="category.id" :id="'category-' + category.id"> <label :for="'category-' + category.id">&nbsp;{{category.title}}</label>
                    </div>
                </div>
            </form-group>
            <button class="btn btn-info"><i class="far fa-save"></i></button>
            <form-delete-button 
                @delete-start="submitting = true"
                @delete-error="submitting = false"
                @close="$emit('close')"
                v-if="editingMode" 
                :delete-url="'blog-post/' + this.activeRecord.id + '/delete'"
            >
            </form-delete-button>
        
        </form>
    </div>
</template>

<script>
import Errors from './../../classes/errors';
export default{
    props:{
        activeRecord:{}
    },
    mounted(){
        if(this.editingMode == true){
            this.title = this.activeRecord.title;
            this.abstract = this.activeRecord.abstract;
            this.content = this.activeRecord.content.replace(/(<br ?\/?>)*/g,"");
            this.categories = this.activeRecord.categories.map(cat => cat.id);
        }
    },
    name:"PostForm",
    data(){
        return{
            title:"",
            abstract:"",
            content:"",
            categories:[],
            submitting:false,
            errors:new Errors()
        }
    },
    computed:{
        formUrl(){
            if(!this.editingMode){
                return "blog-post/create";
            }else{
                return "blog-post/" + this.activeRecord.id + "/update";
            }
        },
        editingMode(){
            return typeof this.activeRecord == 'object';
        },
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
                    "abstract":this.abstract,
                    "content":this.content,
                    "categories":this.categories,
                    "api_token":this.$store.state.authToken
                })
                .then(response => {
                    Flash.success(response.data.title + ' was saved successfully');
                    if(this.editingMode == true){
                        if(this.$route.name == 'post'){
                            this.$router.push('/post/' + response.data.slug);
                        }
                    }
                    Event.$emit('refresh-categories');
                    Event.$emit('refresh-posts');
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

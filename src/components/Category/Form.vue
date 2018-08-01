<template>
    <div>
        <utility-loader-dots v-if="submitting"></utility-loader-dots>
        <form v-show="!submitting" @submit.prevent="persist" :action="formUrl">
            <form-group label-title="Title" :form-errors="errors" field-name="title">
                <form-text placeholder="Title" v-model="title" field-name="title"></form-text>
            </form-group>
            <button class="btn btn-info"><i class="far fa-save"></i></button>
        </form>
    </div>
</template>

<script>
import Errors from './../../classes/errors';
export default{
        name:"CategoryForm",
        props:{
            activeRecord:{}
        },
        mounted(){
            if(this.editingMode == true){
                this.title = this.activeRecord.title;
            }
        },
        computed:{
            formUrl(){
                if(!this.editingMode){
                    return "category/create";
                }else{
                    return "category/" + this.activeRecord.id + "/update";
                }
            },
            editingMode(){
                return typeof this.activeRecord == 'object';
            }
        },
        data(){
            return{
                title:"",
                submitting:false,
                errors:new Errors()
            }
        },
        methods:{
            persist(){
                this.errors = new Errors();
                if(!this.submitting){
                    this.submitting = true;
                    axios.post(this.formUrl, {
                        "title":this.title,
                        "api_token":this.$store.state.authToken
                    })
                    .then(response => {
                        Flash.success(response.data.title + ' was saved successfully');
                        if(this.editingMode == true){
                            if(this.$route.name == 'category'){
                                this.$router.push('/category/' + response.data.slug);
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

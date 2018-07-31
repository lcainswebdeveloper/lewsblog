<template>
    <div>
        <utility-loader-dots v-if="submitting"></utility-loader-dots>
        <form v-show="!submitting" @submit.prevent="persist" :action="formUrl">
            <form-group label-title="Title" :form-errors="errors" field-name="title">
                <form-text placeholder="Title" v-model="title" field-name="title"></form-text>
            </form-group>
            <button class="btn btn-info">Save</button>
        </form>
    </div>
</template>

<script>
import Errors from './../../classes/errors';
export default{
        name:"CategoryForm",
        data(){
            return{
                title:"",
                submitting:false,
                formUrl:"category/create",
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
                        Flash.success(response.data.title + ' was added successfully');
                        this.$store.commit('pushTo', {
                            key: 'categories',
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

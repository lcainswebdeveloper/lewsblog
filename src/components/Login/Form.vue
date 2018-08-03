<template>
    <div>
        <utility-loader-dots v-if="submitting"></utility-loader-dots>
        <form v-show="!submitting" @submit.prevent="login" :action="loginUrl">
            <form-group label-title="Email" :form-errors="errors" field-name="email">
                <form-text placeholder="Email" v-model="email" field-name="email"></form-text>
            </form-group>
            <form-group label-title="Password" :form-errors="errors" field-name="password">
                <form-text type="password" placeholder="Password" v-model="password" field-name="password"></form-text>
            </form-group>
            <button class="btn btn-info">Login</button>
        </form>
    </div>
</template>

<script>
import Errors from './../../classes/errors';
export default{
        name:"LoginForm",
        data(){
            return{
                user:{},
                email:"test@test.co.uk",
                password:"123456",
                submitting:false,
                loginUrl:"user/login",
                errors:new Errors()
            }
        },
        methods:{
            login(){
                if(!this.submitting){
                    this.submitting = true;
                    axios.post(this.loginUrl, {
                        "email":this.email,
                        "password":this.password
                    })
                    .then(response => {
                        this.$store.commit('loggedIn', {
                            authToken:response.data.api_token,
                            response:response.data
                        });
                        this.user = response.data;
                        this.submitting = false;
                    })
                    .catch(error => {
                        if(error.response.data){
                            if(error.response.status == 422){
                                this.errors.record(error.response.data);
                            }else{
                                Flash.error(error.response.data);
                            }
                        }else{
                            Flash.error("Login Failed. Please try again");
                        }
                        this.submitting = false;
                    });
                }
            }
        }
    }
</script>

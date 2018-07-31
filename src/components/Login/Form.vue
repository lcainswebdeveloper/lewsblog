<template>
    <div>
        <utility-loader-dots v-if="submitting"></utility-loader-dots>
        <form v-show="!submitting" @submit.prevent="login" :action="loginUrl">
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="Email" v-model="email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" placeholder="Password" v-model="password">
            </div>
            <button class="btn btn-info">Login</button>
        </form>
    </div>
</template>

<script>
export default{
        name:"LoginForm",
        mounted(){
        },
        data(){
            return{
                user:{},
                email:"lewis@lcainswebdeveloper.co.uk",
                password:"123456",
                submitting:false,
                loginUrl:"http://blogapi.test/api/user/login"
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
                        //this.$router.push('/admin');
                        this.submitting = false;
                    })
                    .catch(error => {
                        Flash.error("Login Failed. Please try again");
                        this.submitting = false;
                    });
                }
            }
        }
    }
</script>

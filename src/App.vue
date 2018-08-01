<template>
  <div id="app">
    <img src="@/assets/logo.png" class="vue-logo">
    <div id="nav" >
        <router-link to="/">Home</router-link> | 
        <a v-if="!authenticated" @click.prevent="showLoginForm = true" href="#">Login</a> 
        <a v-if="authenticated" @click.prevent="logout" href="#">Logout</a> 
        <span v-if="authenticated"> | Logged in as {{authUser.email}}</span>
    </div>
    <utility-modal v-if="showLoginForm && !authenticated" @close="showLoginForm = false">
        <h5 slot="header" class="modal-title">Login</h5>
        <login-form slot="body"></login-form>
    </utility-modal>
    <router-view/>
  </div>
</template>

<script>
    require('./sass/base.scss');
    export default{
        beforeCreate(){
            if (localStorage.getItem('api_token') != null) {
                this.$store.commit('checkAuth');
            }
            axios.get('/posts/categories')
            .then(response => {
                this.$store.commit('setItem', {
                    key: 'categories',
                    value: response.data
                });
            })

            axios.get('/posts/blog-posts')
            .then(response => {
                this.$store.commit('setItem', {
                    key: 'posts',
                    value: response.data
                });
            })
        },
        methods:{
            logout(){
                this.$store.commit('logout');
                this.$router.push('/');
                Flash.success('Logout successful');
            }
        },
        data(){
            return{
                showLoginForm:false
            }
        },
        computed:{
            authUser(){
                return this.$store.state.authUser;
            },
            authenticated(){
                return this.$store.state.authenticated;
            }
        },
        mounted(){
            
        },
    }
</script>


<template>
  <div id="app">
    <img src="@/assets/logo.png" class="vue-logo">
    <utility-loader-dots v-if="!$store.state.appReady"></utility-loader-dots>
    <div v-if="$store.state.appReady">
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
        <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>

<script>
    require('./sass/base.scss');
    export default{
        beforeCreate(){
            if (localStorage.getItem('api_token') != null) {
                this.$store.commit('checkAuth');
            }
            this.$store.dispatch('loadCategories').then(categories => {
                this.$store.dispatch('loadPosts');
            });
        },
        methods:{
            logout(){
                this.$store.commit('logout');
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
            Event.$on('refresh-categories', () => {
                this.$store.dispatch('loadCategories');
            });
            Event.$on('refresh-posts', () => {
                this.$store.dispatch('loadPosts');
            });
        },
    }
</script>


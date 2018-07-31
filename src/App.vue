<template>
  <div id="app">
    <img src="@/assets/logo.png" class="vue-logo">
    <div id="nav" >
      <router-link to="/">Home</router-link> | 
      <a v-if="!authenticated" @click.prevent="showLoginForm = true" href="#">Login</a> 
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
            //this.$store.commit('loadApp');
            if (localStorage.getItem('api_token') != null) {
                this.$store.commit('checkAuth');
            }
        },
        data(){
            return{
                showLoginForm:false
            }
        },
        computed:{
            authenticated(){
                return this.$store.state.authenticated;
            }
        }
    }
</script>


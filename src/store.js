import Vue from "vue";
import Vuex from "vuex";
import $ from 'jquery';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
        winWidth:$(window).width(),
        authenticated: false,
        authenticating: false,
        authUser:{},
        appReady: false,
        authToken: "",
        categories:[],
        posts:[],
        refreshingCategories:false,
        refreshingPosts:false,
        activeCategory:'all'
    },
    getters:{
        activeCategoryData(state){
            return _.find(state.categories, cat => {
                return cat.slug == state.activeCategory;
            });
        },
        orderedCategories(state){
            return _.orderBy(state.categories, ['title'], ['asc']);
        },
        filteredPosts(state, getters){
            /*If all return everything loaded originally*/
            if(state.activeCategory == 'all'){
                return _.orderBy(state.posts, ['created_at'], ['desc']);
            }
            if(getters.activeCategoryData != undefined && state.activeCategory != 'all'){
                return _.orderBy(getters.activeCategoryData.posts, ['created_at'], ['desc']);
            }else{
                return _.orderBy([], ['created_at'], ['desc']);
            }
        },
        siteReponsiveMode(state){
            if (state.winWidth <= 1000 && state.winWidth > 767) return 'on-tablet';
            if (state.winWidth <= 767) return 'on-mobile';
            return 'non-mobile';
        }
    },
	mutations: {
        updateWinWidth(state){
            state.winWidth = $(window).width();
        },
        loggedIn: (state, data) => {
            Flash.success("You have logged in successfully...");
            state.authenticated = true;
            state.authToken = data.authToken;
            state.authenticating = false;
            state.authUser = data.response;
            localStorage.setItem('api_token', data.response.token);
            localStorage.setItem('user_id', data.response.id);
        },
        checkAuth(state){
            Flash.warning("Verifying ....");
            state.authenticating = true;
            axios.post('user/verify', {
                "user_id": localStorage.getItem('user_id'),
                "api_token": localStorage.getItem('api_token')
            })
            .then(response => {
                Flash.success("Thank you " + response.data.email + ". You have been verified.");
                state.authenticated = true;
                state.authToken = localStorage.getItem('api_token');
                state.authenticating = false;
                state.authUser = response.data;
            })
            .catch(error => {
                Flash.error("Login Failed. Please login again");
                state.authenticating = false;
                localStorage.removeItem('api_token');
                localStorage.removeItem('user_id');
                state.authenticated = false;
                state.authToken = '';
                state.authUser = {};
            });
        },
        logout(state){
            localStorage.removeItem('api_token');
            localStorage.removeItem('user_id');
            state.authenticated = false;
            state.authToken = '';
            state.authUser = {};
        },
        pushTo(state, data) {
            state[data.key].push(data.value);
        },
        setItem(state,data){
            state[data.key] = data.value;
        },
        
    },
    actions:{
        loadCategories(context){
            context.commit('setItem', {
                key: 'refreshingCategories',
                value: true
            });
            return new Promise((resolve,reject) => {
                axios.get('/posts/categories')
                .then(response => {
                    context.commit('setItem', {
                        key: 'categories',
                        value: response.data
                    });
                    context.commit('setItem', {
                        key: 'refreshingCategories',
                        value: false
                    });
                    return resolve(response.data);
                })
                .catch(error => {
                    context.commit('setItem', {
                        key: 'refreshingCategories',
                        value: false
                    });
                })
            });
        },
        loadPosts(context){
            context.commit('setItem', {
                key: 'refreshingPosts',
                value: true
            });
            return new Promise((resolve,reject) => {
                axios.get('/posts/blog-posts')
                    .then(response => {
                        context.commit('setItem', {
                            key: 'posts',
                            value: response.data
                        });
                        context.commit('setItem', {
                            key: 'appReady',
                            value: true
                        });
                        context.commit('setItem', {
                            key: 'refreshingPosts',
                            value: false
                        });
                    }).catch(error => {
                        context.commit('setItem', {
                            key: 'refreshingPosts',
                            value: false
                        });
                    })
            });
        }
    }
});
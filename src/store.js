import Vue from "vue";
import Vuex from "vuex";
import $ from 'jquery';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
        winWidth:$(window).width(),
        authenticated: false,
        authenticating: false,
        appReady: false,
        authToken: ""
    },
    getters:{
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
            localStorage.setItem('api_token', data.response.token);
            localStorage.setItem('user_id', data.response.id);
        },
	}
});
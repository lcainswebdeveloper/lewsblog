import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Post from './views/Post.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/category/:slug',
            name: 'category',
            component: Category
        },
        {
            path: '/post/:slug',
            name: 'post',
            component: Post
        }
    ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './Components/App/App.vue'
import Home from './Components/Home/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
}]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')
import Vue from 'vue'
import Router from 'vue-router'
import Home from 'src/views/Home'
Vue.use(Router)

const router = new Router({
    base: '/vue',
    hashbang: true,
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('src/views/Login')
        }
    ]
})

router.beforeEach((to, from, next) => {
    next()
})

export default router

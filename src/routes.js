import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from './components/Features/Admin/Admin'
import Profile from './components/Features/Profile/Profile'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import User from './components/Features/User'
import store from './store/store'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '', redirect: '/exercice'},
        {path: '/exercice', component: User},
        {path: '/admin',
        beforeEnter(to, from, next) {
            if(store.getters["user/isLoggedIn"]) {
                next()
            } else {
                router.push("/")
            }
        }, 
        component: Admin},
        {path: '/signin', component: SignIn},
        {path: '/signup', component: SignUp},
        {path: '/profile',
        beforeEnter(to, from, next) {
            if(store.getters["user/isLoggedIn"]) {
                next()
            } else {
                router.push("/")
            }
        }, 
        component: Profile},
        {path: '**', redirect: '/exercice'}
    ]
})

export default router
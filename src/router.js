import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from './components/Features/Admin/Admin'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import User from './components/Features/User'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '', redirect: '/exercice'},
        {path: '/exercice', component: User},
        {path: '/admin', component: Admin},
        {path: '/signin', component: SignIn},
        {path: '/signup', component: SignUp},
        {path: '**', redirect: '/exercice'}
    ]
})

export default router
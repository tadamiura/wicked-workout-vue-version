import Vue from 'vue'
import VueRouter from 'vue-router'
import User from './components/Features/User'
// import Admin from './components/features/Admin/Admin'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '', redirect: '/exercice'},
        {path: '/exercice', component: User},
        // {path: '/admin', component: Admin},
        {path: '**', redirect: '/exercice'}
    ]
})

export default router
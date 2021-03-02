import Vue from 'vue'
import VueRouter from 'vue-router'
import Exercice from './components/Features/Exercice/Exercice'
// import Admin from './components/features/Admin/Admin'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '', redirect: '/exercice'},
        {path: '/exercice', component: Exercice},
        // {path: '/admin', component: Admin},
        {path: '**', redirect: '/exercice'}
    ]
})

export default router
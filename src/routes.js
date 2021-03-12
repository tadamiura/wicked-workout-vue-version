import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from './components/Features/Admin/Admin'
import AdminAddExercice from './components/Features/Admin/AdminAddExercice'
import AdminUpdateExercicesList from './components/Features/Admin/AdminUpdateExercicesList'
import AdminUpdateThisExercice from './components/Features/Admin/AdminUpdateThisExercice'
import Profile from './components/Features/Profile/Profile'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import User from './components/Features/User'
import store from './store/store'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '',
            redirect: '/exercice'
        },
        {
            path: '/exercice',
            component: User
        },
        {
            path: '/admin',
            beforeEnter(to, from, next) {
                if (store.getters["user/isLoggedIn"]) {
                    next()
                } else {
                    router.push("/")
                }
            },
            component: Admin
        },
        {
            path: '/admin/exercices/new',
            beforeEnter(to, from, next) {
                if (store.getters["user/isLoggedIn"]) {
                    next()
                } else {
                    router.push("/")
                }
            },
            component: AdminAddExercice
        },
        {
            path: '/admin/exercices/update',
            beforeEnter(to, from, next) {
                if (store.getters["user/isLoggedIn"]) {
                    next()
                } else {
                    router.push("/")
                }
            },
            component: AdminUpdateExercicesList
        },
        {
            path: '/admin/exercices/update/:exerciceId',
            name: 'update.exercice',
            beforeEnter(to, from, next) {
                if (store.getters["user/isLoggedIn"]) {
                    next()
                } else {
                    router.push("/")
                }
            },
            component: AdminUpdateThisExercice
        },
        {
            path: '/signin',
            component: SignIn
        },
        {
            path: '/signup',
            component: SignUp
        },
        {
            path: '/profile',
            beforeEnter(to, from, next) {
                if (store.getters["user/isLoggedIn"]) {
                    next()
                } else {
                    router.push("/")
                }
            },
            component: Profile
        },
        {
            path: '**',
            redirect: '/exercice'
        }
    ]
})

export default router
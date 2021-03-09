import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../http'
import router from '../router'

Vue.use(Vuex)

const exercice = {
    namespaced: true,
    state: {
        datas: []
    },
    mutations: {
        addMany(state, exercices) {
            state.datas = exercices
        }
    },
    actions: {
        fetchDatas(context) {
            axios.get('exercices')
                .then(res => {
                    const data = res.data
                    context.commit('addMany', data)
                })
        }
    }
}

const favorite = {
    namespaced: true,
    state: {
        datas: []
    },
    mutations: {
        addOne(state, exercice) {
            state.datas.push(exercice)
        },
        deleteOne(state, id) {
            const index = state.datas.findIndex(data => data.id === id)
            state.datas.splice(index, 1)
        }
    }
}

const user = {
    namespaced: true,
    state: {
        data: {},
        isLoading: false,
        isLoggedIn: null,
        jwtToken: localStorage.getItem("jwtToken"),
        errors: []
    },
    getters: {
        isLoading: state => state.isLoading,
        isLoggedIn: state => state.isLoggedIn,
        errors: state => state.errors,
        currentUser: state => state.data,
        jwtToken: state => state.jwtToken
    },
    actions: {
        async trySignIn(context, credentials) {
            // console.log('trySygnIn')
            try {
                // console.log('trySygnIn try')
                context.commit("updateIsLoading", true)
                const response = await axios.post('/vue/auth', credentials)
                // console.log('trySIgnIN response', response.data)
                context.commit("signInSuccess", response.data)
                router.push("/profile")
            } catch (err) {
                console.log('trySygnIn catch', err)
                context.commit("signError", err)
            }
        },
        async trySignUp(context, user) {
            try {
                context.commit("updateIsLoading", true)
                await axios.post('/vue/user', user)
                context.commit("signUpSuccess")
                router.push("signin")
            } catch (err) {
                context.commit("signError", err)
            }
        },
        async fetchCurrentUser(context) {
            try {
                // console.log('TRY fetchCurrentUser')
                context.commit("updateIsLoading", true)
                const response = await axios.get('vue/user/current')
                context.commit("fetchCurrentUserSuccess", response.data)
                // console.log('fetch current user response', response.data)
            } catch (err) {
                context.commit("signError", err)
            }
        }
    },
    mutations: {
        updateIsLoading(state, isLoading) {
            state.isLoading = isLoading
        },
        signUpSuccess(state) {
            state.isLoading = false
            state.errors = []
        },
        signError(state, errors) {
            state.isLoading = false
            state.errors = errors.response.data
        },
        signInSuccess(state, data) {
            // console.log('signInSuccess data.user', data.user)
            
            state.isLoading = false;
            state.errors = [];
            state.isLoggedIn = true;
            // delete data.user.password;
            state.data = data.user;
            state.jwtToken = data.jwtToken;
            // console.log('signInSuccess state', state)
            localStorage.setItem("jwtToken", data.jwtToken);
        },
        signOut(state) {
            state.jwtToken = null
        },
        fetchCurrentUserSuccess(state, user) {
            // console.log('fetchCurrentUserSuccess', user)
            state.data = user
            state.isLoading = false
            state.isLoggedIn = true
            state.errors = []
        }
    }
}

const store = new Vuex.Store({
    modules: {
        exercice,
        favorite,
        user
    }
})

export default store;
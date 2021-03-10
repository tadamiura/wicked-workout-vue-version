import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../http'
import router from '../routes'

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
        isLoggedIn: localStorage.getItem("jwtToken") ? null : false,
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
            try {
                context.commit("updateIsLoading", true)
                const response = await axios.post('/vue/auth', credentials)
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
                context.commit("updateIsLoading", true)
                const response = await axios.get('vue/user/current')
                context.commit("fetchCurrentUserSuccess", response.data)
                console.log(response)
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
            state.isLoading = false;
            state.errors = [];
            state.isLoggedIn = true;
            state.data = data.user;
            state.jwtToken = data.jwtToken;
            localStorage.setItem("jwtToken", data.jwtToken);
        },
        signOut(state) {
            state.jwtToken = null
            state.data = null
            state.isLoggedIn = false
            localStorage.removeItem("jwtToken")
        },
        fetchCurrentUserSuccess(state, user) {
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
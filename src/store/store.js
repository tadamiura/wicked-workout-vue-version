import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
            .then( res => {
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
        jwtToken: null,
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
        async trySignIn(context, credentials) {},
        async trySignUp(context, user) {},
        async fetchCurrentUser(context) {}
    },
    mutations: {
        signUpSucess(state) {},
        signError(state, errors) {},
        signInSucess(state, data) {},
        signOut(state)
    }
}

const store = new Vuex.Store({
    modules: {
      exercice,
      favorite
    }
  })
  
  export default store;
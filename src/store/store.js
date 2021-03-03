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


const store = new Vuex.Store({
    modules: {
      exercice
    }
  })
  
  export default store;
import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../http'
import router from '../routes'

Vue.use(Vuex)

const exercice = {
    namespaced: true,
    state: {
        datas: [],
        form: {
            name: "",
            url_name: "",
            is_six_workout: "0",
            is_tabata_workout: "0",
            is_thirty_thirty_workout: "0",
        },
        checkedWorkout: [],
    },
    getters: {
        datas: state => state.datas,
        name: state => state.form.name,
        url_name: state => state.form.url_name,
        is_six_workout: state => state.form.is_six_workout,
        is_tabata_workout: state => state.form.is_tabata_workout,
        is_thirty_thirty_workout: state => state.form.is_thirty_thirty_workout,
        checkedWorkout: state => state.checkedWorkout,
    },
    mutations: {
        addMany(state, exercices) {
            state.datas = exercices
        }
    },
    actions: {
        async fetchDatas(context) {
            try {
                await axios.get('exercices')
                    .then(res => {
                        const data = res.data
                        context.commit('addMany', data)
                    })
            } catch (err) {
                console.log(err)
            }
        },
        async tryAddExercice(context, credentials) {
            try {
                axios
                    .post("exercices", credentials)
                    .then((res) => res.data)
                    .then(alert(`L'exercice ${credentials.name} a bien été ajouté`))
                router.push('/admin')
            } catch (err) {
                console.log(err)
            }
        },
        async tryDelete(context, exerciceId) {
            try {
                axios
                    .delete(`exercices/${exerciceId}`)
                    .then((res) => res.data)
                    .then(alert(`L'exercice a bien été supprimé`))
                router.push('/admin')
            } catch (err) {
                console.log(err)
            }
        },
        async tryUpdate(context, credentials) {
            try {
                await axios
                    .put(`exercices/${credentials.exerciceId}`, credentials.form)
                    .then((res) => res.data)
                    .then(alert(`L'exercice ${credentials.form.name} a bien été modifié`));
                router.push("/admin");
            } catch (err) {
                console.log(err);
            }
        }
    },
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
        isLoggedIn: localStorage.getItem("jwtToken") ? true : false,
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
            } catch (err) {
                context.commit("signError", err)
            }
        },
        async tryUpdateUser(context, user) {
            try {
                await axios.put(`vue/user/${user.id}`, user)
                    .then(res => res.data)
                    .then(alert('Utilisateur modifié'))
                router.push('/')
            } catch (err) {
                alert('Echec de la modification')
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
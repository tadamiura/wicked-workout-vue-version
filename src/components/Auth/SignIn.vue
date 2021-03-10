<template>
    <div class="container d-flex flex-column p-3 justify-content-center align-items-center">
        <h1>Sign in</h1>
        <form @submit="trySubmit" class="text-left">
            <div class="form-group">
                <label>Email</label>
                <input v-model="form.email" class="form-control" type="text" required>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input v-model="form.password" class="form-control" type="password" required>
            </div>
            <ul v-if="errors.length">
                <li v-for="error in errors" :key="error" class="text-danger" >{{ error }}</li>
            </ul>
            <button class="btn btn-primary mt-3" :class="{ 'disabled': isLoading }">Connexion</button>
        </form>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: "SignIn",
    data() {
        return {
            errors: [],
            form: {
                email: "",
                password: ""
            }
        }
    },
    computed: {
        ...mapGetters('user', ['isLoading'], 'errors')
    },
    methods: {
        trySubmit(e) {
            e.preventDefault()
            if(!this.isLoading){
                this.$store.dispatch('user/trySignIn', this.form)
            }
        }
    }
}
</script>
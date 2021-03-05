<template>
    <div class="container d-flex flex-column p-3 justify-content-center align-items-center">
        <h1>Sign Up</h1>
        <form @submit="trySubmit" class="text-left">
            <div class="form-group">
                <label>Email</label>
                <input  v-model="form.email" class="form-control" type="text">
            </div>
            <div class="form-group">
                <label>Username</label>
                <input  v-model="form.username" class="form-control" type="text">
            </div>
             <div class="form-group">
                <label>FirstName</label>
                <input  v-model="form.firstname" class="form-control" type="text">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input  v-model="form.password" class="form-control" type="password">
            </div>
            <ul v-if="errors.lenght">
                <li v-for="error in errors" :key="error" class="text-danger">{{ error }}</li>
            </ul>
            <button class="btn btn-primary mt-3">SignUp</button>
        </form>
    </div>
</template>
<script>
export default {
    name: "SignUp",
    data() {
        return {
            errors: [],
            form: {
                email: "",
                username: "",
                firstname: "",
                password: ""
            }
        }
    },
    methods: {
        trySubmit(e) {
            e.preventDefault()
            if(this.isValid){
                this.$store.dispatch("user/trySignUp", this.form)
            }
        },
        isValid() {
            return true
        }
    }
}
</script>
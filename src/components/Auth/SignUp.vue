<template>
  <div class="container d-flex flex-column p-3 justify-content-center align-items-center">
    <h1>Sign Up</h1>
    <form @submit="trySubmit" class="text-left">
      <div class="form-group">
        <label>Email</label>
        <input v-model="form.email" class="form-control" type="email" required/>
      </div>
      <div class="form-group">
        <label>Username</label>
        <input v-model="form.username" class="form-control" type="text" required/>
      </div>
      <div class="form-group">
        <label>FirstName</label>
        <input v-model="form.firstname" class="form-control" type="text" required/>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input v-model="form.password" class="form-control" type="password" required/>
      </div>
      <ul v-if="formErrors.length">
        <li v-for="error in formErrors" :key="error" class="text-danger">
          {{ error }}
        </li>
      </ul>
      <button class="btn btn-primary mt-3" :class="{ disabled: isLoading }">
        SignUp
      </button>
    </form>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "SignUp",
  data() {
    return {
      formErrors: [],
      form: {
        email: "",
        username: "",
        firstname: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters("user", ["isLoading", "errors"]), //fetch only isLoading and errors from user
  },
  watch: {
    //in order to observe change of errors and change formError
    errors(newValue) {
      this.formErrors = newValue;
    },
  },
  methods: {
    trySubmit(e) {
      e.preventDefault();
      if (this.isValid() && !this.isLoading) {
        this.$store.dispatch("user/trySignUp", this.form);
      }
    },
    isValid() {
      this.formErrors = [];
    //   if (
    //       !/^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/.test(
    //           this.form.email
    //     )
    //   ) {
    //     this.formErrors.push("email non valide");
    //   }
      return this.formErrors.length === 0;
    },
  },
};
</script>

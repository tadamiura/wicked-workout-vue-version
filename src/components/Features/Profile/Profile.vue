<template>
  <div class="card p-4 d-flex flex-column">
    <div v-if="showForm === false">
      <!-- <div>email : {{ user.id }}</div> -->

      <div>email : {{ user.email }}</div>
      <div>nom : {{ user.nom }}</div>
      <div>prénom : {{ user.prenom }}</div>
    </div>
    <div v-else>
      <form @submit="tryUpdateUser" class="text-left">
        <div class="mb-3 form-group">
          <label>Email</label>
          <input
            class="form-control"
            type="email"
            :placeholder="user.email"
            v-model="form.email"
            required
          />
          <label>Nom</label>
          <input
            class="form-control"
            type="text"
            :placeholder="user.nom"
            v-model="form.username"
            required
          />
          <label>Prénom</label>
          <input
            class="form-control"
            type="text"
            :placeholder="user.prenom"
            v-model="form.firstname"
            required
          />
        </div>
        <button class="btn btn-primary mt-3">
          Valider
        </button>
      </form>
    </div>
    <button @click="updateUserInfo" class="btn btn-secondary my-3">
      <span v-if="showForm">Retour</span>
      <span v-else>Modifier mes informations</span>
    </button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Profile",
  data() {
    return {
      showForm: false,
      form: {
        id: null,
        email: "",
        username: "",
        firstname: "",
      },
    };
  },
  computed: {
    ...mapGetters("user", {
      user: "currentUser",
      jwtToken: "jwtToken",
      isLoggedIn: "isLoggedIn",
    }),
  },
  methods: {
    updateUserInfo() {
      this.showForm = !this.showForm;
    },
    tryUpdateUser(e) {
      e.preventDefault();
      this.form.id = this.user.id;
      this.$store.dispatch("user/tryUpdateUser", this.form);
    },
  },
};
</script>

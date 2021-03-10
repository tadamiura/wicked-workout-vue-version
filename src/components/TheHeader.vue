<template>
  <nav class="navbar navbar-light bg-light navbar-expand-lg">
    <a class="navbar-brand" href="/">
      <img src="../assets/logo.png" width="50" height="50" />
      Wicked Workout
    </a>
    <button class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/exercice">Exercices</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/admin">Admin</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/profile">Profil</router-link>
        </li>
      </ul>
    </div>
    <div v-if="!jwtToken && isLoggedIn === false" class="d-flex flex-row px-3">
      <router-link to="/signin">Connexion</router-link>
      <router-link to="/signup">Inscription</router-link>
    </div>
    <div v-if="isLoggedIn" @click="signOut" style="cursor: pointer" class="px-3">Déconnexion</div>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TheHeader',
  computed: {
    ...mapGetters("user", ["isLoggedIn", "jwtToken"])
  },
  methods: {
    signOut() {
      this.$store.commit('user/signOut')
      this.$router.push("/")
    }
  }
}
</script>
<style>
a {
  text-decoration: none;
  margin: 0 5px;
}
</style>
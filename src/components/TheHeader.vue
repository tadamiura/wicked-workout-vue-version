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
    <div class="d-flex flex-row">
      <router-link to="/signin">Connexion</router-link>
      <router-link to="/signup">Inscription</router-link>
    </div>
  </nav>
</template>
<style>
a {
  text-decoration: none;
  margin: 0 5px;
}
</style>
<template>
  <div>
    <div class="card m-3">
      <div class="card-header">
        Ajouter
      </div>
      <div class="card-body">
        <h5 class="card-title">Pour ajouter un nouvel exercice</h5>
        <p class="card-text">
          Accéder au formulaire de création d'un exercice
        </p>
        <a
          v-if="jwtToken && isLoggedIn"
          href="/admin/exercices/new"
          class="btn btn-primary"
          >Ajouter un exercice</a
        >
      </div>
    </div>
    <div class="card mb-3 mx-3">
      <div class="card-header">
        Modifier
      </div>
      <div class="card-body">
        <h5 class="card-title">Pour modifier un exercice existant</h5>
        <p class="card-text">
          Accéder au formulaire de modication des exercices
        </p>
        <a href="/admin/exercices/update" class="btn btn-primary"
          >Modifier un exercice</a
        >
      </div>
    </div>
    <div class="card mb-3 mx-3">
      <div class="card-header">
        Supprimer
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("user", ["isLoggedIn", "jwtToken"]),
  },
};
</script>

<template>
  <div class="d-flex flex-row flex-wrap">
    <div v-for="exercice in exercices" :key="exercice.id" class="card m-2">
      <div class="card-body text-center">
        <h5 class="card-title">
          {{ exercice.name }}
        </h5>
        <video-embed class="mx-auto" :src="exercice.url_name"></video-embed>
        <button class="btn btn-danger" @click="tryDelete(exercice.id)">
          Supprimer
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("exercice", {
      exercices: "datas", //alias pour nommer datas
    }),
  },
  created() {
    this.$store.dispatch("exercice/fetchDatas");
  },
  methods: {
    tryDelete(exerciceId) {
      this.$store.dispatch("exercice/tryDelete", exerciceId);
    },
  },
};
</script>

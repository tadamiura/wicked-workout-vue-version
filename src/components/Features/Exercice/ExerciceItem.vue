<template>
  <div class="w-30 p-3 exercice-container d-flex flex-column">
    <div>
      <p>{{ exercice.name }}</p>
      <video-embed class="mx-auto" :src="exercice.url_name"></video-embed>
    </div>
    <button
      @click="addOne(exercice)"
      class="btn btn-primary btn-sm float-right"
    >
      Ajouter à vos favoris
    </button>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["exercice"],
  methods: {
    ...mapMutations("favorite", ["addOne"]),
  },
};
</script>
<style>
</style>

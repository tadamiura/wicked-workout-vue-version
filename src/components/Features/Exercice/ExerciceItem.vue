<template>
  <div class="w-30 p-3 product-container d-flex flex-column">
    <div>
      <h5>{{ exercice.name }}</h5>
      <video-embed class="mx-auto" :src="exercice.url_name"></video-embed>
    </div>
    <button class="btn btn-primary btn-sm float-right">Ajouter à vos favoris</button>
  </div>
</template>
<script>
export default {
  props: ["exercice"],
};
</script>

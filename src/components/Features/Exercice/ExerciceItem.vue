<template>
  <div class="w-25 p-3 product-container d-flex flex-column">
    <div>
      <h3>{{ exercice.name }}</h3>
    </div>
    <button class="btn btn-primary btn-sm float-right">Ajouter à vos favoris</button>
  </div>
</template>
<script>
export default {
  props: ["exercice"],
};
</script>

<template>
  <div>
    <h1>Liste des exercices</h1>
    <!-- <ul v-for="exercice in exercices" :key="exercice.id">
        <li>{{ exercice.name }}</li>
    </ul> -->
  </div>
</template>

<script>

export default {
    props: ['exercices']
}
</script>

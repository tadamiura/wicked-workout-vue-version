<template>
    <div class="d-flex flex-row flex-wrap">
        <exercice-item v-for="exercice in exercices" :key="exercice.id" :exercice="exercice"></exercice-item>
    </div>
</template>
<script>
import ExerciceItem from './ExerciceItem'
export default {
  components: { ExerciceItem },
    props: ['exercices']
}
</script>
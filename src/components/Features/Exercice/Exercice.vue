<template>
  <div>
    <exercices-list :exercices="exercices"></exercices-list>
  </div>
</template>

<script>
import ExercicesList from "./ExercicesList";
export default {
  components: { ExercicesList },
  props: ["exercices"],
};
</script>

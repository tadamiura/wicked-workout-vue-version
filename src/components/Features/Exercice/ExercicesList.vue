<template>
  <div>
    <form class="text-left"></form>
    <div class="form-group">
      <input
        class="mx-2"
        id="666"
        type="radio"
        value="no_filter"
        v-model="radio"
      />
      <label for="666">Aucun filtre</label>
      <input
        class="mx-2"
        id="666"
        type="radio"
        value="is_six_workout"
        v-model="radio"
      />
      <label for="666">666</label>
      <input
        class="mx-2"
        id="666"
        type="radio"
        value="is_tabata_workout"
        v-model="radio"
      />
      <label for="666">Tabata</label>
      <input
        class="mx-2"
        id="666"
        type="radio"
        value="is_thirty_thirty_workout"
        v-model="radio"
      />
      <label for="666">30/30</label>
      <button class="btn btn-primary m-3" @click="filterExercicesByWorkout">
        Appliquer
      </button>
    </div>
    <div class="d-flex flex-row flex-wrap" v-if="isFilter">
      <exercice-item
        v-for="exercice in filterExercices"
        :key="exercice.id"
        :exercice="exercice"
      ></exercice-item>
    </div>
    <div class="d-flex flex-row flex-wrap" v-else>
      <exercice-item
        v-for="exercice in exercices"
        :key="exercice.id"
        :exercice="exercice"
      ></exercice-item>
    </div>
  </div>
</template>
<script>
import ExerciceItem from "./ExerciceItem";
export default {
  data() {
    return {
      filterExercices: [],
      isFilter: false,
      radio: "",
    };
  },
  components: { ExerciceItem },
  props: ["exercices"],
  methods: {
    filterExercicesByWorkout(e) {
      e.preventDefault();
      this.isFilter = !this.isFilter;
      this.filterExercices = [];
      this.exercices.map((exercice) => {
        if (this.radio === "no_filter") {
          this.filterExercices.push(exercice);
        }
        if (this.radio === "is_six_workout" && exercice.is_six_workout === 1) {
          this.filterExercices.push(exercice);
        }
        if (
          this.radio === "is_tabata_workout" &&
          exercice.is_tabata_workout === 1
        ) {
          this.filterExercices.push(exercice);
        }
        if (
          this.radio === "is_thirty_thirty_workout" &&
          exercice.is_thirty_thirty_workout === 1
        ) {
          this.filterExercices.push(exercice);
        }
      });
    },
  },
};
</script>

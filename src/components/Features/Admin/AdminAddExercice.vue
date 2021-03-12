<template>
  <div
    class="container d-flex flex-column p-3 justify-content-center align-items-center"
  >
    <form @submit="trySubmit" class="text-left">
      <div class="mb-3 form-group">
        <label>Nom de l'exercice</label>
        <input
          class="form-control"
          type="text"
          placeholder="exercice"
          v-model="form.name"
          required
        />
      </div>
      <div class="mb-3 form-group">
        <label>Lien URL de l'exercice</label>
        <video-embed
          v-if="form.url_name"
          class="mx-auto"
          :src="form.url_name"
        ></video-embed>
        <input
          class="form-control"
          type="url"
          placeholder="entrer l'url"
          v-model="form.url_name"
        />
      </div>
      <div class="my-3 form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="is_tabata_workout"
          v-model="checkedWorkout"
        />
        <label class="form-check-label">Tabata</label>
      </div>
      <div class="mb-3 form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="is_six_workout"
          v-model="checkedWorkout"
        />
        <label class="form-check-label">666</label>
      </div>
      <div class="mb-3 form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value="is_thirty_thirty_workout"
          v-model="checkedWorkout"
        />
        <label class="form-check-label">30/30</label>
      </div>
      <button class="btn btn-primary mt-3">Envoyer</button>
    </form>
  </div>
</template>
<script>
import axios from "../../../http";
export default {
  data() {
    return {
      form: {
        name: "",
        url_name: "",
        is_six_workout: "0",
        is_tabata_workout: "0",
        is_thirty_thirty_workout: "0",
      },
      checkedWorkout: [],
    };
  },
  methods: {
    checkboxValues() {
      if (this.checkedWorkout.includes("is_six_workout")) {
        this.form.is_six_workout = "1";
      }
      if (this.checkedWorkout.includes("is_tabata_workout")) {
        this.form.is_tabata_workout = "1";
      }
      if (this.checkedWorkout.includes("is_thirty_thirty_workout")) {
        this.form.is_thirty_thirty_workout = "1";
      }
    },
    trySubmit(e) {
      e.preventDefault();
      this.checkboxValues();
      axios
        .post("exercices", this.form)
        .then((res) => res.data)
        .then(alert(`L'exercice ${this.form.name} a bien été ajouté`))
        .catch((err) => console.log(err));
    },
  },
};
</script>

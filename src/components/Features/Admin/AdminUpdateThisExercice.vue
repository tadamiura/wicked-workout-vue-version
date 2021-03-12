<template>
  <div
    class="container d-flex flex-column p-3 justify-content-center align-items-center"
  >
    <form @submit="trySubmit" class="form-group">
      <label>Nom de l'exercice</label>
      <input
        class="form-control my-3"
        v-model="form.name"
        :placeholder="exercice.name"
        required
      />
      <div class="mb-3 form-group">
        <label>Lien URL de l'exercice</label>
        <video-embed
          class="mx-auto"
          :src="form.url_name ? form.url_name : exercice.url_name"
        ></video-embed>
        <input
          class="form-control"
          type="url"
          :placeholder="exercice.url_name"
          v-model="form.url_name"
        />
      </div>
      <p>L'exercice sera présent dans les circuits :</p>
      <div class="my-3 form-check ">
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
      <button class="btn btn-primary">modifier</button>
    </form>
  </div>
</template>
<script>
import axios from "../../../http";
import router from "../../../routes";
export default {
  data() {
    return {
      exercice: [],
      exerciceId: null,
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
  mounted() {
    this.fetchId();
    axios
      .get(`exercices/${this.exerciceId}`)
      .then((res) => (this.exercice = res.data) && console.log(res.data));
  },
  methods: {
    fetchId() {
      this.exerciceId = this.$route.params.exerciceId;
    },
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
        .put(`exercices/${this.exerciceId}`, this.form)
        .then((res) => res.data)
        .then(alert(`L'exercice ${this.form.name} a bien été modifié`))
        .then(router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

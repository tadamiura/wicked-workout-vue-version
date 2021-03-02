<template>
  <div>
    <h1>Liste des exercices</h1>
    <ul v-for="exercice in exercices" :key="exercice.id">
        <li>{{ exercice.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            exercices:  {}
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            axios.get('exercices')
            .then( res => {
                this.exercices = res.data
            })
        }
    }
}
</script>

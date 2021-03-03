<template>
  <div class="d-flex flex-row">
    <transition name="left" appear>
      <exercice :exercices="exercices" class="w-75"></exercice>
    </transition>
    <!-- <transition  name="right" appear>
      <cart :cart="cart" class="w-25"></cart>
    </transition> -->
  </div>
</template>

<script>
import axios from 'axios';

import Exercice from './Exercice/Exercice'

export default {
    components: { Exercice },
    data() {
        return {
            exercices : {}
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

<style scoped>
  @keyframes fromleft {
    from {
      transform: translateX(-40px);
    }
    to {}
  }

  @keyframes fromright {
    from {
      transform: translateX(20px);
    }
    to {}
  }

  .left-enter-active {
    animation: fromleft 1.5s;
  }
  .right-enter-active {
    animation: fromright 1.5s;
  }
</style>
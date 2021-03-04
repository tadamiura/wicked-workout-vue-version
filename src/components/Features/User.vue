<template>
  <div class="d-flex flex-row">
    <transition name="left" appear>
      <exercice :exercices="exercices" class="w-75"></exercice>
    </transition>
    <transition  name="right" appear>
      <favorites :favorites="favorites" class="w-25"></favorites>
    </transition>
  </div>
</template>

<script>
import Exercice from "./Exercice/Exercice";
import Favorites from './Favorites/Favorites'
import { mapState } from "vuex";
export default {
  components: {
    Exercice,
    Favorites
  },
  computed: {
    ...mapState("exercice", {
      exercices: "datas", //alias pour nommer datas
    }),
    ...mapState("favorite", {
      favorites: 'datas'//alias pour nommer datas
    })
  },
  created() {
    this.$store.dispatch("exercice/fetchDatas");
  },
};
</script>

<style scoped>
@keyframes fromleft {
  from {
    transform: translateX(-40px);
  }
  to {
  }
}

@keyframes fromright {
  from {
    transform: translateX(20px);
  }
  to {
  }
}

.left-enter-active {
  animation: fromleft 3.5s;
}
.right-enter-active {
  animation: fromright 1.5s;
}
</style>

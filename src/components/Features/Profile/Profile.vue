<template>
<div class="card p-4 d-flex flex-column">
  <div>email : {{ user.email }}</div>
  <div>nom : {{ user.nom }}</div>
    <div>prénom : {{ user.prenom }}</div>

</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: "Profile",
    computed: {
        ...mapGetters("user", { user: "currentUser"})
    }
}
</script>
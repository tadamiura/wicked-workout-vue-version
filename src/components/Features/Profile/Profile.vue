<template>
<div class="card p-4 d-flex flex-column">
  <div>email : {{ user.email }}</div>
  <div>nom : {{ user.username }}</div>
    <div>prénom : {{ user.firstname }}</div>

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
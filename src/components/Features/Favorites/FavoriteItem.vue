<template>
    <div class="d-flex flex-row justify-content-between p-2">
        <p>{{ favorite.name }}</p>
        <button @click="deleteOne(favorite.id)" class="btn btn-danger p-1">
            Supprimer
        </button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    props: ['favorite'],
    methods: {
        ...mapMutations('favorite', ['deleteOne'])
    }
}
</script>
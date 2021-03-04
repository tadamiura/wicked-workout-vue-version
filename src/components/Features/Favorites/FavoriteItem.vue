<template>
    <div class="d-flex flex-row justify-content-between p-2">
        <h5>{{ favorite.name }}</h5>
        <button @click="deleteOne(favorite.id)" class="close">
            <span>&times;</span>
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
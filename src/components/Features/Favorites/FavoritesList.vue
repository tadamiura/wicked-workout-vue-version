<template>
    <div>
        <h2>Mes exercices favoris</h2>
        <favorite-item v-for="favorite in favorites" :key="favorite.id" :favorite="favorite"></favorite-item>
    </div>
</template>

<script>
import FavoriteItem from './FavoriteItem'
export default {
    props: ['favorites'],
    components: {
        FavoriteItem
    }
}
</script>
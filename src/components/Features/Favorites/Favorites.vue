<template>
    <div>
        <favorites-list :favorites="favorites"></favorites-list>
    </div>
</template>

<script>
import FavoritesList from './FavoritesList'

export default {
    props: ['favorites'],
    components: {
        FavoritesList
    }
}
</script>
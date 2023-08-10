<template>
    <div class="Album-page">
        <Hi></Hi>
        <br>
        <h3>
            <NuxtLink to="/home">Home page</NuxtLink>
            <br>
            <NuxtLink to="/about">About page</NuxtLink>
        </h3>
    </div>
</template>

<script>
import album from '../components/album.vue';

export default {
    components: { album }
}
</script>

<style scoped>
.Hi-page {
    margin-top: 30vh;
    text-align: center;
}
</style>
<template>
    <div class="Hi-page">
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
import Hi from '../components/Hi_.vue';

export default {
    components: { Hi }
}
</script>

<style scoped>
.Hi-page {
    margin-top: 30vh;
    text-align: center;
}
</style>
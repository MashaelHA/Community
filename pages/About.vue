<template>
    <div class="about-page">
        <about></about>
        <br>
        <h3>
            <NuxtLink to="/home">Home page</NuxtLink>
            <br>
            <NuxtLink to="hi">Hi page</NuxtLink>
        </h3>
    </div>
</template>
  
<script>
import about from "../components/about.vue";
export default {
    name: "App",
    components: {
        about,
    },
    data() {
        return {

        };
    },
    created() {

    },
    methods: {

    },
    computed: {

    },
};
</script>

<style scoped>
.about-page {
    margin-top: 30vh;
    text-align: center;
}
</style>
<template>
    <div class="home-page">
        <home></home>
        <br>
        <h3>
            <NuxtLink to="/about">About page</NuxtLink>
            <br>
            <NuxtLink to="hi">Hi page</NuxtLink>
        </h3>
    </div>
</template>
  
<script>
import home from "../components/home.vue";
export default {
    name: "App",
    components: {
        home,
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
.home-page {
    margin-top: 30vh;
    text-align: center;
}
</style>
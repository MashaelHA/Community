<template>
    <div class="Albums-page">
        <navbar />
        <albums />
    </div>
</template>
  
<script>
import navbar from "../components/header/navbar.vue";
import albums from "../components/albums.vue";
export default {
    name: "App",
    components: {
        navbar,
        albums,
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
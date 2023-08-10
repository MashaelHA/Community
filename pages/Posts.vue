<template>
    <div class="pots-page">
        <navbar/>
        <posts/>
    </div>
</template>
  
<script>
import navbar from "../components/header/navbar.vue";
import posts from "../components/posts.vue";
export default {
    name: "App",
    components: {
        navbar,
        posts,
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
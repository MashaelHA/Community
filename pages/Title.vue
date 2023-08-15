<template>
    <div class="title-page">
        <navbar/>
        <about/>
    </div>
</template>
  
<script>
import navbar from "../components/header/navbar.vue";
import about from "../components/about.vue";
export default {
    name: "App",
    components: {
        navbar,
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

</style>
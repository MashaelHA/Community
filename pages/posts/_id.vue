<template>
    <div class="pot-page">
        <navbar/>
        <post/>
    </div>
</template>
  
<script>
import navbar from "../../components/header/navbar.vue";
import post from "../../components/post.vue";
export default {
    name: "App",
    components: {
        navbar,
        post,
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
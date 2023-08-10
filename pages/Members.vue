<template>
    <div>
        <navbar/>
        <members/>
    </div>
</template>
  
<script>
import navbar from "../components/header/navbar.vue";
import members from "../components/members.vue";
export default {
    name: "App",
    components: {
        navbar,
        members,
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
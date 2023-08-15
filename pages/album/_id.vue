<template>
    <div class="album-page">
        <navbar/>
        <album/>
    </div>
</template>
  
<script>
import navbar from "../../components/header/navbar.vue";
import album from '../../components/album.vue';
export default {
    name: "App",
    components: {
        navbar,
        album,
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
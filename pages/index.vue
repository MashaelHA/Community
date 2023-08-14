<template>
  <div class="home-page">

    <navbar />
    <home />

  </div>
</template>

<script>
import navbar from "../components/header/navbar.vue";
import home from "../components/home.vue";
export default {
  name: 'IndexPage',
  components: {
    navbar,
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

}
</script>

<style></style>
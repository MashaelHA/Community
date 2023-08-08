<template>
  <div>
    <h1>
    <!-- Hi at index page -->
    <NuxtLink to="/home">Home page</NuxtLink>
    <br>
    <NuxtLink to="/about">About page</NuxtLink>
    <br>
    <NuxtLink to="hi">Hi page</NuxtLink>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {  }

}
</script>

<style scoped>
h1 {
  margin-top: 30vh;
  text-align: center;
}
</style>
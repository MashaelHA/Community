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


  <!-- <header>
    <nav>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
        <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
      </ul>
    </nav>
  </header> -->


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
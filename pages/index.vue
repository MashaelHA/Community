<template>
  <div>
    
    <navbar/>
    <!-- <span class="icon is-left">
      <font-awesome-icon :icon="['fas', 'envelope']" />
    </span> -->




    <!-- <h1> -->
    <!-- Hi at index page -->
    <!-- <NuxtLink to="/home">Home page</NuxtLink>
      <br>
      <NuxtLink to="/about">About page</NuxtLink>
      <br> -->
    <!-- <NuxtLink to="hi">Hi page</NuxtLink> -->
    <!-- </h1> -->


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
import navbar from "../components/header/navbar.vue";
export default {
  name: 'IndexPage',
  components: {
    navbar,
  }

}
</script>

<style>
/* @import 'bootsrtrp/dist/css/bootstrap.css'; */
/* h1 {
  margin-top: 30vh;
  text-align: center;
} */
</style>
<template>
    <div class="post">
        <div id="post" v-if="posts.length > 0">
            <h1>Posts:</h1>
            <div v-for="post in posts" :key="post.id">
                {{ post.title }}
            </div>
        </div>

        <!-- <p>Counter: {{ counter }}</p> -->
        <!--         
        <h2>Random Value: {{ randomValue }}</h2>
    <button @click="generateRandomValue">Generate Random Value</button> -->

        <!-- <h1>{{ app_title }}</h1>
        <p>Random Number: {{ randomNumber(1, 25) }}</p>
        <img :src="randomImage(1, 5, 'images', 'jpg')" alt="Random Image" /> -->
    </div>
</template>
  
<script>
import api from './api.js';
// import store from './store.js';
// import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            posts: [],
        }
    },
    // beforeRouteEnter(to, from, next) {
    //     next(async ctx => {
    //         ctx.posts = await api.get('posts');
    //     });
    // },
    computed: {
        // ...mapGetters(['app_title', 'randomNumber', 'randomImage']),

        // counter() {
        //     return this.$store.state.counter;
        // },

        // ...mapGetters(['getRandomValue']),

        // ...mapGetters(['app_title', 'randomNumber', 'randomImage']),
    },
    // methods: {
    //     ...mapActions(['generateRandomValue']),
    // },

    async fetch() {
        this.posts = await api.get('posts');
    },

    async mounted() {
        const randomNumber = this.generateRandomNumber();
        console.log(randomNumber);
        // console.log(this.$store.state.randomNumber())
        // console.log(this.$store.getters.randomNumber());


        // console.log(this.$store.state.counter)
    //     // console.log(store.getters)
    //     this.posts = await api.get('posts');
    //     // console.log(posts)

    //     // api.get('posts').then(data => this.posts = data)
    //     //     .catch(error => {
    //     //     });

    },

    methods: {
        generateRandomNumber() {
            return Math.floor(Math.random() * 25) + 1;
        }
    }
}
</script>

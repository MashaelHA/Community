<template>
    <div class="post">


        <!-- <h1>{{ appTitle }}</h1>
        <p>Random Number: {{ getRandomNumber() }}</p>
        <img :src="getRandomImage(1, 5, 'posts', 'jpg')" alt="Random Image" /> -->
        <!-- <img src="../assets/images/posts/1.jpg" alt="Random Image" /> -->

        <div id="post" v-if="posts.length > 0">
            <h1>Posts:</h1>
            <div v-for="post in posts" :key="post.id">
                {{ post.title }}
                <!-- <img :src="getRandomImage(1, 2, 'assets/images/posts', 'jpg')" alt="Random Image" /> -->
                <img :src="getRandomImage('jpg')" alt="Random Image" />

                <!-- <img :src="post.image" alt="not find"/> -->

                <!-- <img src="../assets/images/posts/25.jpg" alt="Random Image" /> -->

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
export default {
    data() {
        return {
            posts: [],
        }
    },
    // computed: {
    //     appTitle() {
    //         return 'تطبيقي الفخم';
    //     },
    // },
    async fetch() {
        this.posts = await api.get('posts');
    },
    async mounted() {
        //     this.posts = await api.get('posts');
        //     // console.log(posts)

        //     // api.get('posts').then(data => this.posts = data)
        //     //     .catch(error => {
        //     //     });


        // api.get('posts').then(data => {
        //     this.posts = data.map(x => ({
        //         id: x.id,
        //         title: x.title,
        //         image: getRandomImage(1, 5, 'posts', 'jpg'),
        //     }))
        // })
    },
    methods: {
        getRandomNumber(start, end) {
            return Math.floor(Math.random() * (end - start + 1)) + start;
        },
        // getImagePath() {
        //     return require(`@/assets/images/posts`); // Use require to get the correct path
        // },
        // getRandomImage(start, end, folder, ext) {
        //     const randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
        //     return `${folder}/${randomNumber}.${ext}`;

        //     // return `/${folder}/${randomNumber}.${ext}`;
        //     // return "@/assets/images/posts/1.jpg";
        // },
        getRandomImage(ext) {
            const randomNumber = this.getRandomNumber(1, 2);
            return require(`@/assets/images/posts/${randomNumber}.${ext}`);
        },
    }
}
</script>

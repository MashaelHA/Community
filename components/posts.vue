<template>
    <div class="post container-fluid">

        <div class="row" v-if="posts.length > 0">
            <div class="col-12 col-md-4 mb-3" v-for="post in posts" :key="post.id">
                <NuxtLink :to="'/posts/'+post.id" class="text-decoration-none">
                    <div id="post" class="card">
                    </div>
                    <!-- <h1>Posts:</h1> -->
                    <div class="card-header bg-primary text-white">
                        {{ post.title.slice(0, 50) }}
                    </div>
                    <div class="card-body p-0">
                        <div class="thumbnail" :style="{ backgroundImage: `url(${getRandomImage('jpg')})` }">
                            <!-- <img :src="getRandomImage('jpg')" alt="Random Image" class="image-fluid" /> -->
                        </div>
                        <div class="card-footer p-2 text-dark">
                            {{ post.body }}
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>


    </div>
</template>
  
<script>
import api from './api.js';
export default {
    data() {
        return {
            posts: [],
            // imgecard: ,
        }
    },
    async fetch() {
        this.posts = await api.get('posts');
    },
    methods: {
        getRandomNumber(start, end) {
            return Math.floor(Math.random() * (end - start + 1)) + start;
        },
        getRandomImage(ext) {
            const randomNumber = this.getRandomNumber(1, 25);
            return require(`@/assets/images/posts/${randomNumber}.${ext}`);
        },
    }
}
</script>

<style scoped>
/* #post {
    height: 100%;
} */
.thumbnail {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin: 10px 0; */
    color: #fff;
}

.card-footer {
    height: 110px;
}

@media only screen and (max-width: 550px) {
    .card-footer {
        height: 120px;
    }
}
</style>
<template>
    <div class="post container-fluid">

        <div class="row m-3" v-if="posts.length > 0">
            <div class="col-12 col-md-4 mb-3" v-for="post in posts" :key="post.id">
                <NuxtLink :to="'/posts/'+post.id" class="text-decoration-none">
                    <div id="post" class="card">
                    </div>
                    <div class="card-header bg-primary text-white">
                        {{ post.title.slice(0, 38) }}
                    </div>
                    <div class="card-body p-0">
                        <div class="thumbnail" :style="{ backgroundImage: `url(${getRandomImage('jpg')})` }">
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
.thumbnail {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

.card-footer {
    height: 100px;
}

@media only screen and (min-width: 766px) {
    .card-footer {
        height: 210px;
        /* background-color: rgb(255, 183, 0); */
    }
}

@media only screen and (max-width: 550px) {
    .card-footer {
        height: 150px;
        /* background-color: rgb(255, 0, 30); */
    }
}

@media only screen and (min-width: 1200px) {
    .card-footer {
        height: 120px;
        /* background-color: blue; */
    }
}

</style>
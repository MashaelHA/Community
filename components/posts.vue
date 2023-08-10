<template>
    <div class="post">
        <div id="post" v-if="posts.length > 0">
            <h1>Posts:</h1>
            <div v-for="post in posts">
                {{ post.title }}
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
    // beforeRouteEnter(to, from, next) {
    //     next(async ctx => {
    //         ctx.posts = await api.get('posts');
    //     });
    // },
    async mounted() {
        // this.posts = await api.get('posts');
        // console.log(posts)

        api.get('posts').then(data => this.posts = data)
            .catch(error => {

            });

    }
}
</script>

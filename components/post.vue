<template>
    <div>

        <div class="post m-3">
            <h4>{{ post.title }}</h4>
            <p>{{ post.body }}</p>
            <hr v-if="post.title !== undefined">
            <div v-for="comment in comments">
                <card class="mb-3" header-color="text-white" header-bg-color="bg-primary">
                    <template v-slot:header>
                        {{ comment.email }}
                    </template>

                    <template v-slot:body>
                        {{ comment.body }}
                    </template>
                </card>
            </div>
        </div>

    </div>
</template>
  
<script>
import api from './api';
import card from './card.vue';
export default {
    data() {
        return {
            post: {},
            comments: [],
        }
    },
    components: {
        card
    },
    mounted() {
        // console.log(this.post)
        const postResource = `posts/${this.$route.params.id}`;
        api.get(postResource).then(async data => {
            this.post = data;
            // console.log(this.post)
            this.comments = await api.get(`${postResource}/comments`)
        }
        )

    },
}
</script>

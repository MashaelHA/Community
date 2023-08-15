<template>
    <div class="album m-3">
        <h2 class="text-primary text-capitalize"> {{ photos.title }}</h2>
        <div class="row m-3">
            <div class="col-12 col-md-4 mb-3" v-for="photo in photos" :key="photo.id">
                <div>
                    <b-card bg-variant="light" text-variant="primary">
                        <div class="thumbnail" :style="{ backgroundImage: `url(${photos.url})`}"></div>
                    </b-card>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import api from './api';
export default {
    data() {
        return {
            Album: {},
            photos: [],
        }
    },
    mounted() {
        const postResource = `photos/${this.$route.params.id}`;
        api.get(postResource).then(async data => {
            this.photos = data;
            // console.log(this.photos)
            this.photos = await api.get(`${postResource}`)
        }
        )

    },
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
}
</style>
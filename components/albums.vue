<template>
    <div class="albums m-3">
        <div class="row m-3" v-if="albums.length > 0">
            <div class="col-12 col-md-6 mb-3" v-for="album in albums" :key="album.id">
                <NuxtLink :to="'/album/' + album.id" class="text-decoration-none">
                    <b-card bg-variant="light" text-variant="primary" class="text-capitalize" style="height: 100px;" >
                        <h4>{{ album.title }}</h4>
                    </b-card>
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
            albums: [],
        }
    },
    async fetch() {
        this.albums = await api.get('albums');
        // console.log(this.albums)
    },
};
</script>


<style scoped></style>
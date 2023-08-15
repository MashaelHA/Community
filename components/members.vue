<template>
    <div class="members">
        <div class="row">
            <div class="col-12 col-md-4 mb-3" v-for="member in members">
                <card header-color="text-primary" header-bg-color="bg-white">
                    <template v-slot:header>
                        {{ member.name }}
                    </template>

                    <template v-slot:body>
                        <img :src="member.avatar" alt="" class="img-fluid rounded-circle border d-block mx-auto">
                        <div><b>City</b>: {{ member.address.city }}</div>
                        <div><b>Phone</b>: {{ member.phone }}</div>
                    </template>

                    <template v-slot:footer>
                        @{{ member.username }}
                    </template>
                </card>
            </div>
        </div>
    </div>
</template>

<script>
import api from './api.js';
import card from './card.vue';
export default {
    components: {
        card
    },
    data() {
        return {
            members: []
        }
    },

    async mounted() {
        try {
            const data = await api.get('users');

            this.members = data.map(x => ({
                id: x.id,
                name: x.name,
                address: x.address,
                username: x.username,
                phone: x.phone,
                avatar: this.getRandomImage('png')
            }));

            // console.log(this.members);
        } catch (error) {
            console.error('Error fetching members:', error);
        }
    },
    methods: {
        getRandomNumber(start, end) {
            return Math.floor(Math.random() * (end - start + 1)) + start;
        },
        getRandomImage(ext) {
            const randomNumber = this.getRandomNumber(1, 6);
            return require(`@/assets/images/users/${randomNumber}.${ext}`);
        },
    },
}
</script>

<style scoped>
img {
    width: 200px
}
</style>
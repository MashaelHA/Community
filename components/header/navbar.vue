<template>
    <div class="Navbar shadow-lg">

        <div>
            <b-navbar type="light" variant="light" toggleable="lg">
                <b-navbar-brand href="#">
                    <img src="../../assets/icons/icon.png" alt="icon">
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav v-for="item in navbar_items" v-bind:key="item.id">
                    <b-navbar-nav>
                        <b-nav-item href="#">
                            <NuxtLink :to="item.route" class="nav-link">
                                <span class="icon is-left">
                                    <font-awesome-icon :icon="['fas', item.icon]" />
                                </span>
                                {{ item.name }}
                            </NuxtLink>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>

            </b-navbar>

        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            navbar_items: [
                {
                    id: 1,
                    name: 'Home',
                    route: '/',
                    icon: 'home'

                },
                {
                    id: 2,
                    name: 'Posts',
                    route: '/posts',
                    icon: 'newspaper'
                },
                {
                    id: 3,
                    name: 'Albums',
                    route: '/albums',
                    icon: 'images'
                },
                {
                    id: 4,
                    name: 'Members',
                    route: '/members',
                    icon: 'users'
                },
                {
                    id: 5,
                    name: 'Title',
                    route: '/title',
                    icon: 'file'
                },
            ]
        }
    }
};
</script>


<style scoped>
img {
    height: 30px;
}
</style>
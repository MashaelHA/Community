<template>
    <div class="Navbar">

        <div>
            <b-navbar toggleable="lg" type="light" variant="light">
                <b-navbar-brand href="#">
                    <img src="../../assets/icons/icon.png" alt="icon">
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav v-for="item in navbar_items" v-bind:key="item.id">
                    <b-navbar-nav>
                        <b-nav-item href="#">
                            <!-- <i class="fa fa-home"></i> -->
                            <!-- <font-awesome-icon :icon="['fab', 'vuejs']" /> -->
                            <NuxtLink :to="item.route" class="nav-link">
                                <!-- <span :class="'fa fa-{item.icon}'"></span> -->
                                <!-- <span>
                                    <font-awesome-icon :icon="['fas','envelope']"/>
                                </span>
                                <span class="icon"><font-awesome-icon :icon="['fas', 'sign-in-alt']"/></span> -->
                                <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
                                <!-- <i class="fa-brands fa-vuejs"></i> -->
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
                    icon: ''
                },
                {
                    id: 3,
                    name: 'Albums',
                    route: '/albums',
                    icon: ''
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
<template>
    <div class="home m-3">
        <h4>Post:</h4>
        <div>
            <posts/>
        </div>
        <h4>Albums:</h4>
        <div>
            <albums/>
        </div>
        <h4>Members:</h4>
        <div>
            <members/>
        </div>
        <h4>About:</h4>
        <div>
            <about/>
        </div>
    </div>
</template>

<script>
import posts from './posts.vue';
import albums from './albums.vue';
import members from './members.vue';
import about from './about.vue';
export default {
    components: {
    posts,
    albums,
    members,
    about
  },
};
</script>


<style scoped></style>
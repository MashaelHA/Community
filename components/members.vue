<template>
    <div class="members">
        Members
    </div>
</template>

<script>
import api from './api.js';
export default {
    mounted(){
        api.makeRequest('users')
    }
}
</script>


<style scoped></style>
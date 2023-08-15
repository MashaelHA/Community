<template>
    <div class="about m-3">
      <div class="row">
        <div class="col-12 col-md-4 mb-3" v-for="todo in todos" :key="todo.id">
          <card header-color="text-primary" header-bg-color="bg-white" class="text-capitalize">
            <template v-slot:header>
              {{ todo.title.slice(0, 20) }}
            </template>
  
            <template v-slot:body>
              <b>Completed:</b> {{ todo.completed ? 'Yes' : 'No' }}
            </template>
  
            <template v-slot:footer>
              <div class="state border" :class="{ 'bg-green': todo.completed, 'bg-red': !todo.completed }"></div>
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
    data() {
      return {
        todos: [],
      };
    },
    components: {
      card,
    },
    async fetch() {
      this.todos = await api.get('todos');
    },
  };
  </script>
  
<style scoped>
  .state {
    height: 50px;
    width: 100%;
    transition: background-color 0.3s;
  }
  
  .bg-green {
    background-color: green;
  }
  
  .bg-red {
    background-color: red;
  }
</style>
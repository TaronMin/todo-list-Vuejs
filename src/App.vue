<template>
  <v-app>
    <v-main>
      <Todo/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Todo from './components/Todo.vue'

export default defineComponent({
  name: 'App',

  components: {
    Todo,
  },

  data () {
    return {
      //
    }
  },
})
</script>
<style>
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
  }
  .v-container{
    padding: 10px;
  }
</style>
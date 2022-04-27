<template>
  <ul>
    <li>
      <v-container class="d-flex justify-space-between align-center">
      <v-checkbox
            v-model="todo.checked"
            color="success"
            value="asdasdasdasdasd"
            hide-details
            @click="todo.done = !todo.done"
          >
          <template v-slot:label>
            <p :class="{ isDone: todo.done }">{{ todo.description }}</p>
          </template>
      </v-checkbox>
      <v-icon style="cursor:pointer" color="red" class="cursor-pointer" icon="mdi-delete" @click="removeTodo(index)" />
      </v-container>
    </li>
  </ul>

</template> 

<script>
export default {
    props:{
        todo:Object,
        index:Number,
    },

    methods: {
        removeTodo(idx) {
            this.$emit("removeIdx", idx);
        },
    },
};
</script>

<style scoped>
ul {
  width: 100%;
  margin: 0 auto;
}
li {
  margin-top: 10px;
  background: #f1efef;
  border-bottom: 2px solid #c1c1cc;
}

.isDone {
  text-decoration: line-through;
}
</style>
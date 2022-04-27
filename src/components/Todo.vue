<template>
  <v-alert>
    <h1>Todo List</h1>
  </v-alert>
  <v-form>
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" sm="6" md="3">
          <v-text-field v-model="des" label="Add todo" outlined clearable></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <div class="d-flex justify-center mb-5">
    <v-btn color="success large" @click="addTodo(des)">Add Todo</v-btn>
  </div>
  <div class="lds-ring" v-if="showSpinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <ul v-if="!showSpinner">
    <li v-for="(todo, index) of todos" :key="index">
      <TodoItem :todo="todo" :index="index" v-on:removeIdx="removeTodo($event)" />
    </li>
  </ul>
</template>

<script setup>
import { ref, computed } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import TodoItem from "./TodoItem.vue";
import store from "../todoStore/todoStore"
let des = ref("");
let showSpinner = ref(true);
let todos = computed(() => store.getters.getTodos);

const addTodo = (todo) => {
  if (todo.trim()) {
    store.dispatch("addTodo", {
      description: todo,
      done: false,
    })
    des.value = "";
  }
};

const removeTodo = (idx) => {
  store.dispatch("removeTodo", idx);
};

onMounted(() => {
  setTimeout(() => {
    showSpinner.value = !showSpinner.value;
  }, 500);
});
</script>

<style>
ul {
  width: 30%;
  margin: 0 auto;
}

h1 {
  text-align: center;
}

.lds-ring {
  margin: 20px auto;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid green;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: green transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
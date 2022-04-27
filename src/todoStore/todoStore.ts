import { createStore } from 'vuex'

export default createStore({
    state: {
        todoList: [
            {
                description: "Lorem",
                done: false,
                checked: false,
            },
            {
                description: "Ipsum",
                done: false,
                checked: false,
            },
            {
                description: "Dolor",
                checked: false,
                done: false,
            },
            {
                description: "Ipsum",
                done: false,
                checked: false,
            },
            {
                description: "Dolor",
                done: false,
                checked: false,
            },
            {
                description: "Ipsum",
                done: false,
                checked: false,
            },
            {
                description: "Dolor",
                done: false,
                checked: false,
            },
        ]
    },

    getters:{
        getTodos(state){
            return state.todoList;
        }
    },

    actions:{
        addTodo(context,data){
            context.commit("addTodo",data);
        },

        removeTodo(context,data){
            context.commit("removeTodo",data);
        }
    },

    mutations:{
        addTodo(state,data){
            state.todoList.push(data);
        },

        removeTodo(state,dataIdx){
            state.todoList = state.todoList.filter((_, i) => i !== dataIdx);
        }
    }
})
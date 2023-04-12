import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    initTodo(state, todos) {
      state.todos = todos;
      console.log(todos);
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    updateTodo(state, todo) {
      let index = state.todos.findIndex((t) => t.id == todo.id);
      if (index > -1) {
        state.todos[index].title = todo.title;
      }
    },
    deleteTodo(state, todosId) {
      let index = state.todos.findIndex((t) => t.id == todosId);
      if (index > -1) {
        state.todos.splice(index, 1);
      }
    },
  },
  actions: {
    initTodo(context) {
      const jsonData = [
        {
          id: "1",
          title: "Flowers",
        },
        {
          id: "2",
          title: "Weeks",
        },
        {
          id: "3",
          title: "Sandy",
        },
        {
          id: "4",
          title: "Aguirre",
        },
        {
          id: "5",
          title: "Stacy",
        },
      ];
      context.commit("initTodo", jsonData);
    },
    addTodo(context, todo) {
      return context.commit("addTodo", todo);
    },
    updateTodo(context, todo) {
      return context.commit("updateTodo", todo);
    },
    deleteTodo(context, todoID) {
      return context.commit("deleteTodo", todoID);
    },
  },
  getters: {
    getTodo(state) {
      return state.todos;
    },
  },
});

export default store;

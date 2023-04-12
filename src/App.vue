<template>
  <div id="app">
    <AddTodoItem
      v-on:add-todo-event="addTodoItem"
      v-on:edit-todo-event="editTodoItemEvent"
      v-bind:editTodo="editTodo"
    />
    <div>
      <TodosList
        v-bind:todos="todos"
        v-on:del-todo-event="deleteTodoItem"
        v-on:edit-todo-event="editTodoItem"
      />
    </div>
  </div>
</template>

<script>
import TodosList from "./components/Todos";
import AddTodoItem from "./components/AddTodoItem";

export default {
  name: "App",
  components: {
    TodosList,
    AddTodoItem,
  },
  data() {
    return {
      editTodo: {
        id: "",
        title: "",
      },
    };
  },
  computed: {
    todos() {
      return this.$store.getters.getTodo;
    },
  },
  methods: {
    addTodoItem(newTodo) {
      this.$store.dispatch("addTodo", newTodo);
    },
    deleteTodoItem(id) {
      this.$store.dispatch("deleteTodo", id);
    },
    editTodoItem(id) {
      //find the index of the todo's id
      let objIndex = this.todos.findIndex((obj) => obj.id === id);
      this.editTodo.title = this.todos[objIndex].title;
      this.editTodo.id = id;
      this.$store.dispatch("updateTodo", this.editTodo);
    },
    editTodoItemEvent(todoItem) {
      this.$store.dispatch("updateTodo", todoItem);
    },
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
      deep: true,
    },
  },
  created() {
    this.$store.dispatch("initTodo");
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

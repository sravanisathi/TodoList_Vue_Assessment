<template>
    <div>
        <h2>My Todos List</h2>
        <div v-bind:key="todo.id" v-for="todo in todos">
            <TodoItem v-bind:todo="todo" v-on:del-todo-item="delTodoMethod" v-on:edit-todo-item="editTodoMethod" />
        </div>
        <div v-if="!todos.length">
            <p>No todos to Read!!</p>
        </div>
    </div>
</template>

<script>
    import TodoItem from "./TodoItem";
    export default {
        name: "TodosList",
        props: ["todos"],
        components: {
            TodoItem
        },
        methods: {
            delTodoMethod(id){
                //send to parent
                this.$emit('del-todo-event', id);
            },
            editTodoMethod(id){
                //send to parent (App.vue)
                this.$emit('edit-todo-event', id)
            }
        }
    }
</script>

<style scoped>

</style>

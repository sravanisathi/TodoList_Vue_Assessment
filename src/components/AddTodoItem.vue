<template>
    <div>
        <form @submit="addTodo">
            <input type="text" name="title" v-model="title" placeholder="Add Todo">
                <input type="submit" value="Submit" class="btn btn-info">
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddTodoItem",
        props: ['editTodo'],
        data () {
            return {
                title: '',
                id: '',
                edit: false
            }
        },
        methods: {
            addTodo(e){
                e.preventDefault();
                if (this.edit === false){
                    // add new Todo
                    const newTodo = {
                        id: Math.floor(Math.random() * 100),
                        title: this.title
                        
                    };
                    if (newTodo.title !== ''){
                        this.$emit('add-todo-event', newTodo);
                    }
                    this.title = ''
                }else{
                    //edit todo
                    const todoItem = {
                        title: this.title,
                        id: this.id
                    };
                    //send to parent (App.vue)
                    this.$emit('edit-todo-event', todoItem);
                    // clear input field
                    this.title = '';
                    this.edit = false;
                }
            }
        },
        watch: {
            editTodo: {
                handler() {
                    this.title = this.editTodo.title;
                    this.id = this.editTodo.id;
                    this.edit = true
                },
                deep: true
            },
            title:{
                handler(){
                    if(this.title === ''){
                        this.edit = false;
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>

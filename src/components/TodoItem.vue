<template>
    <div class="float-left">
        <span class="float-right">
            {{todo.title}}
            <i class="glyphicon glyphicon-pencil" @click="$emit('edit-todo-item', todo.id)">edit</i>
            <i class="glyphicon glyphicon-trash" @click="deleteTodo(todo.id)" >delete</i>
    
        </span>
        <ConfirmationModal v-on:cancel-todo-del="saveCancelItem"
      v-on:save-todo-del="saveCancelItem" v-bind:showModal="isOpen"/>
    </div>
</template>

<script>
import ConfirmationModal from './ConfirmationModal'
    export default {
        name: "TodoItem",
        props: ["todo"],
        components:{
            ConfirmationModal   
        },
        data() {
    return {
      isOpen: false,
    };
  },
  methods:{
    deleteTodo(todo){
        this.$emit('del-todo-item', todo.id);
        this.isOpen = true;
    },
    saveCancelItem(){
        this.isOpen = false;  
    }
  }
    }
</script>

<style scoped>
    .glyphicon-pencil, .glyphicon-trash{
        font-size: 15px;
        padding: 4px;
    }
</style>

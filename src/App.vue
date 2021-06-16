<template>
  <div id="app">
    <h1>Vue-Do</h1>

    <AddTodo v-bind:todos="todos" @addTodo="addTodo($event)" />

    <Todos v-bind:todos="todos" @deleteTodo="deleteTodo($event)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo.vue';

@Component({
  components: {
    Todos,
    AddTodo,
  },
})
export default class App extends Vue {
  todos: { id: number; text: string; finished: boolean }[] = [
    { id: 1, text: 'First item', finished: false },
    { id: 2, text: 'Second item', finished: true },
  ];

  deleteTodo(todo: { id: number; text: string; finished: boolean }): void {
    this.todos = this.todos.filter((t) => t !== todo);
  }

  addTodo(text: string): void {
    console.log('yes');

    this.todos.push({ id: this.todos.length + 1, text, finished: false });
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');

#app {
  font-family: 'Open Sans', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  margin-top: 60px;
  font-size: 18px;
  line-height: 1.6;
}

h1 {
  text-align: center;
  font-size: 54px;
  font-weight: 300;
}

h2 {
  font-weight: 400;
  margin-top: 60px;
}

#app {
  max-width: 400px;
  margin: 0 auto;
}

.add-todo div {
  display: flex;
  justify-content: stretch;
}

.add-todo div input {
  flex-grow: 1;
}

input {
  font-size: inherit;
  font-family: inherit;
  padding: 8px;
  border: 1px solid #888;
  border-radius: 5px;
  margin-right: 10px;
}

button {
  font-size: inherit;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid #888;
  border-radius: 5px;
  padding: 8px;
}

.todoItem {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bbb;
  padding: 10px 0;
}

.todoItem input {
  margin: 0px 10px;
}

.todoItem button {
  background-color: transparent;
  border: none;
  color: #888;
  padding: 0 10px;
}

.checked span {
  text-decoration: line-through;
  color: #aaa;
}
</style>

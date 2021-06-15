<template>
  <div id="app">
    <h1>Vue-Do</h1>

    <div id="content">
      <div id="add-todo">
        <h2>Add Todo</h2>
        <div>
          <input v-on:keyup.enter="addTodo" type="text" v-model="newTodoText" />
          <button v-on:click="addTodo">Add</button>
        </div>
      </div>

      <div class="todos">
        <h2>Your Todos</h2>

        <div
          v-bind:class="{ todoItem: true, checked: todo.finished }"
          v-for="todo in todos"
          v-bind:key="todo.id"
        >
          <div>
            <input type="checkbox" v-model="todo.finished" />
            <span>{{ todo.text }}</span>
          </div>

          <button @click="deleteTodo(todo.id)">X</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Todos from './components/Todos.vue';

@Component({
  components: {
    Todos,
  },
})
export default class App extends Vue {
  newTodoText = '';

  todos: { id: number; text: string; finished: boolean }[] = [
    { id: 1, text: 'First item', finished: false },
    { id: 2, text: 'Second item', finished: true },
  ];

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  addTodo(): void {
    this.todos.push({ id: this.todos.length + 1, text: this.newTodoText, finished: false });
    this.newTodoText = '';
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

#content {
  max-width: 400px;
  margin: 0 auto;
}

#add-todo div {
  display: flex;
  justify-content: stretch;
}

#add-todo div input {
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

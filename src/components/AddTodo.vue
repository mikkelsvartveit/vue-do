<template>
  <div class="add-todo">
    <h2>Add Todo</h2>
    <div>
      <input v-on:keyup.enter="addTodo" type="text" v-model="newTodoText" />
      <button v-on:click="addTodo">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Todos extends Vue {
  newTodoText = '';

  get todos(): { id: number; text: string; finished: boolean }[] {
    return this.$store.state.todos;
  }

  addTodo(): void {
    this.$store.dispatch('addTodo', this.newTodoText);
    this.newTodoText = '';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

<template>
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
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Todos extends Vue {
  @Prop()
  private todos!: { id: number; text: string; finished: boolean }[];

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

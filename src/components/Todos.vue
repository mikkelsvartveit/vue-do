<template>
  <div class="todos">
    <h2>Your Todos</h2>

    <div style="text-align: center; margin-bottom: 20px">
      <p>
        You have <b>{{ count }}</b> todo items.
      </p>
      <button @click="$store.dispatch('checkAllTodos', true)">Check all</button>
      <button @click="$store.dispatch('checkAllTodos', false)">Uncheck all</button>
    </div>

    <div
      v-bind:class="{ todoItem: true, checked: todo.finished }"
      v-for="todo in todos"
      v-bind:key="todo.id"
    >
      <div>
        <input type="checkbox" v-model="todo.finished" />
        <span>{{ todo.text }}</span>
      </div>

      <button @click="$store.dispatch('deleteTodo', todo.id)">X</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

type todoType = { id: number; text: string; finished: boolean };

@Component
export default class Todos extends Vue {
  get todos(): todoType[] {
    return this.$store.state.todos;
  }

  get count(): number {
    return this.$store.getters.getCount;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

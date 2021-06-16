import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

type todoType = { id: number; text: string; finished: boolean };
type stateType = { todos: todoType[] };

export default new Vuex.Store({
  strict: true,

  state: {
    todos: [
      { id: 1, text: 'First item', finished: false },
      { id: 2, text: 'Second item', finished: true },
    ],
  },

  getters: {
    getCount: (state: { todos: todoType[] }) => state.todos.length,
  },

  mutations: {
    addTodo: (state, text: string) => {
      state.todos.push({ id: state.todos.length + 1, text, finished: false });
    },

    deleteTodo: (state, id: number) => {
      state.todos = state.todos.filter((todo: todoType) => id !== todo.id);
    },

    checkAllTodos: (state: stateType, check: boolean) => {
      state.todos = state.todos.map((todo) => ({ ...todo, finished: check }));
    },
  },
});

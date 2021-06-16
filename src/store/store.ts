import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.devtools = true;

type todoType = { id: number; text: string; finished: boolean };

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

    checkAllTodos: (state, check: boolean) => {
      state.todos = state.todos.map((todo) => ({ ...todo, finished: check }));
    },
  },

  actions: {
    addTodo: (context, text: string) => {
      context.commit('addTodo', text);
    },

    deleteTodo: (context, id: number) => {
      context.commit('deleteTodo', id);
    },

    checkAllTodos: (context, check: boolean) => {
      context.commit('checkAllTodos', check);
    },
  },
});

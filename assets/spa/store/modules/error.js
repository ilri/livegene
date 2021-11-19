import { v4 as uuidv4 } from 'uuid';

export default {
  namespaced: true,
  state: {
    errors: [],
  },
  mutations: {
    PUSH(state, error) {
      state.errors.push({
        id: uuidv4(),
        ...error,
      });
    },
    DELETE(state, errorToRemove) {
      state.errors = state.errors.filter(
        (error) => error.id !== errorToRemove.id,
      );
    },
  },
  getters: {
    getErrorsForModule: (state) => (module) => state.errors.filter(
      (error) => error.module === module,
    ),
  },
  actions: {
    addAction(context, error) {
      context.commit('PUSH', error);
    },
    removeAction(context, errorToRemove) {
      context.commit('DELETE', errorToRemove);
    },
  },
};

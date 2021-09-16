import { v4 as uuidv4 } from 'uuid';

export default {
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
  actions: {
    add(context, error) {
      context.commit('PUSH', error);
    },
    remove(context, errorToRemove) {
      context.commit('DELETE', errorToRemove);
    },
  },
};

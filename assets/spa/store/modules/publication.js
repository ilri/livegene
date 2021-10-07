import publications from '../../data/publications';

export default {
  state: {
    publications,
  },
  getters: {
    getPublicationById: (state) => (id) => state.publications.find(
      (publication) => publication.id === id,
    ),
  },
};

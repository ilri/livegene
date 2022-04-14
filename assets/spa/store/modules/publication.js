import PublicationService from '../../services/PublicationService';
import publicationTypeMixin from '../../mixins/publicationTypeMixin';

export default {
  namespaced: true,
  state: {
    pagination: {
      perPage: 25,
      currentPage: 1,
    },
    searchFilter: {
      type: null,
      fullText: '',
    },
    publications: [],
    filteredPublications: [],
    publicationTypes: [
      'journal',
      'book',
      'generic',
      'book_section',
      'conference_proceedings',
      'working_paper',
      'report',
      'web_page',
      'thesis',
      'magazine_article',
      'statute',
      'patent',
      'newspaper_article',
      'computer_program',
      'hearing',
      'television_broadcast',
      'encyclopedia_article',
      'case',
      'film',
      'bill',
    ],
    citations: '',
    citation: '',
    citationError: {
      flag: false,
      body: {
        data: null,
      },
    },
  },
  mutations: {
    SET_PUBLICATIONS(state, publications) {
      state.publications = publications;
      state.filteredPublications = publications;
    },
    SET_CITATIONS(state, citations) {
      state.citations = citations;
    },
    SET_CITATION(state, citation) {
      state.citation = citation;
    },
    SET_CITATION_ERROR(state, error) {
      state.citationError = error;
    },
    UPDATE_SEARCH_FILTER_TYPE(state, value) {
      state.searchFilter.type = value;
    },
    UPDATE_SEARCH_FILTER_FULL_TEXT(state, value) {
      state.searchFilter.fullText = value;
    },
    UPDATE_FILTERED_PUBLICATIONS(state) {
      state.filteredPublications = state.publications
        .filter((publication) => (
          state.searchFilter.type ? publication.type === state.searchFilter.type : true
        ))
        .filter(({
          title, abstract, source, authors, keywords, tags,
        }) => {
          const authorsFullNames = authors ? authors.map((author) => JSON.stringify(Object.values(author))) : '';
          const allOtherValues = JSON.stringify(Object.values({
            title, abstract, source, keywords, tags,
          }));

          return (authorsFullNames + allOtherValues)
            .replaceAll('null', '')
            .toLowerCase()
            .includes(state.searchFilter.fullText.toLowerCase())
          ;
        })
      ;
    },
    UPDATE_PAGINATION_CURRENT_PAGE(state, value) {
      state.pagination.currentPage = value;
    },
  },
  getters: {
    getPublicationTypes: (state) => state.publicationTypes.map((el) => (
      { value: el, text: el.split('_').map((childEl) => childEl[0].toUpperCase() + childEl.substring(1)).join(' ') }
    )),
    getAvailablePublicationTypes: (state) => {
      const types = new Set();
      state.publications.forEach((el) => types.add(el.type));
      const result = [];
      types.forEach((el) => {
        result.push({
          value: el,
          text: publicationTypeMixin.methods.sanitizePublicationType(el),
        });
      });
      result.sort((a, b) => {
        if (a.value < b.value) {
          return -1;
        }
        if (a.value > b.value) {
          return 1;
        }
        return 0;
      });
      return result;
    },
    getPublicationById: (state) => (id) => state.publications.find(
      (publication) => publication.id === id,
    ),
  },
  actions: {
    getPublicationsAction(context) {
      PublicationService.getPublications()
        .then((response) => {
          const publications = response.data.sort((a, b) => {
            const dateA = new Date(a.year || 1977, a.month - 1 || 0, a.day || 1);
            const dateB = new Date(b.year || 1977, b.month - 1 || 0, b.day || 1);
            return dateB.getTime() - dateA.getTime();
          });
          context.commit('SET_PUBLICATIONS', publications);
        })
        .catch((error) => {
          context.dispatch(
            'error/addAction',
            {
              ...error.response,
              message: `
                There was an error fetching the publications.\n
                ${error.response.data.message}
              `,
              module: 'mendeley',
            },
            { root: true },
          );
        })
      ;
    },
    getPublicationsBibAction(context) {
      PublicationService.getPublicationsBib()
        .then((response) => {
          context.commit('SET_CITATIONS', response.data);
        })
        .catch((error) => {
          context.dispatch(
            'error/addAction',
            {
              ...error.response,
              message: `
                There was an error fetching the citations.\n
                ${error.response.data.message}
              `,
              module: 'mendeley',
            },
            { root: true },
          );
        })
      ;
    },
    getPublicationBibAction(context, id) {
      PublicationService.getPublicationBib(id)
        .then((response) => {
          context.commit('SET_CITATION', response.data);
        })
        .catch((error) => {
          context.commit('SET_CITATION_ERROR', {
            flag: true,
            body: error.response,
          });
        })
      ;
    },
    resetCitationAction(context) {
      context.commit('SET_CITATION', '');
      context.commit('SET_CITATION_ERROR', { flag: false, body: { data: null } });
    },
    updateFilteredPublicationsAction(context) {
      context.commit('UPDATE_FILTERED_PUBLICATIONS');
    },
    updateSearchFilterTypeAction(context, value) {
      context.commit('UPDATE_SEARCH_FILTER_TYPE', value);
    },
    updateSearchFilterFullTextAction(context, value) {
      context.commit('UPDATE_SEARCH_FILTER_FULL_TEXT', value);
    },
    updatePaginationCurrentPageAction(context, value) {
      context.commit('UPDATE_PAGINATION_CURRENT_PAGE', value);
    },
  },
};

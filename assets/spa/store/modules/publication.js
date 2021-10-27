import publications from '../../data/publications';
import PublicationService from '../../services/PublicationService';

export default {
  state: {
    publications,
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
    filter: {
      type: null,
    },
    citation: '',
  },
  mutations: {
    SET_CITATION(state, citation) {
      state.citation = citation;
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
          text: el.split('_').map((childEl) => childEl[0].toUpperCase() + childEl.substring(1)).join(' '),
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
    getFullTextForPublication: (state) => (id) => state.publications.filter(
      (el) => el.id === id,
    ).map((el) => {
      let authors;
      if (el.authors) {
        authors = el.authors.map((author) => {
          const fullName = [];
          if (author.first_name) {
            fullName.push(author.first_name);
          }
          fullName.push(author.last_name);
          return fullName.join(' ');
        });
      } else {
        authors = '';
      }
      const keywords = el.keywords ? el.keywords.join(' ') : '';
      const tags = el.tags ? el.tags.join(' ') : '';
      return [
        authors, el.title, el.abstract, keywords, tags, el.source,
      ].join(' ').toLowerCase();
    })[0],
    getPublicationById: (state) => (id) => state.publications.find(
      (publication) => publication.id === id,
    ),
    searchPublicationsByType: (state) => (type) => state.publications.filter(
      (publication) => publication.type === type,
    ),
    searchPublicationsFullText: (state, getters) => (searchTerm) => state.publications.filter(
      (el) => getters.getFullTextForPublication(el.id).includes(searchTerm),
    ),
  },
  actions: {
    getPublicationBibAction(context, id) {
      console.log('PublicationBibAction dispatched');
      const url = `/api/publications/${id}/bib`;
      const config = {
        headers: {
          Accept: 'text/plain',
        },
      };
      PublicationService.getPublicationBib(url, config)
        .then((response) => {
          context.commit('SET_CITATION', response);
        })
      ;
    },
  },
};

import publications from '../../data/publications';

export default {
  state: {
    publications,
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
  },
  getters: {
    getPublicationById: (state) => (id) => state.publications.find(
      (publication) => publication.id === id,
    ),
    searchPublicationsByType: (state) => (type) => state.publications.filter(
      (publication) => publication.type === type,
    ),
  },
};

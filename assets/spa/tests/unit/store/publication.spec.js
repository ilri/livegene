import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { cloneDeep } from 'lodash';
import flushPromises from 'flush-promises';

import PublicationService from '../../../services/PublicationService';
import PublicationModule from '../../../store/modules/publication';

jest.mock('../../../services/PublicationService');

const localVue = createLocalVue();
localVue.use(Vuex);

function getThreeRandomASCIICodes() {
  const codes = [];
  for (let i = 0; i < 3; i++) {
    codes.push(Math.floor(Math.random() * (90 - 65 + 1) + 65));
  }
  return codes;
}

// generate the mock publications
const response = {};
response.data = new Array(20).fill().map((v, i) => ({
  id: i + 1,
  title: String.fromCharCode(...getThreeRandomASCIICodes()),
  type: ['journal', 'book', 'report'][Math.floor(Math.random() * 3)],
}));

describe('publication store module', () => {
  test('getPublicationById should retrieve one publication', () => {
    expect.assertions(2);
    const publicationModule = cloneDeep(PublicationModule);
    const store = new Vuex.Store(publicationModule);
    store.state.publications = response.data;
    const publication = store.getters.getPublicationById(1);
    expect(publication.id).toEqual(1);
    expect(publication).toEqual(response.data[0]);
  });

  test('getAvailablePublicationTypes should retrieve the publication types', () => {
    expect.assertions(2);
    const publicationModule = cloneDeep(PublicationModule);
    const store = new Vuex.Store(publicationModule);
    store.state.publications = response.data;
    expect(store.getters.getAvailablePublicationTypes.length).toBeLessThanOrEqual(3);
    expect(store.getters.getAvailablePublicationTypes).toEqual(
      expect.arrayContaining([{ value: 'journal', text: 'Journal' }]),
    );
  });

  test('getPublicationsAction should populate the publications and filteredPublications', async () => {
    expect.assertions(4);
    const publicationModule = cloneDeep(PublicationModule);
    const store = new Vuex.Store(publicationModule);
    expect(store.state.publications.length).toEqual(0);
    expect(store.state.filteredPublications.length).toEqual(0);
    PublicationService.getPublications.mockResolvedValueOnce(Promise.resolve(
      response,
    ));
    store.dispatch('getPublicationsAction');
    await flushPromises();
    expect(store.state.publications.length).toEqual(20);
    expect(store.state.filteredPublications.length).toEqual(20);
  });

  test('getPublicationsBibAction should populate the citations', async () => {
    expect.assertions(2);
    const publicationModule = cloneDeep(PublicationModule);
    const store = new Vuex.Store(publicationModule);
    expect(store.state.citations).toEqual('');
    const bibtex = {};
    bibtex.data = 'Test citations';
    PublicationService.getPublicationsBib.mockResolvedValueOnce(Promise.resolve(
      bibtex,
    ));
    store.dispatch('getPublicationsBibAction');
    await flushPromises();
    expect(store.state.citations).toEqual('Test citations');
  });

  test('getPublicationBibAction should populate the citation', async () => {
    expect.assertions(2);
    const publicationModule = cloneDeep(PublicationModule);
    const store = new Vuex.Store(publicationModule);
    expect(store.state.citation).toEqual('');
    const bibtex = {};
    bibtex.data = 'Test citation';
    PublicationService.getPublicationBib.mockResolvedValueOnce(Promise.resolve(
      bibtex,
    ));
    store.dispatch('getPublicationBibAction');
    await flushPromises();
    expect(store.state.citation).toEqual('Test citation');
  });

  test('resetCitationAction should reset the citation to empty string', () => {
    expect.assertions(3);
    const publicationModule = cloneDeep(PublicationModule);
    const store = new Vuex.Store(publicationModule);
    expect(store.state.citation).toEqual('');
    store.state.citation = 'Foo';
    store.state.citationError.flag = true;
    store.dispatch('resetCitationAction');
    expect(store.state.citation).toEqual('');
    expect(store.state.citationError.flag).toBe(false);
  });

  test('updateSearchFilterTypeAction should populate the searchFilter.type', () => {
    expect.assertions(2);
    const publicationModule = cloneDeep(PublicationModule);
    const store = new Vuex.Store(publicationModule);
    expect(store.state.searchFilter.type).toBe(null);
    store.dispatch('updateSearchFilterTypeAction', 'journal');
    expect(store.state.searchFilter.type).toEqual('journal');
  });

  test('updateSearchFilterFullTextAction should populate the searchFilter.fullText', () => {
    expect.assertions(2);
    const publicationModule = cloneDeep(PublicationModule);
    const store = new Vuex.Store(publicationModule);
    expect(store.state.searchFilter.fullText).toEqual('');
    store.dispatch('updateSearchFilterFullTextAction', 'cattle');
    expect(store.state.searchFilter.fullText).toEqual('cattle');
  });

  test('updatePaginationCurrentPageAction should populate the pagination.currentPage', () => {
    expect.assertions(2);
    const publicationModule = cloneDeep(PublicationModule);
    const store = new Vuex.Store(publicationModule);
    expect(store.state.pagination.currentPage).toEqual(1);
    store.dispatch('updatePaginationCurrentPageAction', 2);
    expect(store.state.pagination.currentPage).toEqual(2);
  });
});

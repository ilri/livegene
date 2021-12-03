<template>
  <BaseView :module="'mendeley'">
    <template slot="header">
      <b-nav
        small
        align="center"
      >
        <b-nav-text>Publications</b-nav-text>
      </b-nav>
    </template>
    <template slot="graphic">
      <b-col
        cols="12"
        lg="10"
        class="px-0"
      >
        <div
          v-b-tooltip.interactive
          title="Click on a word to perform a full text search."
        >
          <word-cloud
            :data="words"
            :width="cloudWidth"
            :height="cloudHeight"
            :rotate="wordcloud.rotate"
            :font-size-mapper="wordcloud.fontSizeMapper"
            :on-word-click="wordcloud.onWordClick"
          />
        </div>
        <b-alert
          show
          class="text-secondary"
        >
          There are <b-badge>{{ publicationsCount }}</b-badge> publications in total.
        </b-alert>
        <div
          class="accordion"
          role="tablist"
        >
          <b-card
            no-body
            class="mb-1"
          >
            <b-card-header
              header-tag="header"
              class="p-1"
              role="tab"
            >
              <b-button
                v-b-toggle.accordion-1
                block
                variant="info"
              >
                Get citations <b-icon
                  icon="box-arrow-down"
                  aria-hidden="true"
                />
              </b-button>
            </b-card-header>
            <b-collapse
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  You can get all citations in BibTeX format by clicking the button below.
                </b-card-text>
                <b-card-text>
                  <b-button
                    id="copyButton"
                    variant="outline-secondary"
                    class="text-black-50"
                    @click="copyCitations"
                  >
                    <b-icon
                      icon="files"
                      aria-hidden="true"
                    />
                    <span id="copyText">Copy all citations to clipboard</span>
                  </b-button>
                </b-card-text>
                <b-card-text>
                  You can use
                  <a
                    href="https://bibtex.online/"
                    target="_blank"
                  >
                    BibTeX Online Converter
                  </a>
                  to convert the citations in another format.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
        <b-pagination
          v-model="paginationCurrentPage"
          :total-rows="publicationsCount"
          :per-page="paginationPerPage"
          aria-controls="my-table"
          align="center"
        />
        <b-container class="mb-3">
          <b-form-row>
            <b-col md="5">
              <b-input-group
                prepend="full text search"
              >
                <b-form-input
                  v-model="searchFilterFullText"
                  placeholder="-- please enter a search term --"
                />
              </b-input-group>
            </b-col>
            <b-col md="5">
              <b-input-group prepend="type">
                <b-form-select
                  v-model="searchFilterType"
                  :options="getAvailablePublicationTypes"
                >
                  <template #first>
                    <b-form-select-option :value="null">
                      -- please select a publication type --
                    </b-form-select-option>
                  </template>
                </b-form-select>
              </b-input-group>
            </b-col>
            <b-col md="2">
              <b-button
                variant="outline-secondary"
                @click="resetSearchForm"
              >
                RESET
              </b-button>
            </b-col>
          </b-form-row>
        </b-container>
        <b-table
          id="my-table"
          striped
          hover
          :per-page="paginationPerPage"
          :current-page="paginationCurrentPage"
          :items="publications"
          primary-key="id"
          :fields="fields"
        >
          <template #cell(id)="data">
            <router-link
              :to="{
                name: 'publication',
                params: { id: data.value },
              }"
            >
              {{ (paginationCurrentPage - 1) * paginationPerPage + data.index + 1 }}
            </router-link>
          </template>
          <template #cell(authors)="data">
            <publication-authors :authors="data.value" />
          </template>
          <template #cell(tags)="data">
            <publication-tag
              v-for="tag in data.value"
              :key="tag"
              :tag="tag"
            />
          </template>
          <template #cell(websites)="data">
            <publication-link
              v-for="(website, index) in data.value"
              :key="index"
              :link="website"
            />
          </template>
          <template #cell(source)="data">
            <publication-source :publication="data.item" />
          </template>
        </b-table>
      </b-col>
    </template>
  </BaseView>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import _ from 'lodash';
import BaseView from '../components/BaseView';
import PublicationAuthors from '../components/PublicationAuthors';
import PublicationTag from '../components/PublicationTag';
import PublicationLink from '../components/PublicationLink';
import PublicationSource from '../components/PublicationSource';
import WordCloud from '../components/WordCloud';
import stopwords from '../data/stopwords';
import publicationTypeMixin from '../mixins/publicationTypeMixin';

export default {
  name: 'PublicationList',
  components: {
    BaseView,
    PublicationAuthors,
    PublicationTag,
    PublicationLink,
    PublicationSource,
    WordCloud,
  },
  mixins: [publicationTypeMixin],
  data() {
    return {
      fields: [
        {
          key: 'id',
          label: '#',
          thStyle: {
            width: '5%',
          },
        },
        {
          key: 'authors',
          sortable: true,
          thStyle: {
            width: '15%',
          },
        },
        {
          key: 'title',
          sortable: true,
          thStyle: {
            width: '30%',
          },
        },
        {
          key: 'source',
          thStyle: {
            width: '20%',
          },
        },
        {
          key: 'type',
          sortable: true,
          thStyle: '10%',
          formatter: this.sanitizePublicationType,
        },
        {
          key: 'tags',
          thStyle: {
            width: '10%',
          },
        },
        {
          key: 'websites',
          label: 'Links',
          thStyle: {
            width: '10%',
          },
        },
      ],
      wordcloud: {
        stopwords,
        fontSizeMapper: (word) => word.value / 3,
        onWordClick: (word) => {
          this.$store.dispatch(
            'publication/updateSearchFilterFullTextAction',
            word.text,
          );
          this.$store.dispatch(
            'publication/updateFilteredPublicationsAction',
          );
        },
        // use bitwise NOT operator to generate a number between -2 and 2
        // in order to create any of the following rotation angles:
        // -90, -45, 0, 45, 90
        // eslint-disable-next-line no-bitwise
        rotate: () => (~~(Math.random() * 5) - 2) * 45,
      },
    };
  },
  computed: {
    ...mapState({
      paginationPerPage: (state) => state.publication.pagination.perPage,
      publications: (state) => state.publication.publications,
      filteredPublications: (state) => state.publication.filteredPublications,
      publicationTypes: (state) => state.publication.publicationTypes,
      citations: (state) => state.publication.citations,
    }),
    ...mapGetters('publication', [
      'getAvailablePublicationTypes',
    ]),
    paginationCurrentPage: {
      get() {
        return this.$store.state.publication.pagination.currentPage;
      },
      set(value) {
        this.$store.dispatch('publication/updatePaginationCurrentPageAction', value);
      },
    },
    searchFilterType: {
      get() {
        return this.$store.state.publication.searchFilter.type;
      },
      set(value) {
        this.$store.dispatch(
          'publication/updateSearchFilterTypeAction',
          value,
        );
        this.$store.dispatch(
          'publication/updateFilteredPublicationsAction',
        );
      },
    },
    searchFilterFullText: {
      get() {
        return this.$store.state.publication.searchFilter.fullText;
      },
      // eslint-disable-next-line func-names
      set: _.debounce(function (value) {
        this.$store.dispatch(
          'publication/updateSearchFilterFullTextAction',
          value,
        );
        this.$store.dispatch(
          'publication/updateFilteredPublicationsAction',
        );
      }, 500),
    },
    publicationsCount() {
      return this.filteredPublications.length;
    },
    cloudWidth() {
      return window.innerWidth >= 992 ? (window.innerWidth / 12) * 10 : window.innerWidth;
    },
    cloudHeight() {
      return this.cloudWidth / 4;
    },
    words() {
      let text = this.publications
      // concatenate title and abstract for each publication
        .map((el) => (el.abstract ? `${el.title} ${el.abstract}` : el.title))
      // join everything together in one big string
        .join(' ')
      // clean from all non-letter characters, but keep white-space, dash (-) and single quote (')
        .replace(/[^a-zA-Z\s\-']/g, ' ')
      // make everything lowercase
        .toLowerCase()
      ;

      // remove stopwords from text
      text = this.wordcloud.stopwords.reduce(
        (acc, cur) => acc.replaceAll(new RegExp(`\\b${cur}\\b`, 'g'), ''),
        text,
      );

      text = text
      // create an array by splitting all words using white-space as separator
        .split(/\s+/)
      // trim non-letter characters at beginning and end of words
        .map((el) => el.replace(/^[^a-z]+|[^a-z]+$/, ''))
      // remove all words with 2 or less letters
        .filter((el) => el.length > 2)
      // count the occurrences of all words
        .reduce((acc, cur) => {
          acc[cur] = (acc[cur] || 0) + 1;
          return acc;
        }, Object.create(null))
      ;

      // return all words with more than 3 occurrences
      return Object.keys(text).map((el) => (text[el] > 3 ? { text: el, value: text[el] } : {}));
    },
  },
  methods: {
    resetSearchForm() {
      this.$store.dispatch('publication/updateSearchFilterFullTextAction', '');
      this.$store.dispatch('publication/updateSearchFilterTypeAction', null);
      this.$store.dispatch('publication/updateFilteredPublicationsAction');
      this.$store.dispatch('publication/updatePaginationCurrentPageAction', 1);
    },
    copyCitations() {
      navigator.clipboard.writeText(this.citations);
      const buttonText = document.getElementById('copyText');
      const oldValue = buttonText.innerText;
      buttonText.innerText = 'All citations copied to clipboard!';
      setTimeout(() => {
        buttonText.innerText = oldValue;
      }, 3000);
    },
  },
};
</script>

<style scoped>
</style>

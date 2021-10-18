<template>
  <BaseView>
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
        <div>
          <cloud
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
        <b-pagination
          v-model="pagination.currentPage"
          :total-rows="publicationsCount"
          :per-page="pagination.perPage"
          aria-controls="my-table"
          align="center"
        />
        <b-container class="mb-3">
          <b-form-row>
            <b-col md="6">
              <b-input-group
                prepend="full text search"
              >
                <b-form-input
                  v-model="searchTerm"
                  placeholder="-- please enter a search term --"
                />
              </b-input-group>
            </b-col>
            <b-col md="6">
              <b-input-group prepend="type">
                <b-form-select
                  v-model="selectedPublicationType"
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
          </b-form-row>
        </b-container>
        <p> {{ searchTerm }}</p>
        <b-table
          id="my-table"
          striped
          hover
          :per-page="25"
          :current-page="pagination.currentPage"
          :items="filteredPublications"
          primary-key="id"
          :fields="fields"
        >
          <template #cell(id)="data">
            <router-link :to="{ name: 'publication', params: { id: data.value } }">
              {{ (pagination.currentPage - 1) * pagination.perPage + data.index + 1 }}
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
import Cloud from 'vue-d3-cloud';
import { mapState, mapGetters } from 'vuex';
import BaseView from '../components/BaseView';
import PublicationAuthors from '../components/PublicationAuthors';
import PublicationTag from '../components/PublicationTag';
import PublicationLink from '../components/PublicationLink';
import PublicationSource from '../components/PublicationSource';

export default {
  name: 'PublicationList',
  components: {
    Cloud,
    BaseView,
    PublicationAuthors,
    PublicationTag,
    PublicationLink,
    PublicationSource,
  },
  data() {
    return {
      pagination: {
        perPage: 25,
        currentPage: 1,
      },
      selectedPublicationType: null,
      searchTerm: '',
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
          formatter: (value) => value.split('_').map((el) => el[0].toUpperCase() + el.substring(1)).join(' '),
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
        fontSizeMapper: (word) => Math.log2(word.value) * 5,
        onWordClick: (word) => { console.log(word); },
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
      publications: (state) => state.publication.publications,
      // filteredPublications: (state) => state.publication.filteredPublications,
      publicationTypes: (state) => state.publication.publicationTypes,
    }),
    ...mapGetters([
      'getPublicationTypes',
      'getAvailablePublicationTypes',
      'searchPublicationsByType',
      'searchPublicationsFullText',
    ]),
    filteredPublications() {
      return this.selectedPublicationType
        ? this.searchPublicationsByType(this.selectedPublicationType)
        : this.publications
      ;
    },
    publicationsCount() {
      return this.filteredPublications.length;
    },
    words() {
      const text = this.publications
        // concatenate title and abstract for each publication
        .map((el) => (el.abstract ? `${el.title} ${el.abstract}` : el.title))
        // join everything together in one big string
        .join(' ')
        // clean from all non-letter characters, but keep white-space
        .replace(/[^a-zA-Z\s]/g, ' ')
        // make everything lowercase
        .toLowerCase()
        // create an array by splitting all words using white-space as separator
        .split(/\s+/)
        // remove all words with less than 3 letters
        .filter((el) => el.length > 3)
        // count the occurrences of all words
        .reduce((acc, cur) => {
          acc[cur] = (acc[cur] || 0) + 1;
          return acc;
        }, Object.create(null))
      ;
      const words = Object.keys(text).map((el) => ({ text: el, value: text[el] }));
      return words;
    },
    cloudWidth() {
      return window.innerWidth >= 992 ? (window.innerWidth / 12) * 10 : window.innerWidth;
    },
    cloudHeight() {
      return this.cloudWidth / 4;
    },
  },
};
</script>

<style scoped>
</style>

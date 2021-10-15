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
            :rotate="rotate"
            :font-size-mapper="fontSizeMapper"
            :on-word-click="onWordClick"
          />
        </div>
        <b-alert
          show
          class="text-secondary"
        >
          There are <b-badge>{{ publications.length }}</b-badge> publications in total.
        </b-alert>
        <b-pagination
          v-model="currentPage"
          :total-rows="publications.length"
          :per-page="perPage"
          aria-controls="my-table"
          align="center"
        />
        <b-table
          id="my-table"
          striped
          hover
          :per-page="25"
          :current-page="currentPage"
          :items="publications"
          primary-key="id"
          :fields="fields"
        >
          <template #cell(id)="data">
            <router-link :to="{ name: 'publication', params: { id: data.value } }">
              {{ (currentPage - 1) * perPage + data.index + 1 }}
            </router-link>
          </template>
          <template #cell(authors)="data">
            <publication-authors :authors="data.value" />
          </template>
        </b-table>
      </b-col>
    </template>
  </BaseView>
</template>

<script>
import Cloud from 'vue-d3-cloud';
import { mapState } from 'vuex';
import BaseView from '../components/BaseView';
import PublicationAuthors from '../components/PublicationAuthors';

export default {
  name: 'MendeleyPublications',
  components: {
    Cloud,
    BaseView,
    PublicationAuthors,
  },
  data() {
    return {
      perPage: 25,
      currentPage: 1,
      fields: [
        {
          key: 'id',
          label: '#',
          class: 'col-id',
        },
        {
          key: 'authors',
          sortable: true,
          class: 'col-other',
        },
        {
          key: 'title',
          sortable: true,
          class: 'col-main',
        },
        {
          key: 'volume',
          class: 'col-other',
        },
        {
          key: 'type',
          class: 'col-other',
          formatter: (value) => value.split('_').map((el) => el[0].toUpperCase() + el.substring(1)).join(' '),
        },
        {
          key: 'created',
          label: 'Added',
          sortable: true,
          class: 'col-other',
          formatter: (value) => new Date(value).toLocaleString(),
        },
        {
          key: 'year',
          sortable: true,
          class: 'col-other',
        },
      ],
      fontSizeMapper: (word) => Math.log2(word.value) * 5,
      onWordClick: (word) => { console.log(word); },
      // use bitwise NOT operator to generate a number between -2 and 2
      // in order to create any of the following rotation angles:
      // -90, -45, 0, 45, 90
      // eslint-disable-next-line no-bitwise
      rotate: () => (~~(Math.random() * 5) - 2) * 45,
    };
  },
  computed: {
    ...mapState({
      publications: (state) => state.publication.publications,
    }),
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
.col-id {
  width: 5%;
}

.col-other {
  width: 10%;
}

.col-main {
  width: 25%;
}
</style>

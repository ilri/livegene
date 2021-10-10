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
        <b-pagination
          v-model="currentPage"
          :total-rows="publications.length"
          :per-page="perPage"
          aria-controls="my-table"
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
        </b-table>
      </b-col>
    </template>
  </BaseView>
</template>

<script>
import Cloud from 'vue-d3-cloud';
import { mapState } from 'vuex';
import BaseView from '../components/BaseView';

export default {
  name: 'MendeleyPublications',
  components: {
    Cloud,
    BaseView,
  },
  data() {
    return {
      perPage: 25,
      currentPage: 1,
      fields: [
        {
          key: 'id',
          label: '#',
        },
        {
          key: 'title',
          sortable: true,
        },
        {
          key: 'type',
        },
        {
          key: 'created',
          label: 'Added',
          sortable: true,
          formatter: (value) => new Date(value).toLocaleString(),
        },
        {
          key: 'authors',
          formatter: (value) => {
            if (!value || value.length === 0) {
              return '';
            }
            if (value.length === 1) {
              return `${value[0].last_name.toUpperCase()}, ${value[0].first_name}`;
            }
            if (value.length === 2) {
              return `
                ${value[0].last_name.toUpperCase()}, ${value[0].first_name}
                &
                ${value[1].last_name.toUpperCase()}, ${value[1].first_name}
              `;
            }
            if (value.length > 2) {
              return `${value[0].last_name.toUpperCase()}, ${value[0].first_name} et al.`;
            }
            return '';
          },
        },
        {
          key: 'year',
          sortable: true,
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
      console.dir(words);
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

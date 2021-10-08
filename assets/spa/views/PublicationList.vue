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
import { mapState } from 'vuex';
import BaseView from '../components/BaseView';

export default {
  name: 'MendeleyPublications',
  components: {
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
    };
  },
  computed: mapState({
    publications: (state) => state.publication.publications,
  }),
};
</script>

<style scoped>

</style>

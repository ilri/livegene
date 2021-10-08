<template>
  <BaseView>
    <template slot="header">
      <b-nav
        small
        align="center"
      >
        <b-nav-text>Publication</b-nav-text>
      </b-nav>
    </template>
    <template slot="graphic">
      <b-col
        cols="12"
        lg="10"
        class="px-0"
      >
        <div class="border border-primary rounded">
          <h4 class="bg-info text-light py-3">
            {{ publication.title }}
          </h4>
          <p class="h5 text-muted">
            {{ authors }}
          </p>
          <p class="badge badge-info badge-pill p-2">
            {{ type }}
          </p>
          <p>
            {{ publication.source }}, {{ publication.year }}
          </p>
          <b-col
            cols="4"
            offset="4"
          >
            <b-table-simple
              v-if="publication.identifiers"
              hover
              small
              caption-top
              responsive
            >
              <caption>Identifiers:</caption>
              <b-tr
                v-for="(value, key) in publication.identifiers"
                :key="key"
              >
                <b-th>{{ key.toUpperCase() }}</b-th>
                <b-td>{{ value }}</b-td>
              </b-tr>
            </b-table-simple>
          </b-col>
          <b-col
            cols="8"
            offset="2"
          >
            <b-card>
              <b-card-body v-if="publication.abstract">
                <b-card-title>Abstract</b-card-title>
                <b-card-text class="text-left">
                  {{ publication.abstract }}
                </b-card-text>
              </b-card-body>
              <b-card-body v-if="publication.keywords">
                <b-card-title>Keywords</b-card-title>
                <b-card-text>
                  <span
                    v-for="keyword in publication.keywords"
                    :key="keyword"
                    class="d-inline-block bg-info p-2 mx-2 text-light rounded"
                  >
                    {{ keyword }}
                  </span>
                </b-card-text>
              </b-card-body>
            </b-card>
          </b-col>
          <router-link :to="{ name: 'publications' }">
            Back to list
          </router-link>
        </div>
      </b-col>
    </template>
  </BaseView>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseView from '../components/BaseView';

export default {
  name: 'MendeleyPublication',
  components: {
    BaseView,
  },
  computed: {
    ...mapGetters(['getPublicationById']),
    publication() {
      return this.getPublicationById(this.$route.params.id);
    },
    authors() {
      if (!this.publication.authors) {
        return '';
      }
      return this.publication.authors
        .map((el) => (el.first_name ? `${el.first_name} ${el.last_name}` : el.last_name))
        .join(', ')
      ;
    },
    added() {
      return new Date(this.publication.created).toLocaleString();
    },
    type() {
      return this.publication.type.split('_').map((el) => el[0].toUpperCase() + el.slice(1)).join(' ');
    },
  },
};
</script>

<style scoped />

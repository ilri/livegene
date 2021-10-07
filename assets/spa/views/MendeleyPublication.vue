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
        lg="8"
        class="px-0"
      >
        <b-card no-body>
          <b-card-body>
            <b-card-title>{{ publication.title }}</b-card-title>
            <b-card-sub-title>{{ authors }}</b-card-sub-title>
            <b-card-text>
              <p class="alert alert-info">
                {{ publication.type }}
              </p>
              <p>{{ added }}</p>
            </b-card-text>
            <b-card-text>{{ publication.abstract }}</b-card-text>
          </b-card-body>
        </b-card>
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
      const fullNames = [];
      this.publication.authors.forEach((cur) => {
        fullNames.push(`${cur.last_name}, ${cur.first_name}`);
      });
      return fullNames.join('; ');
    },
    added() {
      return new Date(this.publication.created).toLocaleString();
    },
  },
};
</script>

<style scoped />

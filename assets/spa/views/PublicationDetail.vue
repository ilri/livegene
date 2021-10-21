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
          <div class="mb-1">
            <span class="badge badge-info badge-pill p-2">
              {{ type }}
            </span>
          </div>
          <div>
            <publication-author
              v-for="(author, index) in publication.authors"
              :key="index"
              :author="author"
              class="mb-1"
            >
              <span v-if="index + 1 === publication.authors.length" />
              <span v-else>, </span>
            </publication-author>
          </div>
          <div>
            <publication-source :publication="publication" />
          </div>
          <div class="mb-2">
            <p
              v-for="(value, key) in publication.identifiers"
              :key="key"
              class="d-inline-block mx-1"
            >
              <strong>{{ key.toUpperCase() }}</strong>:
              <span>{{ value }}</span>
            </p>
          </div>
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
            </b-card>
            <b-card>
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
            <b-card>
              <b-card-body v-if="publication.tags">
                <b-card-title>Tags</b-card-title>
                <b-card-text>
                  <publication-tag
                    v-for="tag in publication.tags"
                    :key="tag"
                    :tag="tag"
                  >
                    {{ tag }}
                  </publication-tag>
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
import PublicationAuthor from '../components/PublicationAuthor';
import PublicationSource from '../components/PublicationSource';
import PublicationTag from '../components/PublicationTag';

export default {
  name: 'MendeleyPublication',
  components: {
    BaseView,
    PublicationAuthor,
    PublicationSource,
    PublicationTag,
  },
  computed: {
    ...mapGetters(['getPublicationById', 'getFullTextForPublication']),
    publication() {
      return this.getPublicationById(this.$route.params.id);
    },
    added() {
      return new Date(this.publication.created).toLocaleString();
    },
    type() {
      return this.publication.type.split('_').map((el) => el[0].toUpperCase() + el.slice(1)).join(' ');
    },
  },
  created() {
    console.log(this.getFullTextForPublication(this.$route.params.id));
  },
};
</script>

<style scoped>
  .author {
    display: inline-block;
  }
  .author:not(:last-child)::after {
    content: ", ";
    white-space: pre;
  }
</style>

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
        v-if="publication"
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
            <b-card v-if="publication.abstract">
              <b-card-body>
                <b-card-title>Abstract</b-card-title>
                <b-card-text class="text-left">
                  {{ publication.abstract }}
                </b-card-text>
              </b-card-body>
            </b-card>
            <div v-if="publication.keywords">
              <p>
                Keywords:
                <span
                  v-for="keyword in publication.keywords"
                  :key="keyword"
                  class="d-inline-block bg-light p-1 mx-2 text-primary rounded"
                >{{ keyword }}</span>
              </p>
            </div>
            <b-card v-if="publication.tags">
              <b-card-body>
                <b-card-title>Tags</b-card-title>
                <b-card-text>
                  <publication-tag
                    v-for="tag in publication.tags"
                    :key="tag"
                    :tag="tag"
                  />
                </b-card-text>
              </b-card-body>
            </b-card>
            <b-card v-if="publication.websites">
              <b-card-body>
                <b-card-title>Links</b-card-title>
                <b-card-text>
                  <publication-link
                    v-for="(website, index) in publication.websites"
                    :key="index"
                    :link="website"
                  />
                </b-card-text>
              </b-card-body>
            </b-card>
            <div>
              <p class="mt-3 mb-1">
                You can copy the citation in BibTeX format.
              </p>
              <p>
                Try <a
                  href="https://bibtex.online/"
                  target="_blank"
                >BibTeX Online Converter</a> if you want to convert it to another format.
              </p>
              <b-alert
                :show="citationError.flag"
                variant="warning"
              >
                {{ citationError.body.data }}
              </b-alert>
              <b-form-textarea
                id="citation"
                rows="5"
                readonly
                :value="citation"
              />
              <b-button
                id="copyButton"
                variant="outline-secondary"
                class="text-black-50"
                @click="copyCitation"
              >
                <b-icon
                  icon="files"
                  aria-hidden="true"
                />
                <span id="copyText">Copy to clipboard</span>
              </b-button>
            </div>
          </b-col>
          <router-link :to="{ name: 'publications' }">
            BACK TO LIST
          </router-link>
        </div>
      </b-col>
    </template>
  </BaseView>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import BaseView from '../components/BaseView';
import PublicationAuthor from '../components/PublicationAuthor';
import PublicationSource from '../components/PublicationSource';
import PublicationTag from '../components/PublicationTag';
import PublicationLink from '../components/PublicationLink';
import publicationTypeMixin from '../mixins/publicationTypeMixin';

export default {
  name: 'MendeleyPublication',
  components: {
    BaseView,
    PublicationAuthor,
    PublicationSource,
    PublicationTag,
    PublicationLink,
  },
  mixins: [publicationTypeMixin],
  computed: {
    ...mapState({
      citation: (state) => state.publication.citation,
      citationError: (state) => state.publication.citationError,
    }),
    ...mapGetters('publication', [
      'getPublicationById',
    ]),
    publication() {
      return this.getPublicationById(this.$route.params.id);
    },
    // this should be probably removed
    added() {
      return new Date(this.publication.created).toLocaleString();
    },
    type() {
      return this.sanitizePublicationType(this.publication.type);
    },
  },
  created() {
    this.$store.dispatch('publication/getPublicationBibAction', [this.$route.params.id]);
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('publication/resetCitation');
    next();
  },
  methods: {
    copyCitation() {
      const citation = document.getElementById('citation');
      citation.select();
      navigator.clipboard.writeText(citation.value);
      const buttonText = document.getElementById('copyText');
      const oldValue = buttonText.innerText;
      buttonText.innerText = 'Copied to clipboard!';
      setTimeout(() => {
        buttonText.innerText = oldValue;
      }, 3000);
    },
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

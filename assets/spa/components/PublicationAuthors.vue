<template>
  <div>
    <p v-if="shortNotation">
      <span>{{ concatenatedAuthors }}</span>
      <i
        v-show="expander"
        class="fa fa-arrow-circle-right"
        aria-hidden="true"
        @mouseenter="expandAuthors"
      />
    </p>
    <p
      v-else
      @mouseleave="expandAuthors"
    >
      <publication-author
        v-for="(author, index) in authors"
        :key="index"
        :author="author"
      />
    </p>
  </div>
</template>

<script>
import PublicationAuthor from './PublicationAuthor';

export default {
  name: 'PublicationAuthors',
  components: { PublicationAuthor },
  props: {
    authors: {
      type: [Array, String],
      default: () => [],
    },
  },
  data() {
    return {
      shortNotation: true,
    };
  },
  computed: {
    concatenatedAuthors() {
      switch (this.authors.length) {
        case 0:
          return '';
        case 1:
          return this.getAuthorFullName(this.authors[0]);
        case 2:
          return `${this.getAuthorFullName(this.authors[0])} & ${this.getAuthorFullName(this.authors[1])}`;
        default:
          return `${this.getAuthorFullName(this.authors[0])} et al.`;
      }
    },
    expander() {
      return this.authors.length >= 3;
    },
  },
  methods: {
    /**
     * Formats author's name to Lastname, Firstname or just Lastname
     * if first name is not available
     *
     * @param author
     * @param {string} author.last_name
     * @param {string|undefined} author.first_name
     * @returns {string}
     */
    getAuthorFullName(author) {
      return author.first_name ? `${author.last_name}, ${author.first_name}` : author.last_name;
    },
    expandAuthors() {
      this.shortNotation = !this.shortNotation;
    },
  },
};
</script>

<style scoped>
</style>

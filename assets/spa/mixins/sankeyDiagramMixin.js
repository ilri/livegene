export const sankeyDiagramMixin = {
  methods: {
    /**
     * Format person's name like "SURNAME, Name"
     *
     * @param person
     * @param {string} person.lastName
     * @param {string} person.firstName
     * @returns {string}
     */
    formatName: function (person) {
      return `${person.lastName.toUpperCase()}, ${person.firstName}`;
    }
  }
};

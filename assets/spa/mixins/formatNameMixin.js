export default {
  methods: {
    /**
         * Formats a staff member's name to: "SURNAME, Name".
         *
         * @param staffMember
         * @param {string} staffMember.lastName
         * @param {string} staffMember.firstName
         * @returns {string}
         */
    formatName(staffMember) {
      return `${staffMember.lastName.toUpperCase()}, ${staffMember.firstName}`;
    },
  },
};

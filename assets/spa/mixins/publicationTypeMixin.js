export default {
  methods: {
    sanitizePublicationType(value) {
      return value.split('_').map((el) => el[0].toUpperCase() + el.substring(1)).join(' ');
    },
  },
};

export default {
  watch: {
    $loadingStatus(val) {
      if (val === null) {
        this.display();
      }
    },
  },
  mounted() {
    if (this.$loadingStatus === null) {
      this.display();
    }
  },
};

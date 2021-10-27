import axios from 'axios';

export default {
  /**
   * Get Publication BibTeX
   * @param url
   * @param config
   * @returns {Promise<*>}
   */
  async getPublicationBib(url, config) {
    let result;
    await axios.get(url, config)
      .then((response) => {
        result = response.data;
      })
    ;
    return result;
  },
};

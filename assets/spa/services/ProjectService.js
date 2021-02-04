import axios from 'axios';

export default {
  /**
   * Get all projects from the endpoint /api/projects
   * @param url
   * @param config
   * @param data
   * @returns {Promise<*[]>}
   */
  async getProjects(url, config, data = []) {
    await axios.get(url, config)
      .then((response) => {
        data.push(...response.data['hydra:member']);
        if (response.data['hydra:view'] && response.data['hydra:view']['hydra:next']) {
          return this.getProjects(response.data['hydra:view']['hydra:next'], config, data);
        }
        return data;
      })
    ;
    return data;
  },
};

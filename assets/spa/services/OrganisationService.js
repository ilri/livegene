import axios from 'axios';

const config = {
  headers: {
    Accept: 'application/ld+json',
  },
  params: {
    pagination: false,
  },
};

export default {
  getOrganisations() {
    return axios.get('/organisations', config);
  },
};

import axios from 'axios';

const config = {
  headers: {
    Accept: 'text/plain',
  },
};
export default {
  getPublications() {
    return axios.get('/publications', config);
  },
  getPublicationsBib() {
    return axios.get('/publications/bib', config);
  },
  getPublicationBib(id) {
    return axios.get(`/publications/${id}/bib`, config);
  },
};

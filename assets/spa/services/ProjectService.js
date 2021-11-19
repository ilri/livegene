import axios from 'axios';

const config = {
  headers: {
    Accept: 'application/ld+json',
  },
  params: {
    pagination: false,
    properties: [
      'id',
      'ilriCode',
      'fullName',
      'shortName',
      'team',
      'principalInvestigator',
      'startDate',
      'endDate',
      'donor',
      'totalProjectValue',
      'partnerships',
      'staffRoles',
      'countryRoles',
      'isActive',
      'isActiveThisYear',
    ],
  },
};
export default {
  getProjects() {
    return axios.get('/projects', config);
  },
};

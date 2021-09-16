export const state = {
  project: {
    projects: [
      {
        id: 1,
        fullName: 'Project_1',
        startDate: '2021-01-01T00:00:00+00:00',
        endDate: '2022-01-01T00:00:00+00:00',
      },
      {
        id: 2,
        fullName: 'Project_2',
        startDate: '2021-01-01T00:00:00+00:00',
        endDate: '2022-01-01T00:00:00+00:00',
      },
      {
        id: 3,
        fullName: 'Project_3',
        startDate: '2021-01-01T00:00:00+00:00',
        endDate: '2022-01-01T00:00:00+00:00',
      },
      {
        id: 4,
        fullName: 'Project_4',
        startDate: '2021-01-01T00:00:00+00:00',
        endDate: '2022-01-01T00:00:00+00:00',
      },
      {
        id: 5,
        fullName: 'Project_5',
        startDate: '2021-01-01T00:00:00+00:00',
        endDate: '2022-01-01T00:00:00+00:00',
      },
    ],
    projectsGroupedByTeam: new Map(
      [
        ['Team_1',
          [
            {
              id: 1,
              fullName: 'Project_1',
              startDate: '2021-01-01T00:00:00+00:00',
              endDate: '2022-01-01T00:00:00+00:00',
            },
            {
              id: 2,
              fullName: 'Project_2',
              startDate: '2021-01-01T00:00:00+00:00',
              endDate: '2022-01-01T00:00:00+00:00',
            },
          ],
        ],
        ['Team_2',
          [
            {
              id: 3,
              fullName: 'Project_3',
              startDate: '2021-01-01T00:00:00+00:00',
              endDate: '2022-01-01T00:00:00+00:00',
            },
            {
              id: 4,
              fullName: 'Project_4',
              startDate: '2021-01-01T00:00:00+00:00',
              endDate: '2022-01-01T00:00:00+00:00',
            },
            {
              id: 5,
              fullName: 'Project_5',
              startDate: '2021-01-01T00:00:00+00:00',
              endDate: '2022-01-01T00:00:00+00:00',
            },
          ],
        ],
      ],
    ),
  },
  error: {
    errors: [],
  },
};

export default {
  namespaced: true,
  state,
};

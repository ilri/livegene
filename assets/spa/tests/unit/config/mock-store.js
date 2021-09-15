export const state = {
  project: {
    projects: [
      {
        id: 1,
        fullName: 'Project_1',
      },
      {
        id: 2,
        fullName: 'Project_2',
      },
      {
        id: 3,
        fullName: 'Project_3',
      },
      {
        id: 4,
        fullName: 'Project_4',
      },
      {
        id: 5,
        fullName: 'Project_5',
      },
    ],
    projectsGroupedByTeam: new Map(
      [
        ['Team_1',
          [
            {
              id: 1,
              fullName: 'Project_1',
            },
            {
              id: 2,
              fullName: 'Project_2',
            },
          ],
        ],
        ['Team_2',
          [
            {
              id: 3,
              fullName: 'Project_3',
            },
            {
              id: 4,
              fullName: 'Project_4',
            },
            {
              id: 5,
              fullName: 'Project_5',
            },
          ],
        ],
      ],
    ),
  },
};

export default {
  state,
};

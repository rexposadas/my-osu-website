import CS261CourseNotes from '../../../../static/CS261CourseNotes.pdf';
import GraphSearchPresentation from '../../../../static/GraphAlgorithmsII_DFS_BFS.pdf';

// These topics appear on the right side of the
const topics = [
  {
    title: 'Course Intro',
    // weeks: [1],
    resources: [
      {
        title: 'What is this course about?',
        link: 'https://docs.google.com/document/d/1h5822b4w8bkyNPWduQCiowv1U6ou-IMk9DI354dtr94/edit?usp=sharing'
      }
    ],
    readings: [
      {
        title: 'Online JavaScript Tutorial',
        link: 'https://www.w3schools.com/js/default.asp'
      }
    ]
  },

  {
    title: 'Git and GitHub',
    // weeks: [0, 1],
    resources: [
      {
        title: 'Section Notes',
        link: 'https://docs.google.com/document/d/1enyuEyH8W970iy2key_jFhUsVcHgHxb3F2lpcSAfSCE/edit?usp=sharing'
      },
    ],
    readings: [
      {
        title: 'Git Handbook',
        link: 'https://guides.github.com/introduction/git-handbook/',
        description: 'a simple introduction to Git from GitHub Guides'
      }
    ]
  },

  {
    title: 'JavaScript Basics',
    // weeks: [1, 2, 3],
    resources: [
      {
        title: 'Lecture notes',
        link: 'https://docs.google.com/document/d/1I-Rk45M0d6Yh4Zs9CHyjfi8VxOxg1fB-jiReNy6ajyw/edit?usp=sharing',
      },
    ],
    readings: [
      {
        title: 'Getting to Hello',
        // link: 'http://www.cprogramming.com/tutorial/c/lesson1.html',
        // description: 'Printing to '
      },
      {
        title: 'Working with Arrays',
        // link: 'https://www.w3schools.com/js/js_arrays.asp',
        // description: 'C Programming'
      },
      {
        title: 'Maps',
        // link: 'https://www.w3schools.com/js/js_arrays.asp',
        // description: 'C Programming'
      },

      {
        title: 'Fuctions',
        // link: 'http://www.cprogramming.com/tutorial/c/lesson7.html',
        // description: 'C Programming'
      },
      {
        title: 'Objects',
        // link: 'http://www.cprogramming.com/tutorial/c/lesson6.html',
        // description: 'C Programming'
      },
    ],
    notes: [
      'JavaScript has more features that what is shown above. We will focus on only what we need in order to start building complete backend applications.'
    ]
  },

  {
    title: 'Working with Databases',
    // weeks: [3],
    resources: [
      {
        title: 'Section Notes',
        link: 'https://docs.google.com/document/d/1wFCR1MnkRQ76mDkGYz_2Py4PGcPKgWk6pTJSR0W5gFI/edit?usp=sharing'
      },
    ],
    readings: [
      {
        title: 'Postgres installation and configuration',
        // link: `${CS261CourseNotes}#page=174`,
        // description: 'Budd\'s Course Notes'
      },
      {
        title: 'SQL Basics',
        // link: `${CS261CourseNotes}#page=185`,
        // description: 'Budd\'s Course Notes'
      },
      {
        title: 'CRUD operations',
        // link: 'https://en.wikipedia.org/wiki/Dynamic_array',
        // description: 'Wikipedia'
      },
    ]
  },
];

export default topics;

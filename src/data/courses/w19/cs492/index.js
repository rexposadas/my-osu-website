import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';

const courseDetails = {
  number: 'CS 492',
  title: 'Mobile Software Development',
  term: 'Winter 2019',
  instructor: {
    name: 'Rex Posadas',
    email: 'rexposadas@gmail.com'
  },

  officeHours: [
    {
      day: 'Tues.',
      time: '10:00am &ndash; 12:00pm',
      location: 'KEC 1109'
    },
    {
      day: 'Wed.',
      time: '10:00 &ndash; 11:00am',
      location: 'KEC 1109'
    }
  ],

  lectures: {
    '001': {
      day: 'TuTh',
      time: '2:00 &ndash; 3:50pm',
      location: 'DEAR 118'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1zyMlmHTVcn3Tr7oqp0i2jiXOqyVSYPPgap69dJR63Bs/edit?usp=sharing',

  links: [
    {
      title: 'CS 492 on Piazza',
      link: 'https://piazza.com/oregonstate/winter2019/cs492'
    },
    {
      title: 'Establishing a positive classroom community',
      link: '/teaching/community'
    }
  ],

  topics: topics,

  assignmentGroups: [assignments, finalProject],

  tas: tas
};

export default courseDetails;

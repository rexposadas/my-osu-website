import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';

var courseDetails = {
  number: 'CS 493',
  title: 'Cloud Application Development',
  term: 'Spring 2019',
  instructor: {
    name: 'Rex Posadas',
    email: 'rexposadas@gmail.com'
  },

  officeHours: [
    {
      day: 'Thurs.',
      time: '9:30&ndash;11:30am',
      location: 'KEC 1109'
    },
    {
      day: 'Fri.',
      time: '2:00&ndash;3:00pm',
      location: 'KEC 1109'
    }
  ],

  lectures: {
    '001': {
      day: 'MW',
      time: '2:00 &ndash; 3:50pm',
      location: 'WNGR 116'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1hxOIfZvxICEPwaLIK9i-t1R8beLnu_3Au63mQPSLZbo/edit?usp=sharing',

  links: [
    {
      title: 'CS 493 on Piazza',
      link: 'https://piazza.com/oregonstate/spring2019/cs493'
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

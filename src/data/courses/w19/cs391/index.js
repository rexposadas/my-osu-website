import topics from './topics';
import assignments from './assignments';
import debate from './debate';
import finalReport from './finalReport';
import tas from './tas';

const courseDetails = {
  number: 'CS 391',
  title: 'Social and Ethical Issues in CS',
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
      day: 'MWF',
      time: '3:00 &ndash; 3:50pm',
      location: 'KEC 1001'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/19H1OQhx5CNJihha2Bpjo_tzNYM-ZTN8rLA5W5O7PZig/edit?usp=sharing',

  links: [
    {
      title: 'CS 391 on Piazza',
      link: 'https://piazza.com/oregonstate/winter2019/cs391'
    },
    {
      title: 'Establishing a positive classroom community',
      link: '/teaching/community'
    }
  ],

  topics: topics,

  assignmentGroups: [assignments, debate, finalReport],

  tas: tas
};

export default courseDetails;

import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';

var courseDetails = {
  number: 'Intro',
  title: 'Web Development',
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
      day: 'MWF',
      time: '9:00&ndash;9:50am',
      location: 'LINC 210'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1ySZL0ECPMAN8hj_oy6exHDyd7mOEKU6YkX9SEuB6ZwU/edit?usp=sharing',

  links: [
    {
      title: 'Intro on Piazza',
      link: 'https://piazza.com/oregonstate/spring2019/cs290'
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

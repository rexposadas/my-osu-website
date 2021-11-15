import topics from './topics';
import assignments from './assignments';
import recitations from './recitations';
import tas from './tas';
import CS261CourseNotes from '../../../../static/CS261CourseNotes.pdf';

const courseDetails = {
  number: 'Backend',
  title: 'Data Structures',
  term: 'Fall 2018',
  instructor: {
    name: 'Rex Posadas',
    email: 'rexposadas@gmail.com'
  },

  officeHours: [
    {
      day: 'Tues.',
      time: '9:30 &ndash; 11:30am',
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
      time: '1:00 &ndash; 1:50pm',
      location: 'GLFN AUD'
    },
    '002': {
      day: 'MWF',
      time: '9:00 &ndash; 9:50am',
      location: 'DEAR 118'
    },
  },

  finalExams: {
    '001': {
      day: 'Thurs. 12/6/2018',
      time: '12:00 &ndash; 1:50pm',
      location: '~~GLFN AUD~~ **LINC 128**'
    },
    '002': {
      day: 'Mon. 12/3/2018',
      time: '2:00 &ndash; 3:50pm',
      location: 'DEAR 118'
    },
  },

  syllabusLink: 'https://docs.google.com/document/d/1j69eTj_l2fE6ChbvpjWz-xqBGN-OaZdbGQnnRgzFMME/edit?usp=sharing',

  textbooks: [
    {
      title: 'Backend Course Notes',
      author: 'Tim Budd',
      link: CS261CourseNotes
    }
  ],

  links: [
    {
      title: 'Backend on Piazza',
      link: 'https://piazza.com/oregonstate/fall2018/cs261'
    },
    {
      title: 'Establishing a positive classroom community',
      link: '/teaching/community'
    }
  ],

  topics: topics,

  assignmentGroups: [assignments],

  tas: tas,

  recitations: recitations
};

export default courseDetails;

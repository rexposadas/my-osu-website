import topics from './topics';
import assignments from './assignments';
import recitations from './recitations';
import tas from './tas';
import CS261CourseNotes from '../../../../static/CS261CourseNotes.pdf';

const courseDetails = {
  number: 'Backend',
  title: 'Data Structures',
  term: 'Fall 2019',

  lectures: {
    '001': {
      day: 'MWF',
      time: '1:00 &ndash; 1:50pm',
      location: 'LINC 228'
    },
    '002': {
      day: 'MWF',
      time: '9:00 &ndash; 9:50am',
      location: 'Weniger 153'
    },
  },

  syllabusLink: 'https://docs.google.com/document/d/1ttv2QMyyyHU7VOlQrlkXgiISawnX0n3dQvRiA_6tl0M/edit?usp=sharing',

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
      link: 'https://piazza.com/oregonstate/fall2019/cs261'
    },
    {
      title: 'Backend on GitHub',
      link: 'https://github.com/osu-cs261-f19'
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

import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';

var courseDetails = {
  number: 'Intro',
  title: 'Web Development',
  term: 'Fall 2019',

  lectures: {
    '001': {
      day: 'MWF',
      time: '3:00&ndash;3:50pm',
      location: 'LINC 210'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/19pxuiRhKTI4KN_Gt8zy48rj72zhFGbAhKgJLBeuOwn8/edit?usp=sharing',

  links: [
    {
      title: 'Intro on Piazza',
      link: 'https://piazza.com/oregonstate/fall2019/cs290'
    },
    {
      title: 'Intro on GitHub',
      link: 'https://github.com/osu-cs290-f19'
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

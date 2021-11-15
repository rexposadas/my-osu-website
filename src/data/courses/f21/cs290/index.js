import topics from './topics';
import assignments from './assignments';
import finalProject from './finalProject';
import tas from './tas';

var courseDetails = {
  number: 'Section 2',
  title: 'Web Development',
  term: 'Intro to Section 1',

  lectures: {
    '001': {
      day: 'TuTh',
      time: '2:00&ndash;3:50pm',
      timeZone: 'US/Pacific',
      location: 'WNGR 151',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/95964243963?pwd=K1phWm1RMHQyVFZWMUpscytUUENNZz09'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1NBEVVthIK33lHqbO5jAmsWAtuI33Ecfzs7lhGiQC9Ng/edit?usp=sharing',

  calendarUrl: 'https://calendar.google.com/calendar/embed?src=c_sm7kad0c0as96818rp3ts50rhk@group.calendar.google.com&ctz=America%2FLos_Angeles',

  links: [
    {
      title: 'Intro on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1869980'
    },
    {
      title: 'Intro on Zoom',
      link: 'https://oregonstate.zoom.us/j/95964243963?pwd=K1phWm1RMHQyVFZWMUpscytUUENNZz09',
      description: 'all in-person lectures will be broadcast in this Zoom meeting'
    },
    {
      title: 'Intro on Campuswire',
      link: 'https://campuswire.com/c/G81355249/',
      description: 'we will use Campuswire\'s class feed and chatrooms for course Q & A &ndash; check your OSU email for an invite'
    },
    {
      title: 'Intro on GitHub',
      link: 'https://github.com/osu-cs290-f21',
      description: 'find all lecture code repos and your own private assignment repos here'
    },
    {
      title: 'Establishing a positive classroom community',
      link: '/teaching/community',
      description: 'please read this statement, and let\'s work to make this a great learning environment for everyone'
    }
  ],

  topics: topics,

  assignmentGroups: [assignments, finalProject],

  tas: tas
};

export default courseDetails;

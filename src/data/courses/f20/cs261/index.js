import topics from './topics';
import assignments from './assignments';
import recitations from './recitations';
import tas from './tas';
import CS261CourseNotes from '../../../../static/CS261CourseNotes.pdf';

const courseDetails = {
  number: 'Section 1',
  title: 'Data Structures',
  term: 'Fall 2020',

  lectures: {
    '001': {
      day: 'MWF',
      time: '1:00 &ndash; 1:50pm',
      timeZone: 'US/Pacific',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09'
    },
    '002': {
      day: 'MWF',
      time: '9:00 &ndash; 9:50am',
      timeZone: 'US/Pacific',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09'
    },
  },

  finalExams: {
    '001': {
      day: 'Tues. 12/8/2020',
      time: '9:30 &ndash; 11:20am',
      timeZone: 'US/Pacific',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09'
    },
    '002': {
      day: 'Wed. 12/9/2020',
      time: '6:00 &ndash; 7:50pm',
      timeZone: 'US/Pacific',
      videoConferenceLink: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09'
    },
  },

  syllabusLink: 'https://docs.google.com/document/d/1oush2_14jLl9kwjMuyof-LKW0FzjyeevynbO5uuvNys/edit?usp=sharing',

  textbooks: [
    {
      title: 'Section 1 Course Notes',
      author: 'Tim Budd',
      link: CS261CourseNotes
    }
  ],

  links: [
    {
      title: 'Section 1 on Canvas',
      link: 'https://canvas.oregonstate.edu/courses/1784132'
    },
    {
      title: 'Section 1 on Zoom',
      link: 'https://oregonstate.zoom.us/j/96782365084?pwd=N25VdHVjeENvaFNzcHh4aVRoUzZJQT09',
      description: 'this is where meetings will happen for both lecture sections and all recitations'
    },
    {
      title: 'Section 1 on Piazza',
      link: 'https://piazza.com/oregonstate/fall2020/cs261',
      description: 'course Q & A forum'
    },
    {
      title: 'Section 1 on GitHub',
      link: 'https://github.com/osu-cs261-f20',
      description: 'find all lecture code repos and your own private assignment repos here'
    },
    {
      title: 'Establishing a positive classroom community',
      link: '/teaching/community',
      description: 'please read this statement, and let\'s work to make this a great learning environment for everyone'
    }
  ],

  topics: topics,

  assignmentGroups: [assignments],

  tas: tas,

  recitations: recitations
};

export default courseDetails;

import topics from './topics';
import assignments from './assignments';

var courseDetails = {
  number: 'CS 480',
  title: 'Translators',
  term: 'Winter 2018',
  instructor: {
    name: 'Rex Posadas',
    email: 'rexposadas@gmail.com'
  },

  officeHours: [
    {
      day: 'Tues.',
      time: '10:00 &ndash; 11:00am',
      location: 'KEC 1109'
    },
    {
      day: 'Wed.',
      time: '2:00 &ndash; 4:00pm',
      location: 'KEC 1109'
    }
  ],

  lectures: {
    '001': {
      day: 'MWF',
      time: '10:00 &ndash; 10:50am',
      location: 'KIDD 350'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/17w7-eVsDlchGQ9yGWhrvvBinb3eRSSNgAX57I1z2mhI/edit?usp=sharing',

  textbooks: [
    {
      title: 'Engineering a Compiler, 2nd ed.',
      author: 'Cooper and Torczon',
      link: 'https://books.google.com/books/about/Engineering_a_Compiler.html?id=CGTOlAEACAAJ'
    }
  ],

  links: [
    {
      title: 'CS 480 on Piazza',
      link: 'https://piazza.com/oregonstate/winter2018/cs480'
    },
    {
      title: 'Establishing a positive classroom community',
      link: '/teaching/community'
    }
  ],

  topics: topics,

  assignmentGroups: [assignments]
};

export default courseDetails;

var courseDetails = {
  number: 'Intro',
  title: 'Web Development',
  term: 'Spring 2018',
  instructor: {
    name: 'Rex Posadas',
    email: 'rexposadas@gmail.com'
  },

  officeHours: [
    {
      day: 'Wed.',
      time: '11:00am &ndash; 12:00pm',
      location: 'KEC 1109'
    },
    {
      day: 'Thurs.',
      time: '10:00am &ndash; 12:00pm',
      location: 'KEC 1109'
    }
  ],

  lectures: {
    '001': {
      day: 'MWF',
      time: '9:00 &ndash; 9:50am',
      location: 'LINC 210'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1B0y-Fd2nkEAVCiQbMOZkJeut_1MubaVOaabGr-sN3YE/edit?usp=sharing',

  links: [
    {
      title: 'Intro on Piazza',
      link: 'https://piazza.com/oregonstate/spring2018/cs290'
    },
    {
      title: 'Establishing a positive classroom community',
      link: '/teaching/community'
    }
  ]
};

export default courseDetails;

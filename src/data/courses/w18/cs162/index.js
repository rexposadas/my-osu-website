var courseDetails = {
  number: 'CS 162',
  title: 'Intro to CS II',
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
      time: '12:00 &ndash; 12:50pm',
      location: 'WNGR 151'
    }
  },

  syllabusLink: 'https://docs.google.com/document/d/1W0imnas27fZ-E2ttDyFuqmiHPutazFFKYZHdDlV0zRI/edit?usp=sharing',

  links: [
    {
      title: 'CS 162 on Piazza',
      link: 'https://piazza.com/oregonstate/winter2018/cs162'
    },
    {
      title: 'Establishing a positive classroom community',
      link: '/teaching/community'
    }
  ]
};

export default courseDetails;

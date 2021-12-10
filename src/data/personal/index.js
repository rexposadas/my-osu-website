import officeHours from './officeHours';
import aboutMeText from './aboutMeText';

import photoUrl from '../../static/rexposadas-bluetie.jpg';

const personalData = {
  name: 'Rex Posadas',
  email: 'rexposadas@gmail.com',
  title: 'Instructor',

  office: {
    text: 'KEC 1109',
    link: 'https://goo.gl/maps/DoQVXpSxZrQ2'
  },

  department: {
    text: 'School of EECS',
    link: 'http://eecs.oregonstate.edu/',
  },

  institution: {
    text: 'Oregon State University',
    link: 'http://oregonstate.edu/'
  },

  city: {
    text: 'Corvallis, OR 97331'
  },

  gitHub: 'https://github.com/rexposadas',

  photoUrl: photoUrl,

  officeHours: officeHours,

  aboutMeText: aboutMeText
};

export default personalData;

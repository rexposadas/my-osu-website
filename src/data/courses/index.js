import f21 from './f21/';

const currentTerm = 'f21';

const courseData = {
  f21: f21
};

const currentTermData = courseData[currentTerm];

export { currentTerm, courseData, currentTermData };

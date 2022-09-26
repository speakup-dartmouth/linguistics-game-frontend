export const colors = {
  darkBlue: '#3297C1',
  lightBlue: '#89D0EE',
  white: '#FFFFFF',
  yellow: '#FFBB37',
};

export const apiUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8888/.netlify/functions' : 'https://linguistics-games-proof-of-concept.netlify.app/.netlify/functions';
export const s3BucketUrl = 'https://lg-dali-test.s3.us-west-1.amazonaws.com';

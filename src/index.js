import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const exampleProps = {
  employerName: 'Google',
  contactName: 'John',
  students: [
    {
      name: 'Mary Smith',
      title: 'UX Designer',
      imageUrl: 'http://placehold.it/75x75',
      coverLetter: 'I would love to work for Google. I am proficient in all things UX design...',
      profileLink: 'google.com'
    },
    {
      name: 'Sam Lopez',
      title: 'Front-End Engineer',
      imageUrl: 'http://placehold.it/75x75',
      coverLetter: 'I am great at front-end development...',
      profileLink: 'google.com'
    },
    {
      name: 'Jake Matthews',
      title: 'Fullstack Engineer',
      imageUrl: 'http://placehold.it/75x75',
      coverLetter: 'I know Node.js like the back of my hand...',
      profileLink: 'google.com'
    }
  ]
};

ReactDOM.render(
  <App employerName={exampleProps.employerName} contactName={exampleProps.contactName} students={exampleProps.students} />,
  document.getElementById('root')
);

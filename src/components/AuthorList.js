import React from 'react';
import Author from './Author';

const AuthorList = (props) => {
  const authors = props.authors.map((author) => (
    <Author  key={author} author={author}/>
  ));

  return (
    <div>
      {authors}
    </div>
  );
};

export default AuthorList;

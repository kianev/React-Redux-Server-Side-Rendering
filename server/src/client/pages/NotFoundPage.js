import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return(
    <div className="container" style={{marginTop: '20px'}}>
      <h3>Route not found!</h3>
    </div>
  );
};

export default {
  component: NotFoundPage
};
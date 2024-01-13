import React from 'react';
// import { JSON } from 'react-router-dom';

const FunCompo = (props) => {
  const { myName, company, employeobj } = props; // Destructure props
  return (
    <div>
      <h1>{myName}</h1>
      <h1>{company}</h1>
      Employee Details: {JSON.stringify(employeobj)}
    </div>
  );
};

export default FunCompo;


import React, { Component } from 'react'
// import { JSON } from 'react-router-dom';

 class ClassComp extends Component {
  render() {
    const {myName,company,employeobj}= this.props;
    return (
      <>
        <h1>{myName}</h1>
        <h1>{company}</h1>
        Employee Details: {JSON.stringify(employeobj)}
      </>
    )
  }
}

export default  ClassComp

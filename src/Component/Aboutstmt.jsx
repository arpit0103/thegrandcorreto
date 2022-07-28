import React from 'react';

const Aboutstmt = (props) => {
  return (
    <div className="abouthead">
        <h1 className="aboutheading">{props.name}</h1>
        <p className="aboutpara">{props.stmt}</p>
    </div>
  )
}

export default Aboutstmt;
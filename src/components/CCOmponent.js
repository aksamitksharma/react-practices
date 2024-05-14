import React from 'react';

const CCOmponent = (props) => {
  return(
    <div>
      {props.data.title}
      <button onClick={()=>props.data.handelClick("JS")}>Change to JS</button>
    </div>);
};

export default CCOmponent;

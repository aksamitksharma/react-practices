import React from "react";

const UpdatedCounterColor=OriginalComponent=>{
  const NewComponent=()=>{
    return(
      <div>
        <h3>Using Extra Power of HOC</h3>
        <OriginalComponent name="Amit" />
      </div>
    )
  }
  return NewComponent;
}

export default UpdatedCounterColor
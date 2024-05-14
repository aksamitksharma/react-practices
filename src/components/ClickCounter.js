import React from "react";
import UpdatedCounterColor from './HocWithCounter'

const ClickCounter=(props)=>{
  console.log(props)
  return(
    <div>
      <h1>
        Click Counter {props.name}
      </h1>
    </div>
  )
}

export default UpdatedCounterColor(ClickCounter)
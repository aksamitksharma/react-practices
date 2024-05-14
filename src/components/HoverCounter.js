import React from "react";
import UpdatedCounterColor from './HocWithCounter'

const HoverCounter=(props)=>{
  return(
    <div>
      <h1>
        Hover Counter {props.name}
      </h1>
    </div>
  )
}

export default UpdatedCounterColor(HoverCounter)
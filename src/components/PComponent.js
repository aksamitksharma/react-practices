import React, { useState } from 'react';
import CCOmponent from './CCOmponent';


const PComponent = () => {
  const [title, setTitle] = useState("React");

  const handelClick = (title) => {
    setTitle(title);
  }
  return(
    <div>
      {title}
      <CCOmponent data={{title:title,handelClick:handelClick}} />
    </div>
  );
};

export default PComponent;

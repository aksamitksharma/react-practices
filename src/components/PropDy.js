import React from 'react';

const PropDy = ({name, alertprop}) => {
    return (
        <>
            <h2> ---------- Property DY Component ----------  </h2>
            <h3> {name} {alertprop()}</h3>
        </>
    );
}

export default PropDy;
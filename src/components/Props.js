import React from 'react';

const Props = ({users}) => {
    return (
        <>
            <h2> ---------- Property Component ----------  </h2>

            {users.map((user, index) => (
                <div key={index}>
                    <h2>{user.name}</h2>
                </div>
            ))}
        </>
    );
}

export default Props;
import React from 'react';

const Simpson = ({simpson}) => {
    return (
        <div>
            <h3>{simpson.name} {simpson.surname}</h3>
            <h4>Age: {simpson.age}</h4>
            <h5>{simpson.info}</h5>
            <img src={simpson.photo} alt={simpson.name}/>
            <br/>
        </div>
    );
};

export default Simpson;
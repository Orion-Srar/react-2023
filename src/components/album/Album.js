import React from 'react';

const Album = ({album}) => {
    let {id, title} = album;
    return (
        <div>
            <div>{id}.{title}</div>
        </div>
    );
};

export default Album;
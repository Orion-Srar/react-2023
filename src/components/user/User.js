import React from 'react';

const User = ({item}) => {
    return (
        <div>
            <div>Name:{item.name}</div>
            <div>age: {item.age}</div>
            <div>status: {item.status}</div>
            <br/>
        </div>
    );
};

export default User;
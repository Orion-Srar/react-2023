import React from 'react';
import User from "../user/User";

const Users = ({users}) => {

    return (
        <div>
            {
                users.map((value, index) => (<User item = {value} key = {index}/>))
            }
        </div>
    );
};

export default Users;
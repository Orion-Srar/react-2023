import React from 'react';
import {useEffect, useState} from "react";
import {userService} from "../../axios.service/user.service/user.service";
import User from "../user/User";

const Users = ({lift}) => {
    let [users, setUsers] = useState(null);


    useEffect(() => {
        userService.gertAll()
            .then(value => value.data)
            .then(users => setUsers(users))
    }, [])
    return (
        <div>
            {
                users && users.map(user => <User user={user} lift={lift} key={user.id}/>)
            }

        </div>
    );
};

export default Users;
import React, {FC, useEffect, useState} from 'react';

import {UserForm, Users} from "../components";
import {IUser} from "../interfaces";
import {userService} from "../services";


interface IProps {

}

const UserPage: FC<IProps> = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(()=> {
        userService.getAll().then(value => value.data).then(value => setUsers(value))
    },[])


    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {
    UserPage
}
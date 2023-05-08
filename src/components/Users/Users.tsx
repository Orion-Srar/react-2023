import React, {FC} from 'react';
import {IUser} from "../../interfaces";
import {User} from "../User/User";

interface IProps {
    users: IUser[]
}

const Users: FC<IProps> = ({users}) => {


    return (
        <div>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
};

export {
    Users
}






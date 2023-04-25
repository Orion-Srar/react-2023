import React, {useState} from 'react';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

const App = () => {

    let [user, setUser] = useState({});

    function lift(obj) {
        setUser(obj)
    }

    return (
        <div>
            <Users lift={lift}/>
            <Posts user={user}/>
        </div>
    );
};

export default App;
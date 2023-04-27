import React from 'react';
import {useNavigate} from "react-router-dom";
import css from './Header.module.css'

const Header = () => {
    let navigate = useNavigate();

    return (
        <div className={css.Header}>
            <button onClick={()=> navigate('todos')}>Todos</button>
            <button onClick={()=> navigate('albums')}>Albums</button>
            <button onClick={()=> navigate('comments')}>Comments</button>

        </div>
    );
};

export default Header;
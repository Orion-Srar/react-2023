import React, {useEffect, useState} from 'react';
import {todosService} from "../../services/todos.service";
import Todo from "../todo/Todo";

const Todos = () => {
    let [todos, setTodos] = useState([]);

    useEffect(()=>{
        todosService.getAll().then(value => value.data).then(value => setTodos(value))

    },[])

    return (
        <div>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }

        </div>
    );
};

export default Todos;
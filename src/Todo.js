import React, { useState } from 'react';

const Todo = ({id, todo, deleteTodo}) => {

    const [completed, setCompleted] = useState(false);
    const handleCompleted = () => {
        setCompleted(true);
    }

    return ( 
        <p style={{textDecoration: completed ? 'line-through' : null}}>
            redni broj: {id + 1}. 
            {todo.text}
            <button onClick={() => deleteTodo(id)}>delete</button>
            <button onClick={handleCompleted}>mark as done</button>
        </p>
     );
}
 
export default Todo;
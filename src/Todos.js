import React, { useState } from 'react';
import Todo from './Todo';

function Todos() {
  
  const [todos, setTodos] = useState([
    {text: 'learn JS'},
    {text: 'learn JS more'},
    {text: 'learn JS and only JS'}
  ])
  const [value, setValue] = useState('');
  const handleValue = (e) => {
    setValue(e.target.value)
  }

  const [todo, addTodo] = useState({text: '', isCompleted: false});
  const handleAddTodo = () => {
    const newTodo = {
      ...todo,
      text: value,
    }
    const newArr = [...todos, newTodo];
    setTodos(newArr);
    setValue('');
  }

  const deleteTodo = (id) => {
    const deletedArr = [...todos];
    deletedArr.splice(id, 1);
    setTodos(deletedArr);
  }

  return (
    <div className="App">
        {
          todos.map((todo, index) => (
            <Todo deleteTodo={deleteTodo} key={index} id={index} todo={todo} />
          ))
        }
        <input onChange={handleValue} type="text" value={value} />
        <button onClick={handleAddTodo}>add todo</button>
    </div>
  );
}

export default Todos;

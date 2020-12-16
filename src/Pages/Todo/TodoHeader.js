import React, { useState, useContext } from 'react';
import { Button, Input } from 'antd';
import { TodoContext } from './TodoContext';

function TodoHeader() {
  const [todo, setTodo] = useState(null);
  const [todos, setTodos] = useContext(TodoContext);

  const updateTodos = () => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="todo_header">
      <Input
        placeholder={`There is currently ${todos?.length} ${
          todos?.length === 1 ? 'todo' : 'todos'
        }`}
        value={todo}
        onChange={(event) => setTodo(event?.target?.value)}
      />
      <Button onClick={() => updateTodos()}>Save</Button>
    </div>
  );
}

export default TodoHeader;

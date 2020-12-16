import React, { useContext } from 'react';
import TodoCard from './TodoCard';
import { TodoContext } from './TodoContext';

function TodoList() {
  const [todos] = useContext(TodoContext);

  // TODO: Animation
  return (
    <>
      {todos?.map((todo, index) => (
        <TodoCard todo={todo} key={index} />
      ))}
    </>
  );
}

export default TodoList;

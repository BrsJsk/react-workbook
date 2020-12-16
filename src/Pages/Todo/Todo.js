import React from 'react';
import './Todo.css';
import TodoHeader from './TodoHeader';
import PageAbsoluteWrapper from '../../components/PageAbsoluteWrapper';
import TodoCard from './TodoCard';

function Todo(props) {
  return (
    <PageAbsoluteWrapper>
      <div className="todo_wrapper">
        <TodoHeader />

        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </PageAbsoluteWrapper>
  );
}

export default Todo;

import React from 'react';
import './Todo.css';
import TodoHeader from './TodoHeader';
import PageAbsoluteWrapper from '../../components/PageAbsoluteWrapper';
import { TodoProvider } from './TodoContext';
import TodoList from './TodoList';

function Todo(props) {
  return (
    <PageAbsoluteWrapper>
      <div className="todo_wrapper">
        <TodoProvider>
          <TodoHeader />

          <TodoList />
        </TodoProvider>
      </div>
    </PageAbsoluteWrapper>
  );
}

export default Todo;

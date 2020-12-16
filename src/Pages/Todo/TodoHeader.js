import React, { useState } from 'react';
import { Button, Input } from 'antd';

function TodoHeader(props) {
  const [todo, setTodo] = useState(null);
  return (
    <div className="todo_header">
      <Input
        placeholder="Todo"
        value={todo}
        onChange={(event) => setTodo(event?.target?.value)}
      />
      <Button>Save</Button>
    </div>
  );
}

export default TodoHeader;

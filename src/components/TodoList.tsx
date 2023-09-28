import Todo from './Todo';
import { useState } from 'react';

interface todolistProps {
  todoArr: string[];
}

function TodoList({ todoArr }: todolistProps) {
  const [todoVisible, setTodoVisible] = useState(true);
  function completeTodoHandler() {}
  return (
    <>
      <h2>Todo List</h2>
      <Todo key={Math.random()} title="new react 1" status="Complete" />
      {todoArr &&
        todoArr.map((todo: string) => (
          <Todo key={Math.random()} title={todo} status="Complete" />
        ))}
    </>
  );
}

export default TodoList;

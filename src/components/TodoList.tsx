import Todo from './Todo';
import { useState } from 'react';

interface todolistProps {
  todoArr: string[];
}

interface NewTodoProps {
  settodoArr: (todoArray: string[]) => void;
  todoArr: string[];
}
//{ todoArr }: todolistProps
function TodoList({ settodoArr, todoArr }: NewTodoProps) {
  const [todoVisible, setTodoVisible] = useState(true);
  function completeTodoHandler() {}
  return (
    <>
      <h2>Todo List</h2>
      {todoArr && todoArr.length > 0 ? (
        todoArr.map((todo: string) => (
          <Todo
            key={Math.random()}
            title={todo}
            status="Complete"
            settodoArr={settodoArr}
            todoArr={todoArr}
          />
        ))
      ) : (
        <p style={{ textAlign: 'center' }}>No Todos Yet!</p>
      )}
    </>
  );
}

export default TodoList;

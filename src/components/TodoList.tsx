import Todo from './Todo';
import { useState } from 'react';

interface todolistProps {
  todoArr: string[];
}

interface TodoListProps {
  settodoArr: (todoArray: string[]) => void;
  todoArr: string[];
  setTodoVisible: (todoVisible: boolean) => void;
  todoVisible: boolean;
}
//{ todoArr }: todolistProps
function TodoList({
  settodoArr,
  todoArr,
}: //setTodoVisible,
//todoVisible,
TodoListProps) {
  //const [todoVisible, setTodoVisible] = useState(true);
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
            //time={Date.now().valueOf}
            //setTodoVisible={setTodoVisible}
            //todoVisible={todoVisible}
          />
        ))
      ) : (
        <p style={{ textAlign: 'center' }}>No Todos Yet!</p>
      )}
    </>
  );
}

export default TodoList;

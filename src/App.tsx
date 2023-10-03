import { FC, useState } from 'react';
import NewTodo from './components/newTodo';
import TodoList from './components/TodoList';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [todoArr, settodoArr] = useState([]);
  //const [todoVisible, setTodoVisible] = useState(true);
  return (
    <>
      <h1>Todo Appication:</h1>
      <br />
      <h1 style={{ color: 'grey', fontWeight: 'normal' }}>V0</h1>
      {/* <button type="button" className="btn btn-success" >Complete</button> */}
      <NewTodo
        settodoArr={settodoArr}
        todoArr={todoArr}
        //setTodoVisible={setTodoVisible}
        //todoVisible={todoVisible}
      />
      <br />
      <TodoList
        settodoArr={settodoArr}
        todoArr={todoArr}
        //setTodoVisible={setTodoVisible}
        //todoVisible={todoVisible}
      />
    </>
  );
};

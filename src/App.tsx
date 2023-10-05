import { FC, useState, useReducer } from 'react';
import NewTodo from './components/newTodo';
import TodoList from './components/TodoList';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.css';

const initialState = { todoArray: [] };
const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'ADD':
      console.log(state);
      console.log(action.todo);
      //let newtodoArr = [...action.todoArray, action.todo];
      //return newtodoArr;
      return {
        ...state,
        todoArray: [...action.todoArray, action.todo],
      };

    default:
      return state;
  }
};

export const App: FC<{ name: string }> = ({ name }) => {
  const [todoArr, settodoArr] = useState([]);
  const [_, dispatch] = useReducer(reducer, initialState);
  //const [todoVisible, setTodoVisible] = useState(true);
  function addTodoHandlerReducer(todoy) {
    dispatch({ type: 'ADD', todoArray: todoArr, todo: todoy });
  }
  return (
    <>
      <h1>Todo Appication:</h1>
      <br />
      <h1 style={{ color: 'grey', fontWeight: 'normal' }}>V0</h1>
      {/* <button type="button" className="btn btn-success" >Complete</button> */}
      <NewTodo
        settodoArr={settodoArr}
        todoArr={todoArr}
        addtodoHandlerReducer={addTodoHandlerReducer}
        //setTodoVisible={setTodoVisible}
        //todoVisible={todoVisible}
      />
      <br />
      {console.log('the todo array is: ', todoArr)}
      <TodoList
        settodoArr={settodoArr}
        todoArr={todoArr}
        //setTodoVisible={setTodoVisible}
        //todoVisible={todoVisible}
      />
    </>
  );
};

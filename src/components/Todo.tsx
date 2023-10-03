import { useState } from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
// import NewTodo from './newTodo';

interface NewTodoProps {
  settodoArr: (todoArray: string[]) => void;
  todoArr: string[];
}

function Todo({ title, status }) {
  const [todoVisible, setTodoVisible] = useState(true);
  const [todoArr, settodoArr] = useState([]);
  function completeTodoHandler(index) {
    setTodoVisible(false);
    // const todos = todoArr.filter((todo, todoIndex) => {
    //   return todoIndex !== index;
    // });
    // settodoArr(todos);
    // let newtodos = [...todoArr];
    // newtodos.splice(index);
    // settodoArr(newtodos);
    //settodoArr(todoArr.filter((el) => el !== name));
  }
  return (
    <>
      {todoVisible && [
        <p
          style={{
            borderStyle: 'ridge',
            borderRadius: 5,
            borderWidth: 1.6,
            borderColor: 'white',
            height: 65,
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: 25,
              msTransform: 'translateY(25%)',
              transform: 'translateY(25%)',
              float: 'left',
              marginLeft: 20,
            }}
          >
            {title}
          </div>
          <button
            style={{
              msTransform: 'translateY(25%)',
              transform: 'translateY(25%)',
              float: 'right',
              marginRight: 20,
            }}
            type="button"
            className="btn btn-success align-middle redy"
            onClick={completeTodoHandler} //add (index)
          >
            {status}
          </button>{' '}
        </p>,
      ]}
    </>
  );
}

export default Todo;

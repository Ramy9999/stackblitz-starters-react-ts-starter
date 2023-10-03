import { useState } from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
// import NewTodo from './newTodo';

interface TodoProps {
  settodoArr: (todoArray: string[]) => void;
  todoArr: string[];
  title: string;
  status: string;
  //time: () => number;
  //setTodoVisible: (todoVisible: boolean) => void;
  //todoVisible: boolean;
}

function Todo({
  title,
  status,
  settodoArr,
  todoArr,
}: //time,
//setTodoVisible,
//todoVisible,
TodoProps) {
  const [todoVisible, setTodoVisible] = useState(true);
  //const [todoArr, settodoArr] = useState([]);
  //const [todoIndex, settodoIndex] = useState(0);
  function completeTodoHandler(event) {
    setTodoVisible(false);
    // const todos = todoArr.filter((todo, todoIndex) => {
    //   return todoIndex !== index;
    // });
    // settodoArr(todos);
    let newtodos = [...todoArr];
    //settodoIndex(event.target);
    let index = newtodos.indexOf(event.target.title);
    //alert(index);
    newtodos.splice(index, 1);
    settodoArr(newtodos);
    // var array = [...todoArr]; // make a separate copy of the array
    // var index = array.indexOf(e.target.value);
    // if (index !== -1) {
    //   array.splice(index, 1);
    //   settodoArr({ todoArr: array });
    // }

    // settodoArr(todoArr.filter((el) => el !== name));
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
            title={title} //maybe change to time
          >
            {status}
          </button>
        </p>,
      ]}
    </>
  );
}

export default Todo;

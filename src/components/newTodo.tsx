import 'bootstrap/dist/css/bootstrap.css';
import { useState, useReducer } from 'react';
import '../css/style.css';

interface NewTodoProps {
  settodoArr: (todoArray: string[]) => void;
  todoArr: string[];
  addtodoHandlerReducer: (
    //todoArry: string[],
    todo: string
  ) => void;
  //setTodoVisible: (todoVisible: boolean) => void;
  //todoVisible: boolean;
}

// const initialTodos = [];
// const reducer = (state, action) => {
//   console.log(action.type);
//   switch (action.type) {
//     case 'ADD':
//       console.log(state);
//       console.log(action.todo);
//       return [...action.todoArray, action.todo];
//     // return {
//     //   ...state,
//     //   todoArray: [...action.todoArray, action.todo],
//     // };

//     default:
//       return state;
//   }
// };

function NewTodo({
  settodoArr,
  todoArr,
  addtodoHandlerReducer,
}: //setTodoVisible,
//todoVisible,
NewTodoProps) {
  //const [todoVisible, setTodoVisible] = useState(false);
  const [todoText, setTodoText] = useState<string>('');
  //console.log('reducer is:', reducer);
  // const [_, dispatch] = useReducer(reducer, initialTodos);

  function addTodoHandler() {
    //settodoArr([...todoArr, todoText]);
    //setTodoText('');
    // todoArr = [...todoArr, todoText];
    console.log('New to do adding Array', todoArr);
    //setTodoVisible(true);
    // dispatch({ type: 'ADD', todoArray: todoArr, todo: todoText });
    addtodoHandlerReducer(todoText);
    //setTodoText('');
  }
  function onChangeHandler(event) {
    setTodoText(event.target.value);
  }
  return (
    <>
      <form>
        <div className="input-group mb-3">
          <input
            className="form-control beeko"
            // style={{
            //   width: '87%',
            //   height: '6.6vh',
            //   borderStyle: 'ridge',
            //   borderRadius: 5,
            //   borderWidth: 1.6,
            //   borderColor: 'white',
            // }}
            name="new"
            type="text"
            placeholder="Create a new todo"
            value={todoText}
            onChange={onChangeHandler}
          />
          {/* <div className="input-group-append"> */}
          <button
            type="button"
            className="btn btn-info text-white"
            //onClick={todoText != '' ? addTodoHandler : null}
            onClick={addTodoHandler}
          >
            Add
          </button>
          {/* </div> */}
        </div>
      </form>
    </>
  );
}

export default NewTodo;

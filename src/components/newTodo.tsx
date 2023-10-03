import 'bootstrap/dist/css/bootstrap.css';
import { useState, useReducer } from 'react';
import '../css/style.css';

interface NewTodoProps {
  settodoArr: (todoArray: string[]) => void;
  todoArr: string[];
  setTodoVisible: (todoVisible: boolean) => void;
  todoVisible: boolean;
}

const initialTodos = [];
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, todo };
        }
      });
    default:
      return state;
  }
};

function NewTodo({
  settodoArr,
  todoArr,
  setTodoVisible,
  todoVisible,
}: NewTodoProps) {
  //const [todoVisible, setTodoVisible] = useState(false);
  const [todoText, setTodoText] = useState<string>('');
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  function addTodoHandler() {
    settodoArr([...todoArr, todoText]);
    setTodoText('');
    setTodoVisible(true);
    dispatch('ADD');
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
            onClick={todoText != '' ? addTodoHandler : null}
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

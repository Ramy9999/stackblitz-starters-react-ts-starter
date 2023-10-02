import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

interface NewTodoProps {
  settodoArr: (todoArray: string[]) => void;
  todoArr: string[];
}

function NewTodo({ settodoArr, todoArr }: NewTodoProps) {
  const [todoText, setTodoText] = useState<string>('');

  function addTodoHandler() {
    settodoArr([...todoArr, todoText]);
    setTodoText('');
  }
  function onChangeHandler(event) {
    setTodoText(event.target.value);
  }
  return (
    <>
      <form>
        <div className="input-group mb-3">
          <input
            className="form-control"
            style={{
              width: '87%',
              height: '6.6vh',
              borderStyle: 'ridge',
              borderRadius: 5,
              borderWidth: 1.6,
              borderColor: 'white',
            }}
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

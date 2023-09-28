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
        <input
          name="new"
          type="text"
          placeholder="Create a new todo"
          value={todoText}
          onChange={onChangeHandler}
        />
        <button
          type="button"
          className="btn btn-info"
          onClick={todoText != '' ? addTodoHandler : null}
        >
          Add
        </button>
      </form>
    </>
  );
}

export default NewTodo;

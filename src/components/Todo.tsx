import { useState } from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.css';
// import NewTodo from './newTodo';



function Todo({ title, status }) {
  const [todoVisible, setTodoVisible] = useState(true);
  function completeTodoHandler() {
    setTodoVisible(false);
  }
  return (
    <>
      {todoVisible && [
        <p>
          {title}
          <button type="button" className="btn btn-success">
            {status}
          </button>
        </p>,
      ]}
    </>
  );
}

export default Todo;

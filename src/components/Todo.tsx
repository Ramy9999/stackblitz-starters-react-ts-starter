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
          {/* <div */}
          {/* // style={{ */}
          {/* //   margin: 0,
          //   position: 'absolute',
          //   top: '50%',
          //   msTransform: 'translateY(-50%)',
          //   transform: 'translateY(-50%)',
          // }
          > */}
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
            className="btn btn-success align-middle"
          >
            {status}
          </button>{' '}
          {/* // </div> */}
        </p>,
      ]}
    </>
  );
}

export default Todo;

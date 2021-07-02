import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Todo from "../components/Todo";

function Home({ toDos, addTodo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {toDos.map(todo => (
          <Todo text={todo.text} id={todo.id} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

// Redux state 로 부터 컴포넌트의 props 에게 전달해준다.
function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: text => dispatch(actionCreators.addTodo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

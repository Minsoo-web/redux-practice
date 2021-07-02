import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Todo({ text, id, onBtnClick }) {
  return (
    <li id={id}>
      {text} <button onClick={() => onBtnClick(id)}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: id => dispatch(actionCreators.deleteTodo(id))
  };
}

export default connect(null, mapDispatchToProps)(Todo);

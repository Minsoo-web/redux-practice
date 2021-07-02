import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

function Todo({ text, id, onBtnClick }) {
  return (
    <li id={id}>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={() => onBtnClick(id)}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: id => dispatch(remove(id))
  };
}

export default connect(null, mapDispatchToProps)(Todo);

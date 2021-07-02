import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      break;
  }
  return state;
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//
const addTodo = text => {
  return { type: ADD_TODO, text, id: Date.now() };
};

const deleteTodo = id => {
  return { type: DELETE_TODO, id };
};

//
const dispatchAddTodo = text => {
  store.dispatch(addTodo(text));
};

const dispatchDeleteTodo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(id));
};

const paintTodos = (old, newval) => {
  const toDos = store.getState();
  ul.innerHTML = ""; // 기존의 리스트를 다 지우고
  // 다시 그린다.
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");

    btn.innerText = "DEL";
    btn.type = "button";

    btn.addEventListener("click", dispatchDeleteTodo);

    li.id = toDo.id;
    li.innerText = toDo.text;

    li.appendChild(btn);
    ul.appendChild(li);
  });
};
store.subscribe(paintTodos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo);
};

form.addEventListener("submit", onSubmit);

import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

number.innerText = countStore.getState();

add.addEventListener("click", () => {
  countStore.dispatch({ type: ADD });
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});

const onChange = () => {
  console.log("there was a change on the store");
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

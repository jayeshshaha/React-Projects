import React from "react";
import { useState, useEffect } from "react";
import "../CSS/ToDo.css";

function gernerateId() {
  return Math.floor(Math.random() * 10);
}
const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function handleSubmit() {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: gernerateId(),
      })
    );
    setInput("");
  }

  function removeTodo(id) {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  }
  return (
    <>
      <div className="container">
        <div className="box1">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New Todo . . . . . "
        />
        <button onClick={handleSubmit} className="b1">Add</button>
        </div>
    
      <ul className="todos=list">
        {todos.map(({ text, id }) => {
          return (
            <li key={id} className="todo">
              <span>{text}</span>
              <button
                className="close"
                onClick={() => {
                  removeTodo(id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      </div>
    </>
  );
};

export default ToDo;

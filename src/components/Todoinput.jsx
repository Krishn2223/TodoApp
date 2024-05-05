import React, { useState } from "react";

function Todoinput(props) {
  const [inputText, setInputText] = useState("");
  return (
    <div className="input-container">
      <input
        className="input-box-todo"
        type="text"
        placeholder="enter task"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          //when we click on the '+' button the text in input field should be removed.
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default Todoinput;

import { useState } from "react";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
import "./App.css";

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    //we can not enter a blank task in list
    if (inputText !== "") {
      setListTodo([...listTodo, inputText]);
    }
    //listTodo : previously added tasks (add first)
    //inputtext : newly added task (add after listTodo)
  };

  const deleteListItem = (key) => {
    // storing prevoius array of item in a variable
    let newListTodo = [...listTodo];
    //deleting the item using splice function
    newListTodo.splice(key, 1);
    //updating list
    setListTodo([...newListTodo]);
  };

  return (
    <>
      <div className="main-container">
        <div className="center-container">
          {/* pass above function 'addList' in Todoinput */}
          <Todoinput addList={addList} />

          <h1 className="app-heading">TODO</h1>
          <hr />

          {listTodo.map((listItem, i) => {
            return (
              <Todolist
                index={i}
                key={i}
                item={listItem}
                deleteItem={deleteListItem}
              />
            );
          })}

          <Todolist />
        </div>
      </div>
    </>
  );
}

export default App;

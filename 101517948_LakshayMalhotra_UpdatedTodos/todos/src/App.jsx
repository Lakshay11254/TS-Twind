import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { v4 as uuidv4 } from "uuid";
uuidv4();
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { MdAddBox } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveToLocalStorage = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = (e) => {
    setshowFinished(!showFinished);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLocalStorage();
  };

  const handleDelete = (e, id) => {
    // let id = e.target.name;
    // console.log(`The id is ${id}`)
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    // console.log(index)
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLocalStorage();
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    // console.log("todo")
    saveToLocalStorage();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
    saveToLocalStorage();
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    console.log(id);

    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    console.log(index);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    //false then true, true then falsEe.
    setTodos(newTodos);
    saveToLocalStorage();
  };

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-2xl p-5 bg-violet-200 min-h-[80vh] md:w-1/2 ">
        <h1 className="flex mx-2 gap-2 items-center font-bold  text-center text-xl text-purple-800 hover:text-purple-600 text-balance">
          <FaClipboardList />
          Manage your Todos at one place
        </h1>
        <div className="addTodo my-2 flex flex-col gap-4">
          <h1 className="flex gap-2 mx-2 mt-8 items-center text-lg  font-bold text-purple-900 hover:text-purple-600">
            <MdFormatListBulletedAdd />
            Add a Todos
          </h1>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-full rounded-xl  px-5 py-1"
          />
          <button
            onClick={handleAdd}
            disabled={todo.length <= 0}
            className="flex flex-col items-center justify-between bg-purple-700  hover:bg-purple-900 disabled:bg-purple-500 p-2 py-1 text-xl font-bold text-white rounded-md  "
          >
            <MdAddBox />
          </button>
          {/* className="flex items-center justify-between bg-purple-700  hover:bg-purple-900 disabled:bg-purple-500 p-2 py-1 text-sm font-bold text-white rounded-md  "
          >
            Add<MdAddBox /></button> */}
        </div>
        <input
          className="my-4"
          onChange={toggleFinished}
          type="checkbox"
          checked={showFinished}
        />{" "}
        Show Finished
        <h2 className="text-lg font-semibold">Your Todo</h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-5">No Todos to display</div>}
          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div
                  key={item.id}
                  className="todo flex md:w-1/2 my-3 justify-between"
                >
                  <div className="flex gap-5">
                    <input
                      onChange={handleCheckbox}
                      name={item.id}
                      type="checkbox"
                      checked={item.isCompleted}
                      id=""
                    />
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons flex">
                    <button
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                      className="bg-green-700 hover:bg-green-900 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="bg-red-700 hover:bg-red-900 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

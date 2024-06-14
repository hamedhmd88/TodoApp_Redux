import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { addTodo, updateSearchTodo } from "../Redux/Action/actions";
import { BsSearch } from "react-icons/bs";
import FilterButton from "./FilterButton";
import List from "./List";
const Todo = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");
  const [searchText, setSearchText] = useState("");
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
    dispatch("")
    setTodoText("");
  }
  const saveTodo = () => {
    if (todoText.trim() !== ""){
      handleAddTodo(todoText.trim());
      setTodoText("");
    }
  }
  const handleSearchTodo = (value) => {
    setSearchText(value)
    dispatch(updateSearchTodo(value))
  }

  return (
    <div className=" max-w-4xl mx-auto sm:mt-8 bg-slate-400 rounded shadow-xl">
      <h2 className="mt-5 mb-6 p-5 text-4xl font-bold text-center text-blue-900"> لیست انجام کار </h2>

      {/* Input Button */}
      <div className="flex items-center mb-4 p-5">
        <input 
          type="text"
          placeholder="کار مورد نظر را وارد کنید"
          className="flex-grow p-2 border-b-2 bg-gray-600 text-xl rounded focus:outline-none focus:border-blue-500"
          name="text"
          id="addTodo"
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="mr-4 p-3 bg-blue-800 text-white rounded hover:bg-black focus:outline-none" onClick={saveTodo}><FaArrowAltCircleLeft/></button>
      </div>

      {/* Filter Search */}
      <div className="flex items-center justify-between flex-wrap">

        {/* Search */}

        <div className=" flex items-center justify-end mt-4 mb-4 sm:mt-0">
          <input 
            type="text"
            placeholder="جست و جو"
            value={searchText}
            name="text"
            onChange={(e) => handleSearchTodo(e.target.value)}
            id="addTodo"
            className=" rounded p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:mr-4"
          />
          <button className="p-2 mr-2 bg-blue-800 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={saveTodo}>
            <BsSearch />
          </button>
        </div>
        <FilterButton />
      </div>

        <List/>
    </div>
  )
}

export default Todo

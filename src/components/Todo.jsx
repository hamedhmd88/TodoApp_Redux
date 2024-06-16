import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { addTodo, updateSearchTodo } from "../Redux/Action/actions";
import { BsSearch } from "react-icons/bs";
import FilterButton from "./FilterButton";
import List from "./List";
import { useTranslation } from "react-i18next";

import iran from '../assets/images/iran.png'


const Todo = () => {

const {i18n: {changeLanguage, dir, language }, t} = useTranslation()


  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");
  const [searchText, setSearchText] = useState("");
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
    dispatch(" ")
    setTodoText(" ");
  }
  const saveTodo = () => {
    if (todoText.trim() !== ""){
      handleAddTodo(todoText.trim());
    }

  }
  const handleSearchTodo = (value) => {
    setSearchText(value)
    dispatch(updateSearchTodo(value))
  }

  const onChangeLocale = (e) => {
    // const {value} = e.target;
    // changeLanguage(value)
    // or
    changeLanguage(e.target.value)
  }

  return (
    <div dir={dir()} className=" max-w-4xl mx-auto my-10 py-6 sm:mt-8 bg-slate-400 rounded shadow-xl">
      
      <select 
        onChange={onChangeLocale} value={language}
        className=" m-2 cursor-pointer  text-lg px-2 py-1 ml-3 border-blue-300 bg-blue-800   text-white focus:outline-none rounded"
        >
        <option value="en">English</option>
        <option value="fa">Persian</option>
      </select>

      <h2 className={language === "fa" ? "mt-5 mb-6 p-5 text-4xl font-bold text-center text-blue-900" : "mt-5 mb-6 p-5 text-4xl font-bold text-center text-indigo-800"}>{t("todo")}</h2>

      {/* Input Button */}
      <div className="flex items-center mb-4 p-5">
        <input 
          type="text"
          placeholder={t("add todo")}
          className="flex-grow p-2 border-b-2 bg-gray-600 text-xl rounded focus:outline-none focus:border-blue-500"
          name="text"
          id="addTodo"
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className={language === "fa" ? "m-4  py-2 px-4 text-2xl bg-blue-800 rounded text-white  hover:bg-black focus:outline-none" : "m-4  py-2 px-4 text-2xl bg-[#4338ca] rounded text-white  hover:bg-blue-800 transition-all focus:outline-none"} onClick={saveTodo}>+</button>
      </div>

      {/* Filter Search */}
      <div className="flex items-center justify-between flex-wrap">

        {/* Search */}

        <div className=" flex items-center justify-end  m-4 sm:mt-0">
          <input 
            type="text"
            placeholder={t("search")}
            value={searchText}
            name="text"
            onChange={(e) => handleSearchTodo(e.target.value)}
            id="addTodo"
            className=" rounded p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:mr-4"
          />
          <button className={language == "fa" ? "p-2 mr-2 bg-blue-800 text-white rounded hover:bg-blue-600 transition-all focus:outline-none" : "p-2 mr-2 bg-indigo-800 text-white rounded hover:bg-blue-800 transition-all focus:outline-none"} onClick={saveTodo}>
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

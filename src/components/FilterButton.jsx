import { useDispatch, useSelector } from "react-redux";
import { filterTodo, markAllCompleted } from "../Redux/Action/actions";
import { useTranslation } from "react-i18next";


const FilterButton = () => {

  const {t} = useTranslation();

    const dispatch = useDispatch();
    const currentFilter = useSelector((state => state.filter))
    const handleFilter = (filter) => {
        dispatch(filterTodo(filter))
    }
  return (
    <div className="flex space-x-4 items-center m-4 mb-4">
    <select 
      value={currentFilter}
      onChange={(e) => handleFilter(e.target.value)}
      className=" cursor-pointer  text-lg px-2 py-1 ml-3 border-blue-300 bg-blue-800 hover:bg-blue-600  text-white focus:outline-none rounded"
      >
      <option value='ALL' >{t("all duties")} </option>
      <option value='COMPLETED' > {t("completed")} </option>
      <option value='INCOMPLETE' > {t("uncompleted")} </option>
      </select>
      <button onClick={() => dispatch(markAllCompleted())} className=" text-lg px-2 py-1 bg-blue-800 text-white ml-2 rounded hover:bg-blue-600">   {t("completed all")}    </button>
  </div>
  )
}

export default FilterButton

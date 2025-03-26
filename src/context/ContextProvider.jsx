import { createContext, useContext, useReducer, useState } from "react";
import { taskReducer } from "../reducer/taskReducer";
import { data } from "../data/data";

// Create a context for shared task state and functionality
const taskContext = createContext(null);

export default function ContextProvider({ children }) {
  const[tasks, dispatch] = useReducer(taskReducer, data)
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false); // Flag for modal visibility
  const [currentTask, setCurrentTask] = useState(null);

   // Define handlers for actions
   const handleSearchValue = (e) => setSearchValue(e.target.value);
   const handleShowModal = (action) => setShowModal(action);
   const handleCurrentTask = (data) => setCurrentTask(data);
  

  const state = {
    tasks,
    dispatch,
    showModal,
    currentTask,
    searchValue,
    handleSearchValue,
    handleShowModal,
    handleCurrentTask

  }
  return (
    <taskContext.Provider value={state}>{children}</taskContext.Provider>
  )
}

// Hook for access value from child components

// eslint-disable-next-line react-refresh/only-export-components
export function useTasks(){
    return useContext(taskContext)
    
}

import { createContext } from "react";

// Create a context for shared task state and functionality
const taskContext = createContext(null);

export default function ContextProvider({ children }) {
  

  const state = {

  }
  return (
    <taskContext.Provider value={state}>{children}</taskContext.Provider>
  )
}

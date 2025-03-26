import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TaskContainer from "./components/Tasks/TaskContainer";
import ContextProvider from "./context/ContextProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ContextProvider>
        <ToastContainer position="bottom-right" autoClose={2000} />
        <Header />
        <Hero />
        <TaskContainer />
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;

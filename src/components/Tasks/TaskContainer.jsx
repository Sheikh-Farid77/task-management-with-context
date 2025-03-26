import { useTasks } from "../../context/ContextProvider";
import NotFound from "../../ui/NotFound";
import ActionModal from "./ActionModal";
import TaskHeader from "./TaskHeader";
import Tasks from "./Tasks";

export default function TaskContainer() {
  const {
    tasks,
    showModal,
    currentTask,
    handleCurrentTask,
    searchValue,
  } = useTasks() || {};


  const filteredTasks = tasks?.filter(task => task.title.toLowerCase().includes(searchValue?.toLowerCase()));
 

  return (
    <section className="mb-20 !bg-[#191D26]" id="tasks">
      <div className="container mx-auto">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* render the task header */}
          <TaskHeader />
          {showModal && <ActionModal />}


          {
            filteredTasks.length > 0 ? (
              <Tasks filteredTasks = {filteredTasks}  />
            ) : (
              <NotFound />
            )
          }


        </div>
      </div>
    </section>
  );
}

import { useTasks } from "../../context/ContextProvider";
import ActionModal from "./ActionModal";
import TaskHeader from "./TaskHeader";

export default function TaskContainer() {
  const {
    tasks,
    showModal,
    handleShowModal,
    currentTask,
    handleCurrentTask,
    searchValue,
  } = useTasks() || {};

  return (
    <section className="mb-20 !bg-[#191D26]" id="tasks">
      <div className="container mx-auto">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* render the task header */}
          <TaskHeader />
          {showModal && <ActionModal />}
        </div>
      </div>
    </section>
  );
}

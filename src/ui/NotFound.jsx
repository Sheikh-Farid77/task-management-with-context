import { useTasks } from "../context/ContextProvider";
import Button from "./Button";

export default function NotFound(){
    const {tasks, handleShowModal} = useTasks();
    return (
        <div className="task-not-found">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            

            <h1 className="text-2xl font-bold text-white">
                {tasks?.length > 0
                    ? "Task Not Found"
                    : "Task List is empty!"}
            </h1>

            <p className="text-base text-gray-600 mt-2">
                The task you're looking for could not be found. It may have
                been deleted or moved.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center mt-4 sm:space-x-4">
                <Button
                    bg={"bg-blue-500"}
                    onClick={() => handleShowModal(true)}>
                    Create New Task
                </Button>
            </div>
        </div>
    </div>
    );
}
import { useTasks } from "../../context/ContextProvider";
import Button from "../../ui/Button";

export default function TaskAction(){
    const {handleShowModal} = useTasks();
    return (
        <>
        <Button
                bg={"bg-blue-500"}
                onClick={() => handleShowModal(true)} // Shows task creation modal
            >
                Add Task
            </Button>
        <Button bg={'bg-red-500'}>
            Delete All
        </Button>
        </>
    );
}
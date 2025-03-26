import { useTasks } from "../../context/ContextProvider";
import Button from "../../ui/Button";

export default function ActionModal() {

  const{handleShowModal} = useTasks();
  return (
    <>
    <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-[102] absolute left-1/4 top-1/4 after:bg-black/45 after:w-full after:h-full after:fixed after:top-0 after:left-0 after:-z-[11]">
      <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
        Add New Task
      </h2>

      {/* <!-- inputs --> */}
      <div className="space-y-9 text-white lg:space-y-10">
        {/* <!-- title --> */}
        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="title">Title</label>
          <input
            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
            type="text"
            name="title"
            id="title"
          />
        </div>
        {/* <!-- description --> */}
        <div className="space-y-2 lg:space-y-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
            type="text"
            name="description"
            id="description"
          ></textarea>
        </div>
        {/* <!-- input group --> */}
        <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
          {/* <!-- tags --> */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="tags">Tags</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="tags"
              id="tags"
            />
          </div>
          {/* <!-- priority --> */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="priority">Priority</label>
            <select
              className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
              name="priority"
              id="priority"
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>
      {/* <!-- inputs ends --> */}
      <div className="mt-16 flex justify-between lg:mt-20">
        <Button onClick={()=> handleShowModal(false)} bg={"bg-red-600"} type="button">
          Close
        </Button>
        <Button type="submit" bg={"bg-blue-600"}>
          Submit
        </Button>
      </div>
    </form>
    </>
  );
}

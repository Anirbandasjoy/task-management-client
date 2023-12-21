import Title from "../../../components/Title/Title";
import { MdOutlineDateRange } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import useFetchTask from "../../../hooks/useFetchTask";
const TodoList = () => {
  const { data } = useFetchTask("todo");
  console.log(data);
  return (
    <div>
      <Title title="Todo List" />
      <div className="mt-8 spy">
        <div className="bg-blue-200 p-4 border  border-blue-400">
          <h1 className="text-2xl font-semibold text-gray-700">
            hello i am job task title
          </h1>
          <p className="mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
            perferendis aliquam aperiam, beatae reprehenderit quisquam
            voluptates delectus! Numquam, aut! Similique.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex  items-center gap-2">
              <MdOutlineDateRange />
              <h2>12/21/2023</h2>
            </div>
            <div className="flex items-center gap-2">
              <RxUpdate />
              <h2>Low</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;

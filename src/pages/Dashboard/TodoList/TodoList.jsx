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
      <div className="mt-8 spy flex flex-col gap-3">
        {data?.map((task) => {
          return (
            <div
              key={task?._id}
              className="bg-gray-100 dark:bg-gray-800 p-4 border cursor-pointer border-blue-200"
            >
              <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                {task?.title}
              </h1>
              <p className="mt-2 dark:text-gray-300">{task?.description}</p>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex  items-center gap-2">
                  <MdOutlineDateRange className="dark:text-gray-300" />
                  <h2 className="dark:text-gray-300">{task?.deadline}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <RxUpdate className="dark:text-gray-300" />
                  <h2 className="dark:text-gray-300">{task?.priority}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;

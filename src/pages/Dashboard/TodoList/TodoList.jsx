import Title from "../../../components/Title/Title";
import { MdOutlineDateRange } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import useFetchTask from "../../../hooks/useFetchTask";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const TodoList = () => {
  const { data, refetch } = useFetchTask("todo");
  console.log(data);
  const handleDeleteTask = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/v1/task-delete/${id}`
      );
      console.log(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Message Send Successfully",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: "sweetalert-custom-popup",
          title: "sweetalert-custom-title", // Custom class for the title
          content: "sweetalert-custom-content", // Custom class for the content
          background: "sweetalert-custom-background",
        },
        backdrop: false,
      });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Title title="Todo List" />
      <div className="mt-8 spy flex flex-col gap-3 h-[calc(100vh-190px)] overflow-auto sm:overflow-visible ">
        {data?.map((task) => {
          return (
            <div
              key={task?._id}
              className="bg-gray-100  flex lg:items-center flex-col lg:flex-row lg:justify-between dark:bg-gray-800 p-4 border cursor-pointer border-blue-200"
            >
              <div>
                <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                  {task?.title}
                </h1>
                <p className="mt-2 dark:text-gray-300 text-justify">
                  {task?.description}
                </p>
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
              <div className="flex lg:flex-col flex-row gap-5 pl-3 mt-5 lg:mt-0 ">
                <button
                  onClick={() => handleDeleteTask(task?._id)}
                  className="btn btn-sm rounded-sm text-gray-200 text-xs w-16 btn-success"
                >
                  Delete
                </button>
                <Link
                  to={`/dashboard/task-update/${task?._id}`}
                  className="btn btn-sm rounded-sm text-gray-200 text-xs w-16 btn-success"
                >
                  Edit
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;

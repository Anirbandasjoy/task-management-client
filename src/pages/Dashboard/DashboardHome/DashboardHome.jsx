import { IoIosAdd } from "react-icons/io";
import Title from "../../../components/Title/Title";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Title title="Dashboard" />
        <div>
          <Link to="/dashboard/new-task">
            <button className="btn  btn-success btn-md  text-white rounded-md">
              <IoIosAdd size={20} />
              Add New
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

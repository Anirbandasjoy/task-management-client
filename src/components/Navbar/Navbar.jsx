import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost rounded-md text-xl">
            {" "}
            Task Manager
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="text-lg font-semibold" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-lg font-semibold" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

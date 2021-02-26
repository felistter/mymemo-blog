import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-white px-6 py-4 shadow">
      <div className="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <Link className="text-gray-800 text-xl font-bold md:text-2xl " to="/">
            <FontAwesomeIcon icon={faHeart} /> MyMEMO
          </Link>

          <div>
            <button
              type="button"
              className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="md:flex flex-col md:flex-row md:-mx-4 hidden">
          <Link
            className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
            to="/"
          >
            Home
          </Link>
          <Link
            className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
            to="/create"
          >
            New Post
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

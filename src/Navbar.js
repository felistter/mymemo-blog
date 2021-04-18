import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";

const Navbar = ({ firebase }) => {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  const history = useHistory();

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
            className="my-1 text-gray-800 hover:text-cyan-700 md:mx-4 md:my-0"
            to="/"
          >
            Home
          </Link>

          {user ? (
            <>
              <Link
                className="my-1 text-gray-800 hover:text-cyan-700 md:mx-4 md:my-0"
                to="/posts_admin"
              >
                My Posts
              </Link>

              <Link
                className="my-1 text-gray-800 hover:text-cyan-700 md:mx-4 md:my-0"
                to="/create"
              >
                New Post
              </Link>

              <button
                className="my-1 text-gray-800 hover:text-cyan-700 focus:outline-none active:outline-none md:mx-4 md:my-0"
                onClick={() => {
                  auth.signOut().then(() => {
                    history.push("/");
                  });
                }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              className="my-1 text-gray-800 hover:text-cyan-700 focus:outline-none active:outline-none md:mx-4 md:my-0"
              onClick={() => {
                const provider = new firebase.auth.GoogleAuthProvider();
                auth.signInWithPopup(provider).then(() => history.push("/"));
              }}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

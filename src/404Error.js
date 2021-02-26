import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <div className="inline-flex space-x-4 mt-60">
      <div className="flex-1">
        <FontAwesomeIcon className="fa-6x" icon={faExclamationCircle} />
      </div>
      <div className="flex-2 items-center">
        <h2 className="text-3xl text-cyan-700">Sorry...</h2>
        <p>That page does not exist</p>
        <Link className="hover:text-cyan-700" to="/">
          Back to the Homepage...
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

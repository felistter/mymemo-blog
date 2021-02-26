import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isPending, error } = useFetch(
    "http://localhost:8000/posts/" + id
  );
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/posts/" + post.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="mt-6">
      <div className="my-6 flex justify-center">
        {isPending && (
          <div className="flex justify-center mt-64">
            <FontAwesomeIcon className="fa-spin fa-3x" icon={faSpinner} />
          </div>
        )}
        {error && (
          <div className="flex flex-col justify-center mt-40">
            <div className="text-2xl text-cyan-700">{error}!</div>

            <div className="flex justify-center mt-5">
              <FontAwesomeIcon className="fa-6x" icon={faExclamationCircle} />
            </div>
          </div>
        )}

        {post && (
          <article className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
            <div className="mt-6 flex flex-row justify-between">
              <div className="flex flex-col ">
                <h2 className="flex text-2xl text-gray-700 font-bold">
                  {post.title}
                </h2>

                <h4 className="flex mt-2">
                  <span className="font-light text-gray-600">{post.date}</span>
                </h4>
              </div>

              <div className="flex items-center">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="mx-4 w-14 h-14 object-cover rounded-full hidden sm:block"
                />
                <h1 className="text-cyan-700 text-base">{post.author}</h1>
              </div>
            </div>

            <div className="mt-8 text-gray-600 text-justify">{post.body}</div>

            <button
              className="mt-8 px-2 py-1 bg-gray-600 text-white text-lg font-bold rounded hover:bg-gray-500"
              onClick={handleClick}
            >
              Delete
            </button>
          </article>
        )}
      </div>
    </div>
  );
};

export default PostDetails;

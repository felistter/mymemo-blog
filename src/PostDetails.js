import { useParams } from "react-router-dom";
import { useDocument } from "react-firebase-hooks/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import {
  faSpinner,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

const PostDetails = ({ firebase }) => {
  const { id } = useParams();

  let post = undefined;
  const [data, isPending, error] = useDocument(
    firebase.firestore().doc("posts/" + id)
  );

  if (data) {
    post = data.data();
  }

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
          <article className="max-w-4xl px-10 pt-7 pb-9 bg-white rounded-lg shadow-md">
            <div className="mt-6 flex flex-row justify-between">
              <div className="flex flex-col ">
                <h2 className="flex text-2xl text-gray-700 font-bold">
                  {post.title}
                </h2>

                <h4 className="flex mt-2">
                  <span className="font-light text-gray-600">
                    {moment.unix(post.date.seconds).format("MM/DD/YYYY")}
                  </span>
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
          </article>
        )}
      </div>
    </div>
  );
};

export default PostDetails;

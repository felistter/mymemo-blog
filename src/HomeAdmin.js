import useFetch from "./useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import PostListAdmin from "./PostListAdmin";

const HomeAdmin = ({ postsArray }) => {
  const { data: posts, isPending, error } = useFetch(
    "http://localhost:8000/posts"
  );
  return (
    <div className="px-6 py-8">
      <div className="flex justify-between container mx-auto">
        <div className="w-screen">
          {error && <div>{error}</div>}
          {isPending && (
            <div className="flex justify-center mt-64">
              <FontAwesomeIcon className="fa-spin fa-3x" icon={faSpinner} />
            </div>
          )}
          {posts && <PostListAdmin postsArray={posts} />}
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;

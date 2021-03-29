import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const PostListAdmin = ({ postsArray }) => {
  const history = useHistory();

  const handleDeleteClick = (id) => {
    fetch("http://localhost:8000/posts/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/posts_admin");
    });
  };

  const handleEditClick = (id) => {
    fetch("http://localhost:8000/edit/" + id, {});
  };

  return (
    <>
      {postsArray.map((post_item) => (
        <div className="my-6 flex justify-center">
          <div
            className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md"
            key={post_item.id}
          >
            <h4 className="flex justify-between items-center">
              <span className="font-light text-gray-600">{post_item.date}</span>
            </h4>

            <Link to={`/posts/${post_item.id}`}>
              <h2 className="mt-2">
                <div className="text-2xl text-gray-700 font-bold hover:text-cyan-700">
                  {post_item.title}
                </div>
              </h2>
            </Link>
            <button
              className="mt-8 px-2 py-1 bg-gray-600 text-white text-lg font-bold rounded hover:bg-gray-500"
              onClick={() => handleDeleteClick(post_item.id)}
            >
              Delete
            </button>

            <Link to={`/edit/${post_item.id}`}>Edit</Link>

            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <h1 className="text-gray-700 text-base">{post_item.author}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostListAdmin;

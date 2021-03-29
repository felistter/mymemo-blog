import { Link } from "react-router-dom";

const PostList = ({ postsArray }) => {
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

            <p className="mt-2 text-gray-600">{post_item.description} ...</p>

            <div className="flex justify-between items-center mt-4">
              <Link
                className="text-cyan-700 text-base"
                to={`/posts/${post_item.id}`}
              >
                Read more
              </Link>

              <div className="flex items-center">
                <img
                  src={post_item.avatar}
                  alt={post_item.author}
                  className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                />
                <h1 className="text-gray-700 text-base">{post_item.author}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostList;

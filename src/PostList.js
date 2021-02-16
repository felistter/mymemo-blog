import { Link } from "react-router-dom";

const PostList = ({ postsArray }) => {
  return (
    <div className="post-list">
      {postsArray.map((post_item) => (
        <div className="post-preview" key={post_item.id}>
          <Link to={`/posts/${post_item.id}`}>
            <h2>{post_item.title}</h2>
            <p>Written by {post_item.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;

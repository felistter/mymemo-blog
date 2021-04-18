import { Link } from "react-router-dom";
import moment from "moment";

const PostList = ({ postsDocs }) => {
  
  return (
    <>
      {postsDocs.map((doc) => (
        <div className="my-6 flex justify-center" key={doc.id}>
          <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
            <h4 className="flex justify-between items-center">
              <span className="font-light text-gray-600">
                {moment.unix(doc.data().date.seconds).format("MM/DD/YYYY")}
              </span>
            </h4>

            <Link to={`/posts/${doc.id}`}>
              <h2 className="mt-2">
                <div className="text-2xl text-gray-700 font-bold hover:text-cyan-700">
                  {doc.data().title}
                </div>
              </h2>
            </Link>

            <p className="mt-2 text-gray-600">{doc.data().description} ...</p>

            <div className="flex justify-between items-center mt-4">
              <Link className="text-cyan-700 text-base" to={`/posts/${doc.id}`}>
                Read more
              </Link>

              <div className="flex items-center">
                <img
                  src={doc.data().avatar}
                  alt={doc.data().author}
                  className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                />
                <h1 className="text-gray-700 text-base">{doc.data().author}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostList;

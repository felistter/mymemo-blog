import { Link } from "react-router-dom";
import moment from "moment";

const PostListAdmin = ({ firebase, postsDocs }) => {
  
  const handleDeleteClick = (id) => {
    firebase
      .firestore()
      .doc("posts/" + id)
      .delete();
  };

  return (
    <>
      {postsDocs.map((doc) => (
        <div className="my-6 flex justify-center" key={doc.id}>
          <div className="w-3/5 px-10 py-6 bg-white rounded-lg shadow-md">
            <h4 className="flex justify-between items-center">
              <span className="font-light text-gray-600">
                {moment.unix(doc.data().date.seconds).format("MM/DD/YYYY")}
              </span>
            </h4>

            <div className="flex flex-row">
              <div className="flex flex-grow mr-10">
                <Link to={`/posts/${doc.id}`}>
                  <h2 className="mt-2">
                    <div className="text-2xl text-gray-700 font-bold hover:text-cyan-700">
                      {doc.data().title}
                    </div>
                  </h2>
                </Link>
              </div>
              <div className="flex space-x-4">
                <button
                  className="h-10 w-20 mt-2 px-2 py-1  bg-gray-600 text-white text-lg font-bold rounded hover:bg-gray-500"
                  onClick={() => handleDeleteClick(doc.id)}
                >
                  Delete
                </button>

                <Link to={`/edit/${doc.id}`}>
                  <button className="h-10 w-20 mt-2 px-2 py-1 bg-gray-600 text-white text-lg font-bold rounded hover:bg-gray-500">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostListAdmin;

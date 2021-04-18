import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditCreate = ({ firebase }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    firebase
      .firestore()
      .doc("posts/" + id)
      .onSnapshot((snapshot) => {
        const newPost = snapshot.data();
        setTitle(newPost.title);
        setBody(newPost.body);
        setDescription(newPost.description);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .doc("posts/" + id)
      .update({ title, body, description });
    history.push("/");
    setIsPending(true);
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-1">
        <div className="mt-20 px-6">
          <h1 className="text-2xl text-gray-700 font-bold">Edit the Post!</h1>
          <p className="mt-1 text-xl text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <form
          className="px-10 py-6 bg-white rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <div classname="shadow overflow-hidden">
            <div className="">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label className="text-lg text-gray-600">Post title:</label>
                  <input
                    className="mt-1 focus:ring-cyan-700 focus:border-cyan-700 block w-full shadow-sm border-gray-300 rounded-md"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="col-span-6">
                  <label className="text-lg text-gray-600">
                    Post description:
                  </label>
                  <textarea
                    maxLength={510}
                    className="mt-1 focus:ring-cyan-700 focus:border-cyan-700 block w-full shadow-sm border-gray-300 rounded-md"
                    required
                    value={description}
                    placeholder="max. 500 symbols"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="col-span-6">
                  <label className="text-lg text-gray-600">Post body:</label>
                  <textarea
                    className="mt-1 focus:ring-cyan-700 focus:border-cyan-700 block w-full shadow-sm border-gray-300 rounded-md"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>

            {!isPending && (
              <button className="mt-8 px-2 py-1 bg-gray-600 text-white text-lg font-bold rounded hover:bg-gray-500">
                Update Post
              </button>
            )}
            {isPending && (
              <button className="mt-8 px-2 py-1 bg-gray-600 text-white text-lg font-bold rounded hover:bg-gray-500">
                Updating Post...
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCreate;

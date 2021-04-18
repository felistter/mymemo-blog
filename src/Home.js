import PostList from "./PostList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useCollection } from "react-firebase-hooks/firestore";

const Home = ({ firebase }) => {
  const firestore = firebase.firestore();
  const [posts, isPending, error] = useCollection(
    firestore.collection("posts").orderBy("date", "desc")
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
          {posts && <PostList postsDocs={posts.docs} />}
        </div>
      </div>
    </div>
  );
};

export default Home;

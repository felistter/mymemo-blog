import { useCollection } from "react-firebase-hooks/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import PostListAdmin from "./PostListAdmin";

const HomeAdmin = ({ firebase }) => {
  const firestore = firebase.firestore();
  const auth = firebase.auth();
  const { uid } = auth.currentUser;
  const [posts, isPending, error] = useCollection(
    firestore.collection("posts").where("uid", "==", uid)
    // .orderBy("date", "desc")
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
          {posts && (
            <PostListAdmin postsDocs={posts.docs} firebase={firebase} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;

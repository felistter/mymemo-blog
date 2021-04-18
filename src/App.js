import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import PostDetails from "./PostDetails";
import NotFound from "./404Error";
import HomeAdmin from "./HomeAdmin";
import EditCreate from "./EditCreate";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "mymood-blog.firebaseapp.com",
  projectId: "mymood-blog",
  storageBucket: "mymood-blog.appspot.com",
  messagingSenderId: "1047788055126",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-100 overflow-x-hidden">
        <Navbar firebase={firebase} />
        <div className="flex flex-grow justify-center">
          <Switch>
            <Route exact path="/">
              <Home firebase={firebase} />
            </Route>
            <Route path="/create">
              <Create firebase={firebase} />
            </Route>
            <Route path="/posts_admin">
              <HomeAdmin firebase={firebase} />
            </Route>
            <Route path="/posts/:id">
              <PostDetails firebase={firebase} />
            </Route>
            <Route path="/edit/:id">
              <EditCreate firebase={firebase} />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

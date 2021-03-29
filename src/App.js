import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import PostDetails from "./PostDetails";
import NotFound from "./404Error";
import HomeAdmin from "./HomeAdmin";
import EditCreate from "./EditCreate";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-100 overflow-x-hidden">
        <Navbar />
        <div className="flex flex-grow justify-center">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/posts_admin">
              <HomeAdmin />
            </Route>
            <Route path="/posts/:id">
              <PostDetails />
            </Route>
            <Route path="/edit/:id">
              <EditCreate />
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

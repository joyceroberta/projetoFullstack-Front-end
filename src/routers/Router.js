import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreatePostPage from "../screens/createPost/CreatePost";
import FeedPage from "../screens/feedPage/FeedPage";
import HomePage from "../screens/homePage/HomePage";
import LoginPage from "../screens/loginPage/LoginPage";
import PostPage from "../screens/postPage/PostPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path={["/signup", "/"]}>
          <HomePage />
        </Route>

        <Route exact path="/create">
          <CreatePostPage />
        </Route>

        <Route exact path="/feed">
          <FeedPage />
        </Route>

        <Route exact path="/post/:id">
          <PostPage />
        </Route>

        <Route>
            <div>
                Page not found
            </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

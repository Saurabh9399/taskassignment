import "./App.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Dashboard from "./Dashboard";
import { useEffect } from "react";
import Header from "./Header";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
          })
        );
      }
      // else {
      // }
    });
  }, []);

  return (
    <div>
      <Router>
        <Header />
        {!user ? (
          <>
            <SignIn />
            <SignUp />
          </>
        ) : (
          <Switch>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;

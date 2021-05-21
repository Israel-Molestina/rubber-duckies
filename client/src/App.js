import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Assessment from "./pages/Assessment";


function App() {
  return (

    <Router>
      <div>
        <Switch>
          <Route exact path={["/","/home"]}>
            <Homepage />
          </Route>
          <Route exact path={"/profile"}>
            <Profile />
          </Route>
          <Route exact path={"/signup"}>
            <Signup/>
          </Route>
          <Route exact path={"/login"}>
            <Login/>
          </Route>
          <Route exact path={"/assessment"}>
            <Assessment/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
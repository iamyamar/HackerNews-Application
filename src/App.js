import React from "react";
import "./App.css";
import Navb from "./Components/Navb";
import Home from "./Components/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Hackerpage from "./Components/Hackerpage";

const App = () => {
  return (
    <div>
      <Navb />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="hackerpage/:id" component={Hackerpage} />
      </Switch>
    </div>
  );
};

export default App;

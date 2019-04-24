import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dogs from "./components/Dogs";
import Cats from "./components/Cats";
import MainPage from "./components/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/dogs" render={props => <Dogs {...props} />} />
          <Route path="/cats" render={props => <Cats {...props} />} />
          <Route path="/main" render={props => <MainPage {...props} />} />
          <Redirect to="/main" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

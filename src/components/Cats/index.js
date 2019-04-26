import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CatList from "./CatList";
import CatDetails from "./CatDetails";
import CatEdit from "./CatEdit";
import CatCreate from "./CatCreate";

class Cats extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/cats" render={props => <CatList {...props} />} />
          <Route
            exact
            path="/cats/create"
            render={props => <CatCreate {...props} />}
          />
          <Route
            exact
            path="/cats/:id"
            render={props => <CatDetails {...props} />}
          />
          <Route
            exact
            path="/cats/edit/:id"
            render={props => <CatEdit {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Cats;

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import DogEdit from "./DogEdit";
import DogCreate from "./DogCreate";

class Dogs extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/dogs" render={props => <DogList {...props} />} />
          <Route
            exact
            path="/dogs/create"
            render={props => <DogCreate {...props} />}
          />
          <Route
            exact
            path="/dogs/:id"
            render={props => <DogDetails {...props} />}
          />
          <Route
            exact
            path="/dogs/edit/:id"
            render={props => <DogEdit {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Dogs;

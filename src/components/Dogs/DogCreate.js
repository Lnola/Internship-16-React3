import React, { Component } from "react";

class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Add:</h1>
        <span>Name: </span>
        <textarea />
        <br />
        <span>Description: </span>
        <textarea />
      </div>
    );
  }
}

export default DogList;

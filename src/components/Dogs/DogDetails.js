import React, { Component } from "react";
import { fetchDogById } from "../../utils";

class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: null
    };
  }

  componentDidMount() {
    fetchDogById(0).then(data => {
      this.setState({ dog: data });
    });
  }

  render() {
    const { dog } = this.state;
    if (dog === null) return null;
    return (
      <div>
        <h1>Details</h1>
        <span>Name: </span>
        <span>{dog.name}</span>
        <br />
        <span>Description: </span>
        <span>{dog.description}</span>
      </div>
    );
  }
}

export default DogList;

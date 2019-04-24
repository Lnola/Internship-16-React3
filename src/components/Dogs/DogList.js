import React, { Component } from "react";
import { fetchDogs } from "../../utils";

class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogList: null
    };
  }

  componentDidMount() {
    fetchDogs().then(data => {
      this.setState({ dogList: data });
    });
  }

  render() {
    const { dogList } = this.state;
    if (dogList === null) return null;
    return (
      <div>
        <h1>All dogs:</h1>
        {dogList.map((dog, index) => (
          <p key={index}>{dog.name}</p>
        ))}
      </div>
    );
  }
}

export default DogList;

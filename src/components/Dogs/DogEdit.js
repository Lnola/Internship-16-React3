import React, { Component } from "react";
import { fetchDogById, editDog } from "../../utils";

class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: null
    };
  }

  componentDidMount() {
    fetchDogById(0).then(data => {
      this.setState({
        dog: data,
        name: data.name,
        description: data.description
      });
    });
  }

  handleInput = (e, isName) => {
    if (isName) this.setState({ name: e.target.value });
    else this.setState({ description: e.target.value });
  };

  handleSave = () => {
    editDog(0, this.state.name, this.state.description);
  };

  render() {
    const { dog } = this.state;
    if (dog === null) return null;
    return (
      <div>
        <div>
          <h1>Edit</h1>
          <span>Name: </span>
          <textarea
            value={this.state.name}
            onChange={e => this.handleInput(e, true)}
          />
          <br />
          <span>Description: </span>
          <textarea
            value={this.state.description}
            onChange={e => this.handleInput(e, false)}
          />
        </div>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default DogList;

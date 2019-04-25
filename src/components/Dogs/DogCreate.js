import React, { Component } from "react";
import { Link } from "react-router-dom";
import { saveDog } from "../../utils";

class DogCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInput = (e, isName) => {
    if (isName) this.setState({ name: e.target.value });
    else this.setState({ description: e.target.value });
  };

  handleSave = () => {
    const { name, description } = this.state;
    const { history } = this.props;
    if (name !== undefined && description !== undefined)
      saveDog(this.state.name, this.state.description).then(response =>
        history.push(`/dogs/${response.id}`)
      );
    else alert("Wrong input");
  };

  render() {
    return (
      <div>
        <div>
          <h1>Create</h1>
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
        <Link to={`/dogs`}>
          <button>Close</button>
        </Link>
      </div>
    );
  }
}

export default DogCreate;

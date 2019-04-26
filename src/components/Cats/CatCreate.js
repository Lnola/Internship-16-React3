import React, { Component } from "react";
import { Link } from "react-router-dom";
import { saveAnimal } from "../../utils";

class CatCreate extends Component {
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
      saveAnimal("cats", this.state.name, this.state.description).then(
        response => history.push(`/cats/${response.id}`)
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
        <Link to={`/cats`}>
          <button>Close</button>
        </Link>
      </div>
    );
  }
}

export default CatCreate;

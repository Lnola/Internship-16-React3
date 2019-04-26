import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchAnimalById, editAnimal } from "../../utils";

class CatEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetchAnimalById("cats", id).then(data => {
      this.setState({
        cat: data,
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
    const { cat, name, description } = this.state;
    const { history } = this.props;
    if (name !== "" && description !== "") {
      editAnimal("cats", cat.id, this.state.name, this.state.description).then(
        response => history.push(`/cats/${response.id}`)
      );
    } else alert("Wrong input");
  };

  render() {
    const { cat } = this.state;
    if (cat === null) return null;
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
        <Link to={`/cats`}>
          <button onClick={this.handleSave}>Close</button>
        </Link>
      </div>
    );
  }
}

export default CatEdit;

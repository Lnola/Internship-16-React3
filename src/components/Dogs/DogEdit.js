import React, { Component } from "react";
import { Link } from "react-router-dom";
import { editAnimal, fetchAnimalById } from "../../utils";

class DogEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetchAnimalById("dogs", id).then(data => {
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
    const { dog, name, description } = this.state;
    const { history } = this.props;
    if (name !== "" && description !== "") {
      editAnimal("dogs", dog.id, this.state.name, this.state.description).then(
        response => history.push(`/dogs/${response.id}`)
      );
    } else alert("Wrong input");
  };

  render() {
    const { dog } = this.state;
    if (dog === null) return null;
    return (
      <div className="bonus-wrap">
        <div className="input-wrap">
          <div>
            <h1>Edit</h1>
            <span className="name">Name: </span>
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
          <div className="input-buttons">
            <button onClick={this.handleSave}>Save</button>
            <Link to={`/dogs`}>
              <button onClick={this.handleSave}>Close</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DogEdit;

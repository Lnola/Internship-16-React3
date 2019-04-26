import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchAnimalById, deleteAnimal } from "../../utils";

class CatDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetchAnimalById("cats", id).then(data => {
      this.setState({ cat: data });
    });
  }

  handleDelete = () => {
    const { id } = this.state.cat;
    deleteAnimal("cats", id);
  };

  render() {
    const { cat } = this.state;
    if (cat === null) return null;
    return (
      <div>
        <div>
          <h1>Details</h1>
          <span>Name: </span>
          <span>{cat.name}</span>
          <br />
          <span>Description: </span>
          <span>{cat.description}</span>
        </div>
        <Link to={`/cats/edit/${cat.id}`}>
          <button>Edit</button>
        </Link>
        <Link to="/cats">
          <button onClick={this.handleDelete}>Delete</button>
        </Link>
        <Link to="/cats">
          <button>Close</button>
        </Link>
      </div>
    );
  }
}

export default CatDetails;

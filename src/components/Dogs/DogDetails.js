import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchDogById, deleteDog } from "../../utils";

class DogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetchDogById(id).then(data => {
      this.setState({ dog: data });
    });
  }

  handleDelete = () => {
    const { id } = this.state.dog;
    deleteDog(id);
  };

  render() {
    const { dog } = this.state;
    if (dog === null) return null;
    return (
      <div>
        <div>
          <h1>Details</h1>
          <span>Name: </span>
          <span>{dog.name}</span>
          <br />
          <span>Description: </span>
          <span>{dog.description}</span>
        </div>
        <Link to={`/dogs/edit/${dog.id}`}>
          <button>Edit</button>
        </Link>
        <Link to="/dogs">
          <button onClick={this.handleDelete}>Delete</button>
        </Link>
        <Link to="/dogs">
          <button>Close</button>
        </Link>
      </div>
    );
  }
}

export default DogDetails;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchAnimals, deleteAnimal } from "../../utils";

class DogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogList: null
    };
  }

  componentDidMount() {
    fetchAnimals("dogs").then(data => {
      this.setState({ dogList: data });
    });
  }

  handleDelete = dog => {
    const { id } = dog;
    deleteAnimal("dogs", id);
  };

  render() {
    const { dogList } = this.state;
    if (dogList === null) return null;

    this.componentDidMount();
    return (
      <div>
        <h1>All dogs:</h1>
        {dogList.map((dog, index) => (
          <div>
            <span key={index}>{dog.name} </span>
            <Link to={`/dogs/${dog.id}`}>
              <button>Details</button>
            </Link>
            <Link to={`/dogs/edit/${dog.id}`}>
              <button>Edit</button>
            </Link>
            <Link to="/dogs">
              <button onClick={() => this.handleDelete(dog)}>Delete</button>
            </Link>
          </div>
        ))}
        <Link to={`/dogs/create`}>
          <button>Create</button>
        </Link>
        <Link to="/main">
          <button>Close</button>
        </Link>
      </div>
    );
  }
}

export default DogList;

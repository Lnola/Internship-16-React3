import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchAnimals, deleteAnimal } from "../../utils";

class CatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catList: null
    };
  }

  componentDidMount() {
    fetchAnimals("cats").then(data => {
      this.setState({ catList: data });
    });
  }

  handleDelete = cat => {
    const { id } = cat;
    deleteAnimal("cats", id);
  };

  render() {
    const { catList } = this.state;
    if (catList === null) return null;

    this.componentDidMount();
    return (
      <div>
        <h1>All cats:</h1>
        {catList.map((cat, index) => (
          <div>
            <span key={index}>{cat.name} </span>
            <Link to={`/cats/${cat.id}`}>
              <button>Details</button>
            </Link>
            <Link to={`/cats/edit/${cat.id}`}>
              <button>Edit</button>
            </Link>
            <Link to="/cats">
              <button onClick={() => this.handleDelete(cat)}>Delete</button>
            </Link>
          </div>
        ))}
        <Link to={`/cats/create`}>
          <button>Create</button>
        </Link>
        <Link to="/main">
          <button>Close</button>
        </Link>
      </div>
    );
  }
}

export default CatList;

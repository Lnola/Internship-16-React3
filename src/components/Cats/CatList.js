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
    deleteAnimal("cats", id).then(() => this.componentDidMount());
  };

  render() {
    const { catList } = this.state;
    if (catList === null) return null;

    // this.componentDidMount();
    return (
      <div className="background-wrap">
        <div className="foreground-wrap">
          <h1>All cats:</h1>
          {catList.map((cat, index) => (
            <div key={index}>
              <span key={index}>{cat.name} </span>
              <Link to={`/cats/${cat.id}`}>
                <button key={index}>Details</button>
              </Link>
              <Link to={`/cats/edit/${cat.id}`}>
                <button key={index}>Edit</button>
              </Link>
              <Link to="/cats">
                <button key={index} onClick={() => this.handleDelete(cat)}>
                  Delete
                </button>
              </Link>
            </div>
          ))}
          <div className="down-buttons">
            <Link to={`/cats/create`}>
              <button>Create</button>
            </Link>
            <Link to="/main">
              <button>Close</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CatList;

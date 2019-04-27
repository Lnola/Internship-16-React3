import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchAnimalById, deleteAnimal } from "../../utils";

class DogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetchAnimalById("dogs", id).then(data => {
      this.setState({ dog: data });
    });
  }

  handleDelete = () => {
    const { id } = this.state.dog;
    const { history } = this.props;
    deleteAnimal("dogs", id).then(response => history.push(`/dogs`));
  };

  render() {
    const { dog } = this.state;
    if (dog === null) return null;
    return (
      <div className="bonus-wrap">
        <div className="input-wrap details-wrapper">
          <div className="details-wrap">
            <h1 className="details">Details</h1>
            <span className="details-indicator">Name: </span>
            <span className="details-content">{dog.name}</span>
            {/* <br /> */}
            <span className="details-indicator">Description: </span>
            <span className="details-content">{dog.description}</span>
          </div>
          <div className="details-buttons">
            <Link to={`/dogs/edit/${dog.id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={this.handleDelete}>Delete</button>
            <Link to="/dogs">
              <button>Close</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DogDetails;

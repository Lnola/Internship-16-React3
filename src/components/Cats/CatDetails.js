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
    const { history } = this.props;
    deleteAnimal("cats", id).then(() => history.push(`/cats`));
  };

  render() {
    const { cat } = this.state;
    if (cat === null) return null;
    return (
      <div className="bonus-wrap">
        <div className="input-wrap details-wrapper">
          <div className="details-wrap">
            <h1 className="details">Details</h1>
            <span className="details-indicator">Name: </span>
            <span className="details-content">{cat.name}</span>
            {/* <br /> */}
            <span className="details-indicator">Description: </span>
            <span className="details-content">{cat.description}</span>
          </div>
          <div className="details-buttons">
            <Link to={`/cats/edit/${cat.id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={this.handleDelete}>Delete</button>
            <Link to="/cats">
              <button>Close</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CatDetails;

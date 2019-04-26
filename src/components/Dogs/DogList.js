import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchAnimals, deleteAnimal, thanosDelete } from "../../utils";

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

  //Doesn't work as intended

  // handleThanosDelete = () => {
  //   const { dogList } = this.state;
  //   const min = 1;
  //   const max = dogList.length;
  //   let deletedIdArray = [];

  //   for (let i = 1; i <= dogList.length / 2; i++) {
  //     let rand = parseInt(min + Math.random() * (max - min), 10);
  //     for (let j = 1; j <= dogList.length; j++) {
  //       if (rand === j && !deletedIdArray.includes(j)) {
  //         deletedIdArray.push(j);
  //       }
  //     }
  //   }

  //   console.log(deletedIdArray);

  //   deletedIdArray.forEach(number => {
  //     // this.handleDelete(dogList[number]);
  //     console.log(number);
  //   });
  // };

  render() {
    const { dogList } = this.state;
    if (dogList === null) return null;

    // this.componentDidMount();
    return (
      <div className="background-wrap">
        <div className="foreground-wrap">
          <h1>All dogs:</h1>
          <div>
            {dogList.map((dog, index) => (
              <div key={index}>
                <span key={index}>{dog.name} </span>
                <Link to={`/dogs/${dog.id}`}>
                  <button key={index}>Details</button>
                </Link>
                <Link to={`/dogs/edit/${dog.id}`}>
                  <button key={index}>Edit</button>
                </Link>
                <Link to="/dogs">
                  <button key={index} onClick={() => this.handleDelete(dog)}>
                    Delete
                  </button>
                </Link>
              </div>
            ))}
          </div>
          <div className="down-buttons">
            <Link to={`/dogs/create`}>
              <button>Create</button>
            </Link>
            <Link to="/main">
              <button>Close</button>
            </Link>
            <button onClick={this.handleThanosDelete}>Thanos delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DogList;

import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="animal">
    <h1 className="dogs-image">
      <Link to="/dogs">Dogs</Link>
    </h1>
    <h1 className="cats-image">
      <Link to="/cats">Cats</Link>
    </h1>
  </div>
);

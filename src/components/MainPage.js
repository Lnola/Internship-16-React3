import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div>
    <h1>
      <Link to="/dogs">Dogs</Link>
    </h1>
    <h1>
      <Link to="/cats">Cats</Link>
    </h1>
  </div>
);

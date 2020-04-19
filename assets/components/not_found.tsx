import * as React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => (
  <section>
    <h2 ref="title">404. Not found.</h2>
    <Link to="/">Go to index</Link>
  </section>
);

import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>home</li>
        </Link>
        <Link to="/posts">
          <li>posts</li>
        </Link>
      </ul>
    </div>
  );
}

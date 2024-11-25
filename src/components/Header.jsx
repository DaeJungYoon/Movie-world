import React from "react";
import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Movie World</Link>
        </li>
       
      </ul>
    </header>
  );
}

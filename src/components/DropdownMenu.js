import React from "react";
import { Link } from "react-router-dom";
function DropdownMenu() {
  return (
    <div className="dropdown-container" id="dropdown-container">
      <Link className="dropdown-item">Category A</Link>
      <Link className="dropdown-item">Category B</Link>
      <Link className="dropdown-item">Category C</Link>
    </div>
  );
}

export default DropdownMenu;

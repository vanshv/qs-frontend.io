import React from "react";
import "./Dropdown.css";

const Dropdown = ({groupBy, setGroupBy, sortBy, setSortBy}) => {
  return (
    <div className="board-container">
      <div className="dropdown-container">
        <div className="dropdown">
          <label htmlFor="groupBy">Group By:</label>
          <select
            id="groupBy"
            value={groupBy}
            onChange={(e) => setGroupBy(e.target.value)}
          >
            <option value="priority">Priority</option>
            <option value="status">Status</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="sortBy">Sort By:</label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;

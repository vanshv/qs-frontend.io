import React from "react";
import Board from "./Board";
import { useState } from "react";
import { useEffect } from "react";
import Dropdown from "./Dropdown";

const App = () => {
  const [groupBy, setGroupBy] = useState(() => {
    return localStorage.getItem("groupBy") || "priority";
  });
  const [sortBy, setSortBy] = useState(() => {
    return localStorage.getItem("sortBy") || "priority";
  });

  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
  }, [groupBy]);

  useEffect(() => {
    localStorage.setItem("sortBy", sortBy);
  }, [sortBy]);
  // use local storage to store the groupBy and sortBy values

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Dropdown groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy} />
      <Board tickets={data["tickets"]} users={data['users']} groupBy={groupBy} sortBy={sortBy}/>
    </div>
  );
};

export default App;
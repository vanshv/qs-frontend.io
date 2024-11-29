import React from "react";
import "./Board.css";
import Card from "./Card";

const Board = ({data}) => {
  const columns = [
    { id: "no-priority", title: "No priority", cards: [data["tickets"][0], data["tickets"][1]] },
    { id: "urgent", title: "Urgent", cards: [] },
    { id: "high", title: "High", cards: [data["tickets"][2]] },
    { id: "medium", title: "Medium", cards: [data["tickets"][3]]},
    { id: "low", title: "Low", cards: [data["tickets"][4], data["tickets"][5], data["tickets"][6], data["tickets"][7]] },
  ];

  return (
    <div className="board">
      {columns.map((column) => (
        <div key={column.id} className="column">
          <div className="column-header">{column.title}</div>
          <div className="column-content">
            {column.cards.map((card) => (
              <Card data={card}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;

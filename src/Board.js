import React from "react";
import "./Board.css";
import Card from "./Card";

const Board = ({ tickets, users, groupBy, sortBy }) => {
  const groupByOptions = {
    'priority': ["no-priority", "low", "medium", "high", "urgent"],
    'status': ["Backlog", "Todo", "In progress", "done", "cancelled"],
    'user': users.map((user) => user.name),
  };
  const priorityMap = {
    'no-priority': 0,
    'low': 1,
    'medium': 2,
    'high': 3,
    'urgent': 4,
  };
  const userMap = users.reduce((acc, user) => {
    acc[user.name] = user.id;
    return acc;
  }, {});

  const columns = groupByOptions[groupBy].map((group) => {
    const filteredTickets = tickets.filter((ticket) => {
      if (groupBy === "priority") return ticket.priority === priorityMap[group];
      if (groupBy === "status") return ticket.status === group;
      if (groupBy === "user") return ticket.userId === userMap[group];
      return false;
    });

    return {
      id: group,
      title: group,
      tickets: filteredTickets,
    };
  });

  const sortedColumns = columns.map((column) => ({
    ...column,
    tickets: [...column.tickets].sort((a, b) => {
      if (sortBy === "priority") 
        return a.priority - b.priority;
      if (sortBy === "title") 
        return parseInt(a.id.split('-')[1], 10) - parseInt(b.id.split('-')[1], 10);
      return 0;
    }),
  }));

  return (
    <div className="board">
      {sortedColumns.map((column) => (
        <div key={column.id} className="column">
          <div className="column-header">{column.title}</div>
          <div className="column-content">
            {column.tickets.map((card) => (
              <Card key={card.id} data={card} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;

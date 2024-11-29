import React from "react";
import "./Card.css"; 

const Card = ({data}) => {
  return (
    <div className="card">
      <div className="header">{data.id}</div>
      <div className="title">{data.title}</div>
      <div>
        {data.tag.map((tag, index) => (
          <span key={index} className="tags">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;

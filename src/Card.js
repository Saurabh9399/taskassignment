import React from "react";
import "./Card.css";

function Card({ Icon, number, description }) {
  return (
    <div className="card">
      <div className="card__info">
        <Icon/>
        <h1>{number}</h1>
        <h4 className="desc">{description}</h4>
      </div>
    </div>
  );
}

export default Card;

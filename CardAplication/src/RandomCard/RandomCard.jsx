import { useContext } from "react";
import { MainContext } from "../App";
import React from "react";
import "./RandomCard.css";

function RandomCard({ card }) {
  const [deleteCard] = useContext(MainContext);
  return (
    <div className="random-number">
      <div>
        <button className="btn" onClick={() => deleteCard(card)}>
          X
        </button>
      </div>
      <span className="randomNumber">{card.value}</span>
    </div>
  );
}

export default RandomCard;

import "./Main.css";
import RandomCardList from "../RandomCardList/RandomCardList";
import { useState } from "react";

function Main({cards,scrollShow,deleteCard}) {
  
  return (
    <div className="main-container" style={scrollShow}>
      <RandomCardList cards={cards} deleteCard={deleteCard}/>
    </div>
  );
}

export default Main;

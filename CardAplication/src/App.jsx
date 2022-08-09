import { useState, useEffect, useReducer } from "react";
import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import generateNumber from "./components/generateUnqueNumber";
import RandomCardList from "./components/RandomCardList/RandomCardList";

function reducer(state, action) {
  switch (action.type) {
    case "setCards":
      return state.filter((card) => card.id !== action.payload.cardID);
    case "add":
      return [
        ...state,
        {
          value: generateNumber(),
          id: new Date() + Math.random(),
        },
      ];
    case "sort":
      const sorted = state.sort(function (a, b) {
        return a.value - b.value;
      });
      return [...sorted];
  }
}
function App() {
  const [cards, dispatch] = useReducer(reducer, []);
  const [scrollShow, setScrollShow] = useState({ overflowY: "hidden" });

  useEffect(() => {
    if (cards.length > 4) {
      setScrollShow({ overflowY: "scroll" });
    } else {
      setScrollShow({ overflowY: "hidden" });
    }
  }, [cards]);

  function add() {
    dispatch({ type: "add" });
  }

  function sort() {
    dispatch({ type: "sort" });
  }

  function deleteCard(cardID) {
    dispatch({
      type: "setCards",
      payload: {
        cardID: cardID,
      },
    });
  }

  return (
    <div className="container-page">
      <div id="container">
        <Header add={add} sort={sort} />
        <div className="main-container" style={scrollShow}>
          <RandomCardList deleteCard={deleteCard} cards={cards} />
        </div>
        <Footer />
      </div>
      <Aside />
    </div>
  );
}

export default App;

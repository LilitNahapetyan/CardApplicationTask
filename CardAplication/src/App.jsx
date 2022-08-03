import { useState, useEffect } from "react";
import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Aside from "./components/Aside/Aside";
import generateNumber from "./components/generateUnqueNumber";

export const MainContext = React.createContext();

function App() {
  const [cards, setCards] = useState([]);
  const [scrollShow, setScrollShow] = useState({ overflowY: "hidden" });

  useEffect(() => {
    if (cards.length > 4) {
      setScrollShow({ overflowY: "scroll" });
    } else {
      setScrollShow({ overflowY: "hidden" });
    }
  }, [cards]);

  function add() {
    setCards([...cards, { value: generateNumber() }]);
  }

  function sort() {
    const sorted = cards.sort(function (a, b) {
      return a.value - b.value;
    });
    setCards([...sorted]);
  }
  function deleteCard(card) {
    setCards(cards.filter((c) => c.value !== card.value));
  }

  return (
    <div className="container-page">
      <div id="container">
        <Header add={add} sort={sort} />
        <MainContext.Provider value={[deleteCard, cards]}>
          <Main scrollShow={scrollShow} />
        </MainContext.Provider>
        <Footer />
      </div>
      <Aside />
    </div>
  );
}

export default App;

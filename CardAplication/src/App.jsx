import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import generateNumber from './components/generateUnqueNumber';
import RandomCardList from './components/RandomCardList/RandomCardList';

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
    setCards([
      ...cards,
      {
        value: generateNumber(),
        id: new Date() + Math.random(),
      },
    ]);
  }

  function sort() {
    const sorted = cards.sort(function (a, b) {
      return a.value - b.value;
    });
    setCards([...sorted]);
  }

  function deleteCard(cardID) {
    setCards(cards.filter((card) => card.id !== cardID));
  }

  return (
    <div className="container-page">
      <div id="container">
        <Header add={add} sort={sort} />
        <div className="main-container" style = {scrollShow}>
          <RandomCardList deleteCard={deleteCard} cards={cards}/>
        </div>
        <Footer />
      </div>
      <Aside />
    </div>
  );
}

export default App;

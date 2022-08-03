import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import generateNumber from "./components/generateUnqueNumber";

function App() {
  const [cards, setCards] = useState([]);
  const [scrollShow, setScrollShow] = useState({overflow:"hidden"});

  useEffect(() => {
    if (cards.length > 4) {
      setScrollShow({overflow:"scroll"});
    }else{
      setScrollShow({overflow:"hidden"});
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
    console.log(card.value);
    setCards(cards.filter((c) => c.value !== card.value));
  }
  return (
    <div id="container">
      <Header add={add} sort={sort} />
      <Main cards={cards} deleteCard={deleteCard} scrollShow={scrollShow} />
      <Footer />
    </div>
  );
}

export default App;

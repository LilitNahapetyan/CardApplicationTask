import { useContext } from "react";
import RandomCard from "../../RandomCard/RandomCard";
import { MainContext } from "../../App";
import "./RandomCardList.css";

function RandomCardList() {
  const [, cards] = useContext(MainContext);
  return (
    <div className="list-container">
      {cards.map((card) => {
        return <RandomCard card={card} key={card.value} />;
      })}
    </div>
  );
}
export default RandomCardList;

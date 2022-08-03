import "./Main.css";
import RandomCardList from "../RandomCardList/RandomCardList";

function Main({cards,scrollShow,deleteCard}) {
  
  return (
    <div className="main-container" style={scrollShow}>
      <RandomCardList cards={cards} deleteCard={deleteCard}/>
    </div>
  );
}

export default Main;

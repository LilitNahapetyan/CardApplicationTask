import RandomCard from "../../RandomCard/RandomCard";
import "./RandomCardList.css";

function RandomCardList({cards,deleteCard}){
    return <div className="list-container">
        {cards.map((card)=>{
            return <RandomCard card = {card} key={card.value} deleteCard={deleteCard}/>
        })}
    </div>
}
export default RandomCardList;
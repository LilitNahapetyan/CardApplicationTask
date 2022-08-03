import "./RandomNumber.css"
function RandomCard({card,deleteCard}){
    return <div className="random-number">
        <div><button className="btn" onClick={() => deleteCard(card)}>X</button></div>
        <span className="randomNumber">{card.value}</span>
    </div>
}

export default RandomCard;

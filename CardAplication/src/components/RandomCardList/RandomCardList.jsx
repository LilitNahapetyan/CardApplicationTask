import RandomCard from '../../RandomCard/RandomCard';
import './RandomCardList.css';

function RandomCardList({ deleteCard, cards }) {
  return (
    <>
      {cards.map((card) => {
        return <RandomCard card={card} key={card.id} deleteCard={deleteCard} />;
      })}
    </>
  );
}
export default RandomCardList;

import "./RandomCardList.css";
import React, { Suspense } from "react";
const RandomCard = React.lazy(() => import("../../RandomCard/RandomCard"));
function RandomCardList({ deleteCard, cards }) {
  return (
    <>
      {cards.map((card) => {
        return (
          <>
            <Suspense fallback={<div>Loading...</div>}>
              <RandomCard card={card} key={card.id} deleteCard={deleteCard} />
            </Suspense>
          </>
        );
      })}
    </>
  );
}
export default RandomCardList;

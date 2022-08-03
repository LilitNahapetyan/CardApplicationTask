import "./Main.css";
import RandomCardList from "../RandomCardList/RandomCardList";

function Main({ scrollShow }) {
  return (
    <div className="main-container" style={scrollShow}>
      <RandomCardList />
    </div>
  );
}

export default Main;

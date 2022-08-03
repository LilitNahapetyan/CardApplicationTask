import "./Header.css";
function Header({add,sort}) {
  return (
    <div className="header-container">
      <div className="button-container">
      <button className="button" onClick={add}>add card</button>
      <button className="button" onClick={sort}>sort card</button>
      </div>
    </div>
  );
}

export default Header;

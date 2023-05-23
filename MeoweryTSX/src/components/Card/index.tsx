import "./card.css";

function Card({ card, handleChoice, flipped, disabled }) {
  const isMatched = card.matched;

  // disable clicking on more than two cards at once
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    // Add the "matched" class if the card is matched and the "flipped" class if it's flipped
    <div className={`card ${isMatched ? "matched" : ""}`}> 
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.url} alt="cat" />
        <div className="back" onClick={handleClick}></div>
      </div>
    </div>
  );
}

export default Card;

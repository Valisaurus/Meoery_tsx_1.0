import "./card.css";

interface CardProps {
  card: { matched: boolean; url: string; id: string };
  handleChoice: (card: { matched: boolean; url: string; id: string }) => void;
  flipped: boolean;
  disabled: boolean;
  key: string;
}


function Card({ card, handleChoice, flipped, disabled }: CardProps) {
  const isMatched = card.matched;
  // disable clicking on more than two cards at once
  const handleClick = (): void => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    // Add the "matched" class if the card is matched and the "flipped" class if it's flipped
    <div className={`card ${isMatched ? "matched" : ""}`}>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.url} alt="cat" />
        <div className="back hover-scale" onClick={handleClick}></div>
      </div>
    </div>
  );
}

export default Card;

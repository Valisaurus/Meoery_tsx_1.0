import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import Header from "./components/Header/index";
import Board from "./components/Board/index";
import Card from "./components/Card/index";
import Button from "./components/Button/index";
import Counter from "./components/Counter/index";
import Message from "./components/Message/index";

type CatImage = {
  url: string;
  matched: boolean;
  id: number;
};

function App() {
  const [cards, setCards] = useState<CatImage[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [cardOne, setCardOne] = useState<CatImage | null>(null);
  const [cardTwo, setCardTwo] = useState<CatImage | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [matchedPairs, setMatchedPairs] = useState<number>(0);

  //starting with no points
  // let points = 0;

  // fetch cat-images from api when app is mounted
  useEffect(() => {
    createDeck();
  }, []);

  const createDeck = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const api = `https://api.thecatapi.com/v1/images/search?limit=10`;

    setMatchedPairs(0);

    let deck: CatImage[] = [];

    fetch(api, { headers: { "x-api-key": apiKey || "" } })
      .then((response) => response.json())
      .then((data) => {
        const images = data.slice(0, 8) as CatImage[];
        deck = [...images, ...images]
          .sort(() => Math.random() - 0.5)
          .map((card) => ({ ...card, matched: false, id: Math.random() }));
        setCards(deck);
        setTurns(0);
        setMatchedPairs(0); // Reset matchedPairs to 0
      })
      .catch((error) => console.error(error));
  };

  //if a card already has been selected, set next card to "cardTwo"
  const handleChoice = (card: CatImage) => {
    cardOne ? setCardTwo(card) : setCardOne(card);
  };

  //compare the selected cards and display message if match or no match
  useEffect(() => {
    if (cardOne && cardTwo) {
      setDisabled(true);
      if (cardOne.url === cardTwo.url) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.url === cardOne.url) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setMatchedPairs((prevMatchedPairs) => prevMatchedPairs + 1);
        setMessage("Meeoow cats matched!");
        resetTurn();
      } else {
        setMessage("oops no match, try again!");
        setTimeout(() => {
          setMessage("");
        }, 3000);
        setTimeout(() => resetTurn(), 2000);
      }
    }
  }, [cardOne, cardTwo]);

  // when all cards have matched
  useEffect(() => {
    if (matchedPairs && matchedPairs === 8) {
      setMessage("Purrrrrrfect! All cats have found their buddy!");
    }
  }, [matchedPairs, cards]);

  //reset selected cards and increase turn
  const resetTurn = () => {
    setCardOne(null);
    setCardTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <div className="App">
      <Header />
      <Button createDeck={createDeck} buttonText="New Game!" />
      <div className="info-box">
        <Counter turns={turns} counterText="Turns: " />
        {message && <Message messageText={message} />}
      </div>
      <Board>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === cardOne || card === cardTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </Board>
    </div>
  );
}

export default App;

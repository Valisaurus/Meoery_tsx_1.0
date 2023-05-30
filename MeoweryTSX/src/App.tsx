import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import Header from "./components/Header/index";
import Board from "./components/Board/index";
import Card from "./components/Card/index";
import Button from "./components/Button/index";
import Counter from "./components/Counter/index";
import Score from "./components/Score/index";
import Message from "./components/Message/index";
import type { CardData } from "./types/types";

function App() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [cardOne, setCardOne] = useState<CardData | null>(null);
  const [cardTwo, setCardTwo] = useState<CardData | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const apiKey: string = import.meta.env.REACT_APP_API_KEY;

  //Tanstack Query to fetch data from api
  const { isLoading, error, data, refetch } = useQuery<CardData[]>({
    queryKey: ["cardData"],
    queryFn: () => {
      //Since the api "limit" didn't work, we had to limit images manually
      return fetch(`https://api.thecatapi.com/v1/images/search?limit=10`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      })
        .then((res) => res.json())
        .then((data) => data as CardData[]);
    },
    refetchOnWindowFocus: false,
  });

  // Trigger manual data fetching
  const fetchData = () => {
    refetch();
  };

  // Make copy of every image, shuffle them and give them properties for "matched" and unique ids
  useEffect(() => {
    if (data) {
      const images = data.slice(0, 8);
      const duplicatedDeck = [...images, ...images];
      const randomizedDeck = duplicatedDeck.sort(() => Math.random() - 0.5);
      const deckWithIds = randomizedDeck.map((card) => ({
        ...card,
        matched: false,
        id: uuidv4(),
      }));
      setCards(deckWithIds);
      setTurns(0);
      setMatchedPairs(0);
    }
  }, [data]);

  //if a card already has been selected, set next card to "cardTwo"
  const handleChoice = (card: CardData) => {
    cardOne ? setCardTwo(card) : setCardOne(card);
  };

  //compare the selected cards and display message if match or no match
  useEffect(() => {
    if (cardOne && cardTwo) {
      //disable clicking more than 2 cards
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
        setScore((prevScore) => prevScore + 4);
        setTimeout(() => {
          setMessage("");
        }, 3000);
        setTimeout(() => resetTurn(), 2000);
      } else {
        setMessage("oops no match, try again!");
        setScore((prevScore) => prevScore - 1);
        setTimeout(() => {
          setMessage("");
        }, 3000);
        setTimeout(() => resetTurn(), 2000);
      }
    }
  }, [cardOne, cardTwo]);

  // when all cards have matched
  useEffect(() => {
    if (matchedPairs && matchedPairs === cards.length / 2) {
      setMessage("Purrrrrrfect! All cats have found their buddy!");
      const timeoutId = setTimeout(() => {
        setMessage("");
        refetch();
      }, 5000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [matchedPairs, cards]);

  //reset selected cards and increase turn
  const resetTurn = () => {
    setCardOne(null);
    setCardTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
    setMessage("");
  };

  // count score
  // const countMatchedCards = (cards: CardData[]) => {
  //   return cards.reduce((count: number, card: { matched: boolean }) => {
  //     if (card.matched) {
  //       return count + 4;
  //     } else {
  //       return count - 1;
  //     }
  //   }, 0);
  // };
  // const matchedCardsCount = countMatchedCards(cards);

  return (
    <div className="App">
      <Header />
      <div className="board-wrapper">
        <div className="info-box">
          <Counter turns={turns} counterText="Turns: " />
          {message && <Message messageText={message} />}
          {<Score score={score} scoreText="Score: " />}
        </div>
        <Board>
          {!isLoading &&
            !error &&
            cards.map((card) => (
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
      <Button newGame={fetchData} buttonText="New Game!" />
    </div>
  );
}

export default App;

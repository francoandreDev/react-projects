import { useState } from "react";
import "./App.css";
import Card from "./cards/Card";

function App() {
    const newRandom = (n) => {
        let random = Math.floor(Math.random() * n);
        random = Math.floor(Math.random() * random) + 1;
        return random;
    };

    const [count, setCount] = useState(1);
    const [myCards, setMyCards] = useState(new Array(newRandom(20)).fill({"status": "unknown"}));

    const updateDeck = () => {
        setMyCards(new Array(newRandom(20)).fill({
          "status": "unknown"
        }));
        setCount(count + 1)
    };

    return (
        <div className="bg">
            <h1>Deck {count}</h1>
            <ul className="cards">
                {myCards.map((card, index) => (
                    <li key={index}>
                      <Card status = {card.status}/>
                    </li>
                ))}
            </ul>
            <button onClick={() => updateDeck()}> Rig the Deck </button>
        </div>
    );
}

export default App;

import { useState } from "react";
import "./App.css";
import Card from "./cards/Card";

function App() {
    const newRandom = (n) => {
        return Math.floor(Math.random() * n - 5) + 6;
    };

    const [count, setCount] = useState(1);
    const [myCards, setMyCards] = useState(
        new Array(newRandom(20)).fill({ status: "unknown" })
    );

    const updateDeck = () => {
        setMyCards(null);
        setMyCards(
            new Array(newRandom(20)).fill({
                status: "unknown",
            })
        );
        setCount(count + 1);
    };

    return (
        <div className="bg">
            <h1>Game {count}</h1>
            <ul className="cards">
                {myCards.map((card, index) => (
                    <li key={index}>
                        <Card status={card.status} />
                    </li>
                ))}
            </ul>
            <button onClick={() => updateDeck()}> New Game </button>
        </div>
    );
}

export default App;

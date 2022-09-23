import { useState } from "react";
import "./App.css";
import Card from "./cards/Card";

function App() {

    const newRandom = (n) => {
        return Math.floor(Math.random() * n - 5) + 6;
    };

    const [count, setCount] = useState(1);
    const [myCards, setMyCards] = useState(
        new Array(newRandom(20)).fill({
            text: "Open",
            status: "unknown"
         })
    );

    const newGame = () => {
        setMyCards(new Array(newRandom(20)).fill({
            text: "Open",
            status: "unknown"
        }));
        setCount(count + 1);
    };

    return (
        <div className="bg">
            <h1>Game {count}</h1>
            <ul className="cards">
                {myCards.map((card, index) => (
                    <li key={index}>
                        <Card card={card} index={index} />
                    </li>
                ))}
            </ul>
            <button onClick={() => newGame()} className="button-newGame"> New Game </button>
        </div>
    );
}

export default App;
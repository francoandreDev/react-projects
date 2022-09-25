import { useState } from "react";
import "./App.css";
import Card from "./cards/Card";

function App() {
    const [content, setContent] = useState([
        "fa-solid fa-heart",
        "fa-solid fa-shield-halved",
        "fa-solid fa-ghost",
        "fa-solid fa-dice",
        "fa-solid fa-pen",
        "fa-solid fa-brain",
        "fa-solid fa-cube",
        "fa-solid fa-eraser",
        "fa-solid fa-spray-can",
        "fa-solid fa-dragon",
        "fa-solid fa-heart",
        "fa-solid fa-shield-halved",
        "fa-solid fa-ghost",
        "fa-solid fa-dice",
        "fa-solid fa-pen",
        "fa-solid fa-brain",
        "fa-solid fa-cube",
        "fa-solid fa-eraser",
        "fa-solid fa-spray-can",
        "fa-solid fa-dragon",
    ]);

    const newRandom = (n) => {
        return Math.floor(Math.random() * n - 5) + 6;
    };

    const [count, setCount] = useState(1);
    const [myCards, setMyCards] = useState(
        new Array(newRandom(20)).fill({
            text: "Open",
            status: "unknown",
        })
    );

    const sortCards = () => {
        content.sort(() => Math.random() - 0.5);
        setContent(content);
    };

    const newGame = () => {
        setMyCards(
            new Array(newRandom(20)).fill({
                text: "Open",
                status: "unknown",
            })
        );

        sortCards();
        setCount(count + 1);
    };

    return (
        <div className="bg">
            <h1>Game {count}</h1>
            <ul className="cards">
                {myCards.map((card, index) => (
                    <li key={index}>
                        <Card card={card} index={index} content={content} />
                    </li>
                ))}
            </ul>
            <button onClick={() => newGame()} className="button-newGame">
                {" "}
                New Game{" "}
            </button>
        </div>
    );
}

export default App;

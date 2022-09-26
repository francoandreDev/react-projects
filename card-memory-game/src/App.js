import { useState } from "react";
import "./App.css";
import Card from "./cards/Card";

function App() {
    const iconsAvailable = [
        "heart",
        "shield-halved",
        "ghost",
        "dice",
        "pen",
        "brain",
        "cube",
        "eraser",
        "spray-can",
        "dragon",
    ];
    const newRandom = (n) => {
        let random = Math.floor(Math.random() * n - 5) + 6;
        if (random % 2 === 1) random++;
        return random;
    };
    const [random, setRandom] = useState(newRandom(20));
    const myIcons = iconsAvailable.filter(
        (icon, index) => index >= 0 && index < random / 2
    );
    const [content, setContent] = useState(
        myIcons.concat(myIcons).sort(() => Math.random() - 0.5)
    );

    const [count, setCount] = useState(1);
    const [myCards, setMyCards] = useState(
        new Array(random).fill({
            status: "close",
        })
    );

    const newGame = () => {
        setRandom(newRandom(20));
        const myIcons = iconsAvailable.filter(
            (icon, index) => index < random / 2
        );
        setContent(myIcons.concat(myIcons).sort(() => Math.random() - 0.5));
        setMyCards(
            new Array(random).fill({
                status: "close",
            })
        );
        setCount(count + 1);
    };

    const [selectCard, setSelectedCard] = useState(new Array(2));

    return (
        <div className="bg">
            <h1>Game {count}</h1>
            <ul className="cards">
                {myCards.map((card, index) => (
                    <li key={index}>
                        <Card
                            card={card}
                            content={content[index]}
                            selectCard={{
                                'state': selectCard,
                                'setState': setSelectedCard,
                            }}
                        />
                    </li>
                ))}
            </ul>
            <button onClick={() => newGame()} className="button-newGame">
                New Game
            </button>
        </div>
    );
}

export default App;

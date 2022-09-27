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

    const onlyEven = (random) => {
        return random % 2 === 0 ? random : random + 1;
    };

    const newEvenRandom = (n) => {
        const random = Math.floor(Math.random() * n - 5) + 6;
        const evenRandom = onlyEven(random);
        return evenRandom;
    };

    const filterIcons = () => {
        const myIcons = iconsAvailable.filter(
            (icon, index) => index < random / 2
        );
        return myIcons;
    };

    const sortBothIcons = (myIcons) => {
        const sortIcons = myIcons
            .concat(myIcons)
            .sort(() => Math.random() - 0.5);
        return sortIcons;
    };

    const newContent = () => {
        const myIcons = filterIcons();
        const sortIcons = sortBothIcons(myIcons);
        return sortIcons;
    };

    const createCardsArray = () => {
        return new Array(random)
            .fill({ status: "close", content: null })
            .map((thisCard, index) => {
                return {...thisCard, content: myContent[index]}
            });
    };

    const newGame = () => {
        setRandom(newEvenRandom(20));
        setMyContent(newContent());
        setMyCards(createCardsArray());
        setCount(count + 1);
    };

    const [random, setRandom] = useState(newEvenRandom(20));
    const [myContent, setMyContent] = useState(newContent());
    const [myCards, setMyCards] = useState(createCardsArray());
    const [selectCard, setSelectedCard] = useState(undefined);
    const [count, setCount] = useState(0);

    return (
        <div className="bg">
            <h1>Game {count}</h1>
            <ul className="cards">
                {myCards.map((card, index) => {
                    return (
                        <li key={index}>
                            <Card
                                card={card}
                                selectCard={{
                                    state: selectCard,
                                    setState: setSelectedCard,
                                }}
                            />
                        </li>
                    );
                })}
            </ul>
            <button onClick={() => newGame()} className="button-newGame">
                New Game
            </button>
        </div>
    );
}

export default App;

import { useEffect, useState } from "react";
import Card from "./cards/Card";
import "./App.css";

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
        const newRandom = Math.floor(Math.random() * n - 5) + 6;
        const evenRandom = onlyEven(newRandom);
        return evenRandom;
    };

    const filterIcons = (random) => {
        const myIcons = iconsAvailable.filter(
            (icon, index) => index < random / 2
        );
        return myIcons;
    };

    const sortBothIcons = (myIcons) => {
        const sortIcons = myIcons
            .concat(myIcons)
            .sort(() => Math.random() - 0.5)
            .map((element) => element);
        return sortIcons;
    };

    const newContent = (random) => {
        const myIcons = filterIcons(random);
        const sortIcons = sortBothIcons(myIcons);
        return sortIcons;
    };

    const createCardsArray = (random, content = null) => {
        return new Array(random)
            .fill({ status: "close", content: null })
            .map((thisCard, index) => {
                return content === null
                    ? { ...thisCard, content: myContent[index] }
                    : { ...thisCard, content: content[index] };
            })
            .splice(0, iconsAvailable.length * 2);
    };

    const newGame = () => {
        setCount(count + 1);
        setRandom(newEvenRandom((count + 1) * 2));
        const content = newContent(random);
        setMyContent(content);
        const cards = createCardsArray(random, content);
        setMyCards(cards);
        setIndexCard([null, null]);
        setScore(0)
        setWin(100 * random);
    };

    const [count, setCount] = useState(0);
    const [random, setRandom] = useState(2);
    const [myContent, setMyContent] = useState(newContent(random));
    const [myCards, setMyCards] = useState(createCardsArray(random));
    const [indexCard, setIndexCard] = useState([null, null]);
    const [score, setScore] = useState(0);
    const [win, setWin] = useState(100 * random);

    useEffect(() => {
        if (score === win) {
            setTimeout(() => {
                setScore("Win");
                setTimeout(() => {
                    newGame()
                }, 500);
            }, 500);
        }
    }, [score]);

    return (
        <div className="bg">
            <h1>Game {count}</h1>
            <h2>Score: {score}</h2>
            <ul className="cards">
                {myCards.map((card, index) => {
                    return (
                        <li key={index}>
                            <Card
                                index={index}
                                card={card}
                                indexCard={{
                                    state: indexCard,
                                    setState: setIndexCard,
                                }}
                                myCards={{
                                    state: myCards,
                                    setState: setMyCards,
                                }}
                                myScore={{
                                    state: score,
                                    setState: setScore,
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

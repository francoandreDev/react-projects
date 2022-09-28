import { useState } from "react";
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
            .map(element=>element)
        return sortIcons;
    };

    const newContent = (random) => {
        const myIcons = filterIcons(random);
        const sortIcons = sortBothIcons(myIcons);
        return sortIcons;
    };

    const createCardsArray = (random, content=null) => {
        return new Array(random)
            .fill({ status: "close", content: null })
            .map((thisCard, index) => {
                return content === null ?
                    { ...thisCard, content: myContent[index] }
                :   { ...thisCard, content: content[index] }
            })
            .splice(0, iconsAvailable.length*2)
    };

    const newGame = () => {
        setCount(count + 1);
        setRandom(newEvenRandom((count+1)*2));
        const content = newContent(random)
        setMyContent(content)
        const cards = createCardsArray(random, content)
        setMyCards(cards)
        console.log(cards, random)
        setSelectedCard(undefined);
    };


    const [count, setCount] = useState(0);
    const [random, setRandom] = useState(2);
    const [myContent, setMyContent] = useState(newContent(random));
    const [myCards, setMyCards] = useState(createCardsArray(random));
    const [selectCard, setSelectedCard] = useState(undefined);

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

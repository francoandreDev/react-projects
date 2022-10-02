import { useState } from "react";
import {
    AiFillAudio as Audio,
    AiFillApple as Apple,
    AiFillAndroid as Android,
    AiFillExperiment as Experiment,
    AiFillFire as Fire,
    AiFillGift as Gift,
    AiFillHeart as Heart,
    AiFillWindows as Windows,
    AiFillRocket as Rocket,
    AiOutlineBell as Bell,
    AiOutlineCoffee as Coffee,
    AiOutlineCrown as Crown,
    AiOutlineHome as Home,
    AiOutlineLike as Like
} from "react-icons/ai";
import Card from "./cards/Card";
import "./App.css";

function App() {
    const iconsAvailable = [
        Apple,
        Audio,
        Android,
        Experiment,
        Fire,
        Gift,
        Heart,
        Windows,
        Rocket,
        Bell,
        Coffee,
        Crown,
        Home,
        Like
    ];
    const fillArrayWithIcons = () => {
        const info = []
        iconsAvailable.forEach((Icon, index)=>{
            const objectInfo = {
                id: index,
                icon: <Icon className="text-card" />,
                status: "close"
            }
            info.push(objectInfo)
            info.push(objectInfo)
        })
        return info.sort(()=>Math.random()-0.5)
    }

    const newGame = () => {
        setCount(count + 1);
        setCardsInfo(fillArrayWithIcons())
        setSelectCards([null, null]);
        setScore(0);
        setWin(100 * (count+1) * 2);
    };

    const [count, setCount] = useState(0);
    const [selectCards, setSelectCards] = useState(null);
    const [cardsInfo, setCardsInfo] = useState(fillArrayWithIcons());
    const [score, setScore] = useState(0);
    const [win, setWin] = useState(100 * (count+1) * 2);

    return (
        <div className="bg">
            <h1>Game {count}</h1>
            <h2>Score: {score}</h2>
            <ul className="cards">
                {cardsInfo.map((card, index) => {
                    return (
                        (
                            <li key={index}>
                                <Card
                                    card={card}
                                    score={{
                                        state: score,
                                        setState: setScore
                                    }}
                                    selectCards={{
                                        state: selectCards,
                                        setState: setSelectCards
                                    }}
                                    win = {win}
                                />
                            </li>
                        )
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

import React, { useEffect, useState } from "react";
import "./Card.css";

import cardBg from "../assets/bg-card.jpg";

const Card = ({ card, content, selectCard }) => {
    const [cardStatus, setCardStatus] = useState(card.status);
    const changeStatus = () => {
        const cardState = selectCard["state"];
        const setCardState = selectCard["setState"];
        const findMatchContentInCards = () => {
            let indexMatch = 0;
            if (cardState[0] !== undefined) indexMatch = 1;
            cardState[indexMatch] = content;
            setCardState(...cardState);
            if (cardState[0] !== cardState[1]) {
                setTimeout(() => {
                    setCardStatus("close");
                }, 2500);
                setCardState(new Array(2));
            }
        };
        if (cardState[0] === cardState[1]) {
            console.log("yeah");
            setCardState(new Array(2));
        }
        if (cardStatus === "close") {
            setCardStatus("open");
            findMatchContentInCards();
        } else if (cardStatus === "open") setCardStatus("close");
        console.log(cardState);
    };

    useEffect(() => {
        setCardStatus(card.status);
    }, [card]);

    return (
        <button className={`Card ${cardStatus}`} onClick={() => changeStatus()}>
            {cardStatus !== "open" ? (
                <>
                    <i className={`fa-solid fa-${content} text-card`}></i>
                </>
            ) : (
                <img src={cardBg} alt="random card" className="random-card" />
            )}
        </button>
    );
};

export default Card;

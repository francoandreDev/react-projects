import React, { useEffect, useState } from "react";
import "./Card.css";

import cardBg from "../assets/bg-card.jpg";

const Card = ({ card, selectCard }) => {
    const changeStatus = () => {
        const cardState = selectCard["state"];
        const setCardState = selectCard["setState"];
        findMatchContentInCards(cardState, setCardState);
    };

    const findMatchContentInCards = (cardState, setCardState) => {
        if (cardState === undefined) {
            console.log(card);
            card!==undefined&&setCardState(card);
            //! This should not be undefined
            console.log(cardState)
        }
        if (cardState.content !== undefined) {
            matchContentCards(cardState, setCardState);
        }
    };

    const matchContentCards = (cardState, setCardState) => {
        if (cardState.content !== card.content) closeCards()
        if (cardState.content === card.content) openCards()
        setCardState(undefined);
    };

    const closeCards = () => {
        setTimeout(() => {
            setCardStatus("close");
        }, 2500);
    };

    const openCards = () => {
        console.log("yeah");
        setCardStatus("open")
    };

    const [cardStatus, setCardStatus] = useState(card.status);

    useEffect(() => {
        setCardStatus(card.status);
    }, [card]);

    return (
        <button className={`Card ${cardStatus}`} onClick={() => changeStatus()}>
            {(cardStatus !== "open") ? (
                <>
                    <i className={`fa-solid fa-${card.content} text-card`}></i>
                </>
            ) : (
                <img src={cardBg} alt="random card" className="random-card" />
            )}
        </button>
    );
};

export default Card;

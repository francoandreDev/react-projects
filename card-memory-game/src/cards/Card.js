import React, { useEffect, useState } from "react";
import "./Card.css";

import cardBg from "../assets/bg-card.jpg";

const Card = ({ index, card, indexCard, myCards }) => {
    const indexCardState = indexCard.state;
    const setIndexCardState = indexCard.setState;
    const myCardsState = myCards.state;
    const setMyCardsState = myCards.setState;

    const changeStatus = () => {
        myCardsState[index].status =
            myCardsState[index].status === "open" ? "close" : "open";
        if (indexCardState[0] === null) indexCardState[0] = index;
        else if (indexCardState[1] === null) indexCardState[1] = index;
        setIndexCardState([...indexCardState]);
        setMyCardsState([...myCardsState]);
        indexCardState.forEach((i) => {
            if (index === i) card.status = myCardsState[index].status;
        });
        setCardStatus(myCardsState[index].status);
        setMyCardsState(myCardsState);
    };

    const [cardStatus, setCardStatus] = useState(myCardsState[index].status);
    const showIcon = (
        <i className={`fa-solid fa-${card.content} text-card`}></i>
    );
    const showTextIcon = <p className="text-card">{card.content}</p>;

    return (
        <button className={`Card ${cardStatus}`} onClick={() => changeStatus()}>
            {cardStatus !== "open" ? (
                <>{showIcon.ref !== null ? showIcon : showTextIcon}</>
            ) : (
                <img src={cardBg} alt="random card" className="random-card" />
            )}
            {
                console.log(cardStatus)
            }
        </button>
    );
};

export default Card;

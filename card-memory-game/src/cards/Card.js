import React, { useEffect, useState } from "react";
import "./Card.css";

import cardBg from "../assets/bg-card.jpg";

const Card = ({ index, card, indexCard, myCards, myScore }) => {
    const indexCardState = indexCard.state;
    const setIndexCardState = indexCard.setState;
    const myCardsState = myCards.state;
    const setMyCardsState = myCards.setState;
    const myScoreState = myScore.state;
    const setMyScoreState = myScore.setState;

    const changeStatus = () => {
        if (myCardsState[index].status === "match") return;
        if (isFirstOrSecondCard() === null) return;
        turnCard();
        const position = isFirstOrSecondCard();
        updateArrayState(indexCardState, position, index, setIndexCardState);
        setMyCardsState([...myCardsState]);
        setCardStatus(myCardsState[index].status);
        if (position === 1) {
            matchContent();
            setIndexCardState([null, null]);
        }
    };

    const turnCard = () => {
        myCardsState[index].status =
            myCardsState[index].status === "open" ? "close" : "open";
    };

    const isFirstOrSecondCard = () => {
        if (indexCardState[0] === null) return 0;
        else if (indexCardState[1] === null) return 1;
        else return null;
    };

    const updateArrayState = (array, index, value, setArray) => {
        array[index] = value;
        setArray([...array]);
    };

    const matchContent = () => {
        const [firstIndex, secondIndex] = indexCardState;
        setTimeout(() => {
            let action = "open";
            if (myCardsState[firstIndex].status !== "match") {
                if (
                    myCardsState[firstIndex].content ===
                    myCardsState[secondIndex].content
                ) {
                    action = "match";
                    setMyScoreState(myScoreState + 200);
                    myCardsState[firstIndex].status = action;
                    myCardsState[secondIndex].status = action;
                } else {
                    action = "close";
                    indexCardState[1] = null;
                    setIndexCardState([...indexCardState]);
                    myCardsState[secondIndex].status = action;
                }
            }
            card.status = action;
            setCardStatus(myCardsState[index].status);
        }, 1000);
        setMyCardsState([...myCardsState]);
    };

    useEffect(() => {
        setCardStatus(card.status);
    }, [card]);

    const [cardStatus, setCardStatus] = useState(myCardsState[index].status);
    const showIcon = (
        <i className={`fa-solid fa-${card.content} text-card`}></i>
    );
    const showTextIcon = (
        <p className="text-card" style={{ fontSize: "1rem" }}>
            {card.content}
        </p>
    );

    return (
        <button className={`Card ${cardStatus}`} onClick={() => changeStatus()}>
            {cardStatus === "close" ? (
                <img src={cardBg} alt="random card" className="random-card" />
            ) : (
                <>{showIcon.ref !== null ? showIcon : showTextIcon}</>
            )}
        </button>
    );
};

export default Card;

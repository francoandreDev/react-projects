import React, { useState } from "react";

import "./Card.css";

import cardBg from "../assets/bg-card.jpg";

const Card = ({ card, score, selectCards, win }) => {
    const selectCardsState = selectCards.state
    const setSelectCardsState = selectCards.setState
    const scoreState = score.state
    const setScoreState = score.setState
    const Icon = card.icon

    const changeStatus = () => {
        turnSelectedCard()
        const index = isFirstOrSecondCard()
        if (card.status === "open") {
            if (index === 1) firstCardSelected()
            if (index === 2) {
                if (card.content !== selectCardsState.content) secondCardIsDifferent()
                else if (card.id !== selectCardsState.id) secondCardIsDifferent()
                else secondCardIsEqual()
            }
            if (score === win) {
                console.log("Congratulations you have", score, "you win")
            }
        }
    }

    const isFirstOrSecondCard = () => {
        return (selectCardsState === null) ? 1 : 2
    }

    const turnSelectedCard = () => {
        card.status = card.status === "close" ? "open" : "close"
    }

    const firstCardSelected = () => {
        setTimeout(() => {
            setCardStatus(card.status)
            setScoreState(scoreState + 100)
            setSelectCardsState(card)
        }, 1000);
    }

    const secondCardIsDifferent = () => {
        setTimeout(()=>{
            setCardStatus(card.status)
            turnSelectedCard()
            setTimeout(() => {
                setCardStatus(card.status)
            }, 1000);
        }, 500)
    }

    const secondCardIsEqual = () => {
        setCardStatus(card.status)
        card.status = "match"
        selectCardsState.status = "match"
        setTimeout(() => {
            setCardStatus(card.status)
            setSelectCardsState(selectCardsState)
            setScoreState(scoreState + 100)
            setSelectCardsState(null)
        }, 1000);
    }

    const [cardStatus, setCardStatus] = useState(card.status);

    return (
        <button className={`Card ${cardStatus}`} onClick={() => {
            if (card.status !== "match") changeStatus()
        }}>
            {cardStatus === "close" ? (
                <img src={cardBg} alt="random card" className="random-card" />
            ) : (
                Icon
            )}
        </button>
    );
};

export default Card;

import React, { useEffect, useState } from "react";
import "./Card.css";

import cardBg from "../assets/bg-card.jpg";

const Card = ({ card, index, content }) => {
    const [cardStatus, setCardStatus] = useState(card.status);
    const changeStatus = () => {
        if (cardStatus === "unknown") setCardStatus("open");
        else setCardStatus("unknown");
    };

    useEffect(() => {
        setCardStatus(card.status);
    }, [card]);

    return (
        <button className={`Card ${cardStatus}`} onClick={() => changeStatus()}>
            {cardStatus === "open" ? (
                <>
                    <i className={`${content[index]} text-card`}></i>
                </>
            ) : (
                <img src={cardBg} alt="random card" className="random-card" />
            )}
        </button>
    );
};

export default Card;

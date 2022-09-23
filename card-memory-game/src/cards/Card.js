import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({ card }) => {
    const [cardStatus, setCardStatus] = useState(card.status);
    const changeStatus = () => {
        if (cardStatus === "unknown") setCardStatus("open");
        else setCardStatus("unknown");
    };

    useEffect(() => {
        setCardStatus(card.status)
    }, [card]);

    return (
        <button
            className={`Card ${cardStatus}`}
            onClick={() => changeStatus()}
        ></button>
    );
};

export default Card;

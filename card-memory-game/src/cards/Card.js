import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({ status }) => {
    const [cardStatus, setCardStatus] = useState(status);
    useEffect(() => {
        setCardStatus(status);
    }, [status]);
    return (
        <button
            className={`Card ${cardStatus}`}
            onClick={() => setCardStatus("open")}
        ></button>
    );
};

export default Card;

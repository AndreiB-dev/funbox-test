import React, { useState } from "react";
import Background from "../../assets/illustration/card.png";
import { Product, Status } from "../../types/types";
import { getStyle } from "../../utils/getStatusStyle";
import { CardFooter } from "../CardFooter";
import { Promo } from "../Promo";
import { WeightLabel } from "../WeightLabel";

import "./card.scss";

export const Card = ({ item }: { item: Product }) => {
    const [status, setStatus] = useState<Status>(item.status);
    const [hovered, setHovered] = useState<boolean>(false);

    const onClickHandler = () => {
        if (status === "active") {
            setHovered(false);
            setStatus("selected");
        }
        if (status === "selected") setStatus("active");
    };

    const hoverHandler = (bool: boolean) => {
        if (status === "selected") {
            setHovered(bool)
        }
    };
    
    return (
        <div className="container">
            <div
                className={getStyle("card", status)}
                onMouseEnter={() => hoverHandler(true)}
                onMouseLeave={() => hoverHandler(false)}
                onClick={onClickHandler}
            >
                <div
                    className="card__bg"
                    style={{
                        backgroundImage: `url(${Background})`,
                        opacity: status === "disabled" ? 0.5 : 1,
                    }}
                >
                    <div
                        className={
                            status === "disabled"
                                ? "card-content--disabled"
                                : "card-content"
                        }
                    >
                        <p
                            className={
                                hovered && status === "selected"
                                    ? "card-content__header--hovered"
                                    : "card-content__header"
                            }
                        >
                            {hovered && status === "selected"
                                ? "???????? ???? ?????????????????"
                                : "?????????????????? ?????????????????? ??????????"}
                        </p>
                        <h2 className="card-content__title">{item.title}</h2>
                        <p className="card-content__taste">{item.taste}</p>
                        <Promo
                            packsToBuy={item.packsToBuy}
                            gift={item.gift}
                            isClientSatisfied={item.isClientSatisfied}
                        />
                        <WeightLabel status={status} weight={item.weight} />
                    </div>
                </div>
            </div>
            <CardFooter
                status={status}
                description={item.description}
                onClick={onClickHandler}
                taste={item.taste}
            />
        </div>
    );
};

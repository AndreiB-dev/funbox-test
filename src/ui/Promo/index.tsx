import React from "react";
import { getPlural } from "../../utils/getPlural";

import "./promo.scss";

export const Promo = ({
    packsToBuy,
    gift,
    isClientSatisfied,
}: {
    packsToBuy: number;
    gift: number;
    isClientSatisfied: boolean;
}) => {
    return (
        <div className="promo">
            <div className="line">
                <p className="line__number">{packsToBuy}</p>&nbsp;
                <p>порций</p>
            </div>
            <div className="line">
                <p className="line__number">{gift > 1 ? gift : ""}</p>&nbsp;
                <p>{`${getPlural(gift)} в подарок`}</p>
            </div>
            {isClientSatisfied && <p>заказчик доволен</p>}
        </div>
    );
};

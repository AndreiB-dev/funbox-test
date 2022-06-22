import React from "react";
import { Status } from "../../types/types";
import { getStyle } from "../../utils/getStatusStyle";

import "./weightLabel.scss";

export const WeightLabel = ({
    status,
    weight,
}: {
    status: Status;
    weight: number;
}) => {
    return (
        <div className={getStyle("label", status)}>
            <p className="label__num">{weight}</p>
            <p className="label__unit">кг</p>
        </div>
    );
};

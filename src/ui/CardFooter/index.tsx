import React, { memo } from "react";
import { Status } from "../../types/types";
import { getFooterText } from "../../utils/getFooterText";

import "./cardFooter.scss";

export const CardFooter = memo(({
    status,
    onClick,
    description,
    taste,
}: {
    status: Status;
    onClick: () => void;
    description: string;
    taste: string;
}) => {
    console.log("3");
    
    return (
        <div className="footer">
            <p
                className={
                    status === "disabled"
                        ? "footer__text--disabled"
                        : "footer__text"
                }
            >
                {getFooterText(status, description, taste)}
            </p>
            &nbsp;
            {status === "active" && (
                <p className="footer__link" onClick={onClick}>
                    купи.
                </p>
            )}
        </div>
    );
});

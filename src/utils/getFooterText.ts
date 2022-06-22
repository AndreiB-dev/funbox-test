import { Status } from "../types/types";

export const getFooterText = (
    status: Status,
    description: string,
    taste: string
): string => {
    if (status === "active") {
        return "Чего сидишь? Порадуй котэ, ";
    }
    if (status === "disabled") {
        return `Печалька, ${taste} закончился`;
    }
    return description;
};

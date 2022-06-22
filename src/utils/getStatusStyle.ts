import { Status } from "../types/types";

export const getStyle = (className: string, status: Status): string => {
    if (status === "active") {
        return className;
    }
    return `${className}--${status}`;
};

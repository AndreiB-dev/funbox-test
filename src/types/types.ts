export interface Product {
    id: string,
    title: string,
    taste: string,
    packsToBuy: number,
    gift: number,
    isClientSatisfied: boolean,
    status: Status,
    weight: number,
    description: string
};

export type Status =
    | "active"
    | "selected"
    | "disabled";
import React from "react";
import Background from "../../assets/illustration/pattern.png";
import { Product } from "../../types/types";
import { Card } from "../../ui/Card";

import "./products.scss";

export const Products = () => {
    const data: Product[] = [
        {
            id: "111",
            title: "Нямушка",
            taste: "с фуа-гра",
            packsToBuy: 10,
            gift: 1,
            isClientSatisfied: false,
            status: "active",
            weight: 0.5,
            description: "Печень утки разварная с артишоками.",
        },
        {
            id: "112",
            title: "Нямушка",
            taste: "с рыбой",
            packsToBuy: 40,
            gift: 2,
            isClientSatisfied: false,
            status: "active",
            weight: 2,
            description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        },
        {
            id: "113",
            title: "Нямушка",
            taste: "с курой",
            packsToBuy: 100,
            gift: 5,
            isClientSatisfied: true,
            status: "disabled",
            weight: 5,
            description: "Филе из цыплят с трюфелями в бульоне.",
        },
    ];
    return (
        <div
            className="products"
            style={{
                backgroundImage: `url(${Background})`,
            }}
        >
            <div className="products__bg">
                <p className="products__header">Ты сегодня покормил кота?</p>
                <div className="products__cards">
                    {data.map((item) => (
                        <Card item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

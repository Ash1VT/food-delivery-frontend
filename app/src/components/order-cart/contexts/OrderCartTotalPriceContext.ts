import React from "react";
import { OrderCartTotalPriceContextProps } from "../order_cart.types";

export const OrderCartTotalPriceContext = React.createContext<OrderCartTotalPriceContextProps>({
    totalPrice: 0,
    setTotalPrice: () => {},
});
import { createSelector } from "@reduxjs/toolkit";
import { OrderCartItem, OrderCartItemProps } from "../../components/order-cart/order_cart.types";
import { calculateOrderCartItemPrice, calculateOrderCartTotalPrice } from "../../components/order-cart/utils/price";
import { getMenuCategories } from "./menuSelectors";
import { RootState } from "../store";

export const orderCartItemsSelector = (state: RootState) => state.orderCartReducer.orderCartItems

export const getOrderCartItems = createSelector(
    [orderCartItemsSelector, getMenuCategories],
    (orderCartItems, menuCategories) => {
        return orderCartItems.reduce((acc: OrderCartItem[], orderCartItem) => {
            for (const menuCategory of menuCategories) {
                const menuItem = menuCategory.items.find(menuItem => menuItem.id === orderCartItem.id)
                if (menuItem) {
                    acc.push(
                        { 
                            id: menuItem.id,
                            imageUrl: menuItem.imageUrl,
                            categoryName: menuCategory.name,
                            name: menuItem.name,
                            price: menuItem.price,
                            quantity: orderCartItem.quantity
                        }
                    );
                    break;
                }
            }

            return acc;
        }, []);
    }
)

export const getIfOrderItemInCart = createSelector(
    [getOrderCartItems, (_, orderCartItemId: string) => orderCartItemId],
    (orderCartItems, orderCartItemId) => {
        return Boolean(orderCartItems.find(item => item.id === orderCartItemId))
    }
)
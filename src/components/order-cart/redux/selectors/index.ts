import { createSelector } from "@reduxjs/toolkit";
import { getMenuCategories, getMenuItems } from "src/pages/menu/redux/selectors";
import { RootState } from "src/store/store";
import { OrderCartItemProps } from "../../order_cart.types";
import { calculateOrderCartItemPrice, calculateOrderCartTotalPrice } from "../../utils/price";

export const orderCartItemsSelector = (state: RootState) => state.orderCartReducer.orderCartItems

export const getOrderCartItems = createSelector(
    [orderCartItemsSelector, getMenuCategories],
    (orderCartItems, menuCategories) => {
        return orderCartItems.reduce((acc: OrderCartItemProps[], orderCartItem) => {
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

export const getOrderCartItemPrice = createSelector(
    [getOrderCartItems, (_, orderCartItemId: string) => orderCartItemId],
    (orderCartItems, orderCartItemId) => {
        return calculateOrderCartItemPrice(orderCartItems.find(item => item.id === orderCartItemId) as OrderCartItemProps)
    }
)


export const getOrderCartTotalPrice = createSelector(
    [getOrderCartItems],
    (orderCartItems) => {
        return calculateOrderCartTotalPrice(orderCartItems)
    }
)

export const getIfOrderItemInCart = createSelector(
    [getOrderCartItems, (_, orderCartItemId: string) => orderCartItemId],
    (orderCartItems, orderCartItemId) => {
        return Boolean(orderCartItems.find(item => item.id === orderCartItemId))
    }
)
import { createSlice } from "@reduxjs/toolkit";
import IOrder from "../models/IOrder";

interface OrderState {
    orders: IOrder[]
}


const initialState: OrderState = {
    orders: [
        {
            id: '1',
            customerId: '1',
            courierId: '1',
            restaurantId: '1',
            status: 'pending',
            createdAt: new Date(),
            items: [
                {
                    id: '1',
                    menuItemName: 'Test',
                    menuItemCategoryName: 'Test', 
                    menuItemPrice: 0, 
                    menuItemImageUrl: 'images/food1.png',
                    quantity: 0
                },
                {
                    id: '1',
                    menuItemName: 'TestTestTest',
                    menuItemCategoryName: 'Test', 
                    menuItemPrice: 0, 
                    menuItemImageUrl: 'images/food1.png',
                    quantity: 0
                }
            ],
            deliveryInformation: {
                id: '1',
                originAddress: 'test',
                destinationAddress: 'test',
                destiantionAddressId: '1',
            },
            priceInformation: {
                id: '1',
                orderItemsPrice: 0,
                promocodeName: "SUMMER20",
                promocodeDiscount: 20,
                deliveryPrice: 0,
                decountedItemsPrice: 0,
                totalPrice: 0
            }
        }
    ]
}


const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {}
})


export default orderSlice.reducer;
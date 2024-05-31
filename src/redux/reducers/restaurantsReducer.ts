import { createSlice } from "@reduxjs/toolkit";
import IRestaurant from "../models/IRestaurant";

interface RestaurantsState {
    restaurants: IRestaurant[]
}

const initialState: RestaurantsState = {
    restaurants: [
        {
            id: '1',
            name: 'McDonalds', 
            description: 'TestTestTes tTestTestTes tTestTestTest TestTestTestT estTestTestTestTestTe stTestTes tTestTestTestTe stTestTestT estTestTest',
            imageUrl: 'images/food7.png',
            phone: '123-456-7890',
            email: "test@me.com",
            ratingValue: 5.00,
            reviewsCount: 200,
            address: '123 Main St',
            isActive: true,
            workingHours: [
                {
                    id: '1',
                    dayOfWeek: 'Monday',
                    openingTime: '10:00',
                    closingTime: '22:00',
                    restaurantId: '1'
                }
            ]
        },
        // {
        //     id: '2',
        //     name: 'McDonalds',
        //     description: 'Test',
        //     imageUrl: 'images/food1.png',
        //     ratingValue: 5,
        //     reviewsCount: 200,
        //     address: '123 Main St'


        // },
        // {
        //     id: '3',
        //     name: 'McDonalds',
        //     description: 'Test',
        //     imageUrl: 'images/food1.png',
        //     ratingValue: 5,
        //     reviewsCount: 200,
        //     address: '123 Main St'


        // },
        // {
        //     id: '4',
        //     name: 'McDonalds',
        //     description: 'Test',
        //     imageUrl: 'images/food1.png',
        //     ratingValue: 5,
        //     reviewsCount: 200,
        //     address: '123 Main St'


        // },
        // {
        //     id: '5',
        //     name: 'McDonalds',
        //     description: 'Test',
        //     imageUrl: 'images/food1.png',
        //     ratingValue: 5,
        //     reviewsCount: 200,
        //     address: '123 Main St'


        // },
        // {
        //     id: '6',
        //     name: 'McDonalds',
        //     description: 'Test',
        //     imageUrl: 'images/food1.png',
        //     ratingValue: 5,
        //     reviewsCount: 200,
        //     address: '123 Main St'

        // },
        // {
        //     id: '7',
        //     name: 'McDonalds',
        //     description: 'Test',
        //     imageUrl: 'images/food1.png',
        //     ratingValue: 5,
        //     reviewsCount: 200,
        //     address: '123 Main St'

        // },
        // {
        //     id: '8',
        //     name: 'McDonalds',
        //     description: 'Test',
        //     imageUrl: 'images/food1.png',
        //     ratingValue: 5,
        //     reviewsCount: 200,
        //     address: '123 Main St'

        // },
        // {
        //     id: '9',
        //     name: 'McDonalds',
        //     description: 'Test',
        //     imageUrl: 'images/food1.png',
        //     ratingValue: 5,
        //     reviewsCount: 200,
        //     address: '123 Main St'

        // },
        // {
        //     id: '10',
        //     name: 'McDonalds', 
        //     description: 'TestTestTes tTestTestTes tTestTestTest TestTestTestT estTestTestTestTestTe stTestTes tTestTestTestTe stTestTestT estTestTest',
        //     imageUrl: 'images/food1.png',
        //     ratingValue: 5.00,
        //     reviewsCount: 200,
        //     address: '123 Main St'

        // },
        // {
        //     id: '11',
        //     name: 'McDonalds',
        //     description: 'Test',
        //     imageUrl: 'images/food1.png',
        //     ratingValue: 5,
        //     reviewsCount: 200,
        //     address: '123 Main St'

        // },
        // {
        //     id: '12',
        //     name: 'McDonalds',
        //     description: 'Test',
        //     imageUrl: 'images/food1.png',
        //     ratingValue: 5,
        //     reviewsCount: 200,
        //     address: '123 Main St'

        // },
        // {
        //     id: '13',
        //     name: 'McDonalds',
        //     description: 'Test',
        //     imageUrl: 'images/food1.png',
        //     ratingValue: 5,
        //     reviewsCount: 200,
        //     address: '123 Main St'

        // },
        // {
        //     id: '14',
        //     name: 'McDonalds',
        //     description: 'Test',
        //     imageUrl: 'images/food1.png',
        //     ratingValue: 5,
        //     reviewsCount: 200,
        //     address: '123 Main St'

        // },
    ]
}

const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
       
    }
})

export default restaurantsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import IUser from "../models/IUser";
import IRestaurantApplication from "../models/IRestaurantApplication";
import ICustomerAddress from "../models/ICustomerAddress";

interface CurrentModeratorState {
    users: IUser[]
    restaurantApplications: IRestaurantApplication[]
    customerAddresses: ICustomerAddress[]
}

const initialState: CurrentModeratorState = {
    users: [
        {
            "id": "1",
            "firstName": "John",
            "lastName": "Doe",
            "fullName": "John Doe",
            "phone": "1234567890",
            "birthDate": new Date("1990-05-14T00:00:00Z"),
            "imageUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "email": "john.doe@example.com",
            "role": "customer",
            "isActive": true,
            "isEmailVerified": true
        },
        {
            "id": "2",
            "firstName": "Jane",
            "lastName": "Smith",
            "fullName": "Jane Smith",
            "phone": "0987654321",
            "birthDate": new Date("1985-09-23T00:00:00Z"),
            "imageUrl": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "email": "jane.smith@example.com",
            "role": "customer",
            "isActive": true,
            "isEmailVerified": true
        },
        {
            "id": "3",
            "firstName": "Alice",
            "lastName": "Johnson",
            "fullName": "Alice Johnson",
            "phone": "1122334455",
            "birthDate": new Date("1992-11-02T00:00:00Z"),
            "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "email": "alice.johnson@example.com",
            "role": "customer",
            "isActive": true,
            "isEmailVerified": true
        },
        {
            "id": "4",
            "firstName": "Bob",
            "lastName": "Williams",
            "fullName": "Bob Williams",
            "phone": "5566778899",
            "birthDate": new Date("1988-03-15T00:00:00Z"),
            "imageUrl": "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "email": "bob.williams@example.com",
            "role": "customer",
            "isActive": true,
            "isEmailVerified": true
        },
        {
            "id": "5",
            "firstName": "Sara",
            "lastName": "Davis",
            "fullName": "Sara Davis",
            "phone": "6677889900",
            "birthDate": new Date("1997-12-10T00:00:00Z"),
            "imageUrl": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "email": "sara.davis@example.com",
            "role": "customer",
            "isActive": true,
            "isEmailVerified": true
        }
    ],
    restaurantApplications: [
        {
            "id": "1",
            "name": "Gourmet Bistro",
            "email": "info@gourmetbistro.com",
            "phone": "1234567890",
            "address": "123 Fine Dining Ave, Springfield, IL",
            "description": "A place for gourmet meals and fine dining.",
            "type": "create",
            "restaurantManagerId": "1"
        },
        {
            "id": "2",
            "name": "Sushi House",
            "email": "contact@sushihouse.com",
            "phone": "0987654321",
            "address": "456 Sushi Lane, Springfield, IL",
            "description": "Authentic Japanese sushi made fresh daily.",
            "type": "update",
            "restaurantManagerId": "2"
        },
        {
            "id": "3",
            "name": "Pasta Palace",
            "email": "hello@pastapalace.com",
            "phone": "1122334455",
            "address": "789 Italian Blvd, Springfield, IL",
            "description": "Delicious pasta dishes and more.",
            "type": "create",
            "restaurantManagerId": "3"
        },
        {
            "id": "4",
            "name": "Burger Barn",
            "email": "support@burgerbarn.com",
            "phone": "5566778899",
            "address": "101 Burger St, Springfield, IL",
            "description": "Juicy burgers with all the fixings.",
            "type": "update",
            "restaurantManagerId": "4"
        },
        {
            "id": "5",
            "name": "Pizza Planet",
            "email": "admin@pizzaplanet.com",
            "phone": "6677889900",
            "address": "202 Pizza Rd, Springfield, IL",
            "description": "Out of this world pizza.",
            "type": "create",
            "restaurantManagerId": "5"
        }
    ],
    customerAddresses: [
        {
            "id": "1",
            "country": "USA",
            "region": "California",
            "details": "1234 Elm Street, Apartment 56, San Francisco, CA 94107",
            "approvalStatus": "approved",
            "customerId": "1"
        },
        {
            "id": "2",
            "country": "Canada",
            "region": "Ontario",
            "details": "789 Maple Road, Unit 12, Toronto, ON M5H 2N2",
            "approvalStatus": "approved",
            "customerId": "1"
        },
        {
            "id": "3",
            "country": "UK",
            "region": "London",
            "details": "45 Baker Street, Flat 3B, London W1U 8EW",
            "approvalStatus": "approved",
            "customerId": "1"
        },
        {
            "id": "4",
            "country": "Australia",
            "region": "New South Wales",
            "details": "6789 Sydney Road, House 22, Sydney, NSW 2000",
            "approvalStatus": "approved",
            "customerId": "1"
        },
        {
            "id": "5",
            "country": "Germany",
            "region": "Bavaria",
            "details": "1011 Berlin Street, Floor 4, Munich, BY 80331",
            "approvalStatus": "approved",
            "customerId": "1"
        }
    ]
}

const currentModeratorSlice = createSlice({
    name: 'currentModerator',
    initialState,
    reducers: {
       
    }
})

export default currentModeratorSlice.reducer;
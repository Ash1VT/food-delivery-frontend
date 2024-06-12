import { restaurantMicroserviceBaseUrl, orderMicroserviceBaseUrl, reviewMicroserviceBaseUrl } from './../constants/microservidesUrls';
import axios from "axios";
import { menuMicroserviceBaseUrl, userMicroserviceBaseUrl } from "src/constants/microservidesUrls";


export const userMicroservice = axios.create({
    withCredentials: true,
    baseURL: userMicroserviceBaseUrl,
})

export const menuMicroservice = axios.create({
    withCredentials: true,
    baseURL: menuMicroserviceBaseUrl,
})

export const restaurantMicroservice = axios.create({
    withCredentials: true,
    baseURL: restaurantMicroserviceBaseUrl,
})

export const orderMicroservice = axios.create({
    withCredentials: true,
    baseURL: orderMicroserviceBaseUrl,
})

export const reviewMicroservice = axios.create({
    withCredentials: true,
    baseURL: reviewMicroserviceBaseUrl,
})
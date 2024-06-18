import moment from "moment";
import { Restaurant } from "src/models/restaurant.interfaces";


const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const isRestaurantOpen = (restaurant: Restaurant) => {
    const now = moment().utc()
    const today = days[now.day()]
    const workingHours = restaurant?.workingHours.find(workingHour => workingHour.dayOfWeek === today)
    const nowTime = moment(now.format('HH:mm'), 'HH:mm');
    const openingTime = moment(workingHours?.openingTime, 'HH:mm');
    const closingTime = moment(workingHours?.closingTime, 'HH:mm');
    return workingHours ? nowTime.isBetween(openingTime, closingTime) : false
}

export default isRestaurantOpen
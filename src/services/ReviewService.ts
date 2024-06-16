import { Review, ReviewCreate, ReviewUpdate } from "src/models/reviews.interfaces";
import sendPrivateRequest from "src/redux/utils/sendPrivateRequest";
import { reviewMicroservice } from "./axios";
import { CourierRating } from "src/models/courierRating,interfaces";

export class ReviewService {
    public static parseOrderReviewCreateToRequestData(data: ReviewCreate): any {
        return {
            rating: data.rating,
            comment: data.comment
        }
    }

    public static parseMenuItemReviewCreateToRequestData(data: ReviewCreate): any {
        return {
            rating: data.rating,
            comment: data.comment
        }
    }

    public static parseRestaurantReviewCreateToRequestData(data: ReviewCreate): any {
        return {
            rating: data.rating,
            comment: data.comment
        }
    }

    public static parseReviewUpdateToRequestData(data: ReviewUpdate): any {
        return {
            rating: data.rating,
            comment: data.comment
        }
    }

    public static parseReviewFromResponseData(data: any): Review {
        return {
            id: data.id,
            customerFullName: data.customer_full_name,
            customerImageUrl: data.customer_image_url,
            customerId: data.customer_id,
            orderId: data.order_id,
            restaurantId: data.restaurant_id,
            itemId: data.menu_item_id,
            rating: data.rating,
            comment: data.comment
        }
    }

    public static parseReviewsListFromResponseData(data: any): Review[] {
        return data.map((review: any) => this.parseReviewFromResponseData(review))
    }

    public static async getCourierReviews(courierId: string): Promise<Review[]> {
        return await sendPrivateRequest<Review[]>(async () => {
            const response = await reviewMicroservice.get(`/couriers/${courierId}/reviews/`)
            return this.parseReviewsListFromResponseData(response.data)
        })
    }

    public static async getOrderReview(orderId: string): Promise<Review | undefined | null> {
        const response = await reviewMicroservice.get(`/orders/${orderId}/review/`)
        return this.parseReviewFromResponseData(response.data)
    }

    public static async getCurrentCustomerMenuItemReview(menuItemId: string): Promise<Review> {
        return await sendPrivateRequest<Review>(async () => {
            const response = await reviewMicroservice.get(`/menu_items/${menuItemId}/reviews/current/`)
            return this.parseReviewFromResponseData(response.data)
        })
    }

    public static async getMenuItemReviews(itemId: string): Promise<Review[]> {
        const response = await reviewMicroservice.get(`/items/${itemId}/reviews/`)
        return this.parseReviewsListFromResponseData(response.data)
    }

    public static async getCurrentCustomerRestaurantReview(restaurantId: string): Promise<Review> {
        return await sendPrivateRequest<Review>(async () => {
            const response = await reviewMicroservice.get(`/restaurants/${restaurantId}/reviews/current/`)
            return this.parseReviewFromResponseData(response.data)
        })
    }

    public static async getRestaurantReviews(restaurantId: string): Promise<Review[]> {
        const response = await reviewMicroservice.get(`/restaurants/${restaurantId}/reviews/`)
        return this.parseReviewsListFromResponseData(response.data)
    }

    public static async getCourierRating(courierId: string): Promise<CourierRating> {
        const response = await reviewMicroservice.get(`/couriers/${courierId}/rating/`)
        return response.data
    }

    public static async addOrderReview(review: ReviewCreate): Promise<Review> {
        const reviewCreateData = this.parseOrderReviewCreateToRequestData(review)

        return await sendPrivateRequest<Review>(async () => {
            const response = await reviewMicroservice.post(`/orders/${review.orderId}/reviews/}`, reviewCreateData)
            return this.parseReviewFromResponseData(response.data)
        })
    }

    public static async addMenuItemReview(review: ReviewCreate): Promise<Review> {
        const reviewCreateData = this.parseMenuItemReviewCreateToRequestData(review)

        return await sendPrivateRequest<Review>(async () => {
            const response = await reviewMicroservice.post(`/items/${review.itemId}/reviews/}`, reviewCreateData)
            return this.parseReviewFromResponseData(response.data)
        })
    }

    public static async addRestaurantReview(review: ReviewCreate): Promise<Review> {
        const reviewCreateData = this.parseRestaurantReviewCreateToRequestData(review)

        return await sendPrivateRequest<Review>(async () => {
            const response = await reviewMicroservice.post(`/restaurants/${review.restaurantId}/reviews/}`, reviewCreateData)
            return this.parseReviewFromResponseData(response.data)
        })
    }

    public static async updateReview(review: ReviewUpdate): Promise<Review> {
        const reviewUpdateData = this.parseReviewUpdateToRequestData(review)

        return await sendPrivateRequest<Review>(async () => {
            const response = await reviewMicroservice.patch(`/reviews/${review.id}/`, reviewUpdateData)
            return this.parseReviewFromResponseData(response.data)
        })
    }

    public static async deleteReview(id: string): Promise<void> {
        await sendPrivateRequest<void>(async () => {
            await reviewMicroservice.delete(`/reviews/${id}/`)
        })
    }
}
import AvailableOrdersPage from "./pages/available-orders/AvailableOrdersPage";
import LoginPage from "./pages/login/LoginPage";
import MainPage from "./pages/main/MainPage";
import ManagerPanelPage from "./pages/manager-panel/ManagerPanelPage";
import MenuItemReviewsPage from "./pages/menu-item-reviews/MenuItemReviewsPage";
import MenuPage from "./pages/menu/MenuPage";
import ModeratorPanelPage from "./pages/moderator-panel/ModeratorPanelPage";
import OrderPlacingPage from "./pages/order-placing-page/OrderPlacingPage";
import ProfilePage from "./pages/profile";
import RegistrationPage from "./pages/registration/RegistrationPage";
import RestaurantOrdersPage from "./pages/restaurant-orders/RestaurantOrdersPage";
import RestaurantReviewsPage from "./pages/restaurant-reviews/RestaurantReviewsPage";
import RestaurantsPage from "./pages/restaurants/RestaurantsPage";

const commonRoutes = [
    {
        path: "/",
        name: "Home",
        exact: true,
        component: MainPage,
    },
    {
        path: "/restaurants",
        name: "Restaurants",
        exact: true,
        component: RestaurantsPage,
    },
    {
        path: "/restaurants/:restaurantId/menu",
        name: "Menu",
        exact: true,
        component: MenuPage,
    },
    {
        path: "/restaurants/:restaurantId/reviews",
        name: "Reviews",
        exact: true,
        component: RestaurantReviewsPage,
    },
    {
        path: "/restaurants/:restaurantId/items/:menuItemId",
        name: "MenuItem",
        exact: true,
        component: MenuItemReviewsPage,
    },
]

const commonAuthenticatedRoutes = [
    {
        path: "/profile",
        name: "Profile",
        exact: true,
        component: ProfilePage,
    }
]

export const guestRoutes = [
    ...commonRoutes,
    {
        path: "/login",
        name: "Login",
        exact: true,
        component: LoginPage,
    },
    {
        path: "/register",
        name: "Register",
        exact: true,
        component: RegistrationPage,
    },
    {
        path: "*",
        name: "404",
        exact: false,
        component: MainPage,
    }
]


export const customerRoutes = [
    ...commonRoutes,
    ...commonAuthenticatedRoutes,
    {
        path: "/orders/:orderId",
        name: "OrderPlacing",
        exact: true,
        component: OrderPlacingPage,
    },
    {
        path: "*",
        name: "404",
        exact: false,
        component: MainPage,
    }
]

export const courierRoutes = [
    ...commonRoutes,
    ...commonAuthenticatedRoutes,
    {
        path: "/orders/available",
        name: "AvailableOrders",
        exact: true,
        component: AvailableOrdersPage,
    },
    {
        path: "*",
        name: "404",
        exact: false,
        component: MainPage,
    }
]

export const restaurantManagerRoutes = [
    ...commonRoutes,
    ...commonAuthenticatedRoutes,
    {
        path: "/restaurant/orders",
        name: "RestaurantOrders",
        exact: true,
        component: RestaurantOrdersPage,
    },
    {
        path: "restaurants/panel",
        name: "ManagerPanel",
        exact: true,
        component: ManagerPanelPage,
    },
    {
        path: "*",
        name: "404",
        exact: false,
        component: MainPage,
    }
]

export const moderatorRoutes = [
    ...commonRoutes,
    ...commonAuthenticatedRoutes,
    {
        path: "moderator/panel",
        name: "ModeratorPanel",
        exact: true,
        component: ModeratorPanelPage,
    },
    {
        path: "*",
        name: "404",
        exact: false,
        component: MainPage,
    }
]

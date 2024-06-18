import { Store } from "react-notifications-component"

export const addSuccessNotification = (message: string) => {
    Store.addNotification({
        title: "Success",
        message: message,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true
        }
        
    })
}

export const addInfoNotification = (message: string) => {
    Store.addNotification({
        title: "Info",
        message: message,
        type: "info",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
            duration: 3000,
            onScreen: true
        }
    })
}

export const addErrorNotification = (message: string) => {
    Store.addNotification({
        title: "Error",
        message: message,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
            duration: 3000,
            onScreen: true
        }
    })
}
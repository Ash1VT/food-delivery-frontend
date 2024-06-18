export const closeModalWindow = () => {
    const modalWindow = document.querySelector("#popup-root");
    if (modalWindow) {
        modalWindow.remove();
    }
}
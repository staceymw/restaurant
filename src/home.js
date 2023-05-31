import MainRestaurant from "./imgs/main-restaurant.jpg";

function createHome() {
    const home = document.createElement('div');
    const restaurantImgContainer = document.createElement("div");
    const mainRestaurantImg = document.createElement("img");

    restaurantImgContainer.classList.add("img-container");

    home.classList.add("home");

    mainRestaurantImg.classList.add("img");
    mainRestaurantImg.src = MainRestaurant;

    restaurantImgContainer.appendChild(mainRestaurantImg);
    home.appendChild(restaurantImgContainer);

    return home;
}

function loadHome() {
    const mainContentArr = document.getElementsByClassName("main-content");
    const mainContent = mainContentArr[0];
    mainContent.textContent = "";

    mainContent.appendChild(createHome());
}

export default loadHome;
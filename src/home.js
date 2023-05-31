import MainRestaurant from "./imgs/main-restaurant.jpg";
import { createDivider, createParagraph } from "./utility";

function createHome() {
    const home = document.createElement('div');
    home.classList.add("home");

    const restaurantImgContainer = document.createElement("div");
    restaurantImgContainer.classList.add("img-container");

    const mainRestaurantImg = document.createElement("img");
    mainRestaurantImg.classList.add("img");
    mainRestaurantImg.src = MainRestaurant;

    const restaurantInfoContainer = document.createElement("div");
    restaurantInfoContainer.classList.add("info-container");

    const restaurantInfoHeading = document.createElement("h2");
    restaurantInfoHeading.classList.add("bakery-info-heading");
    restaurantInfoHeading.textContent = "Come have something sweet!";

    const restaurantInfo = "Come in to Beiko's Bakery, where passion and flavor unite to create mouthwatering delights that will satisfy your sweet cravings. We specialize in crafting extraordinary cakes and delectable pastries that are as visually stunning as they are delicious. Our skilled bakers blend traditional recipes with innovative techniques, resulting in creations that are both nostalgic and contemporary. From elegantly designed wedding cakes to whimsical birthday treats, each confection is meticulously handcrafted with the finest ingredients and an abundance of love. Step into our bakery and indulge in a world of irresistible flavors and captivating aromas that will transport you to a realm of sweet enchantment.";

    restaurantImgContainer.appendChild(mainRestaurantImg);
    home.appendChild(restaurantImgContainer);
    home.appendChild(createDivider());
    restaurantInfoContainer.appendChild(restaurantInfoHeading);
    restaurantInfoContainer.appendChild(createParagraph(restaurantInfo));
    home.appendChild(restaurantInfoContainer);
    home.appendChild(createDivider());


    return home;
}

function loadHome() {
    const mainContentArr = document.getElementsByClassName("main-content");
    const mainContent = mainContentArr[0];
    mainContent.textContent = "";

    mainContent.appendChild(createHome());
}

export default loadHome;
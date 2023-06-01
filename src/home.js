import MainRestaurant from "./imgs/main-restaurant.jpg";
import Chef from "./imgs/chef.jpeg";
import { createDivider, createParagraph, createContainer, createH2 } from "./utility";

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

    const businessInfoContainer = document.createElement("div");
    businessInfoContainer.classList.add("business-info");

    const hoursHeading = document.createElement("h2");
    hoursHeading.classList.add("hours-heading");
    hoursHeading.textContent = "Business Hours";

    const hoursWeekday = "Mon-Wed 8am-10pm";
    const hoursThur = "CLOSED";
    const hoursWeekend = "Sat-Sun 7am-11pm";

    const locationHeading = "Location";
    const locationClass = "location-heading";
    const locationInfo = "3355 Oakville Place";
    const locationInfo2 = "Anywhere Valley. NH";
    const locationInfo3 = "00000";

    const chefImgContainer = document.createElement("div");
    chefImgContainer.classList.add("img-container");
     
    const chefHeading = "Chef Beiko Fasso";

    const chefImg = document.createElement("img");
    chefImg.classList.add("img");
    chefImg.src = Chef;
    chefImg.setAttribute("id", "chef-img");
    
    restaurantImgContainer.appendChild(mainRestaurantImg);
    home.appendChild(restaurantImgContainer);
    home.appendChild(createDivider());

    restaurantInfoContainer.appendChild(restaurantInfoHeading);
    restaurantInfoContainer.appendChild(createParagraph(restaurantInfo));
    home.appendChild(restaurantInfoContainer);
    home.appendChild(createDivider());

    businessInfoContainer.appendChild(hoursHeading);
    businessInfoContainer.appendChild(createParagraph(hoursWeekday));
    businessInfoContainer.appendChild(createParagraph(hoursThur));
    businessInfoContainer.appendChild(createParagraph(hoursWeekday));
    businessInfoContainer.appendChild(createParagraph(hoursWeekend));
    businessInfoContainer.appendChild(createH2(locationHeading, locationClass));
    businessInfoContainer.appendChild(createParagraph(locationInfo));
    businessInfoContainer.appendChild(createParagraph(locationInfo2));
    businessInfoContainer.appendChild(createParagraph(locationInfo3));
    home.appendChild(businessInfoContainer);
    home.appendChild(createDivider());

    chefImgContainer.appendChild(createH2(chefHeading));
    chefImgContainer.appendChild(chefImg);
    home.appendChild(chefImgContainer);
    


    return home;
}

function loadHome() {
    const mainContentArr = document.getElementsByClassName("main-content");
    const mainContent = mainContentArr[0];
    mainContent.textContent = "";

    mainContent.appendChild(createHome());
}

export default loadHome;
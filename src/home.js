import MainRestaurant from "./imgs/main-restaurant.jpg";
import Chef from "./imgs/chef.jpeg";
import { createDivider, createParagraph, createContainer, createH2 } from "./utility";

function createHome() {
    const home = document.createElement('div');
    const restaurantImgContainer = addRestaurantImg();
    const restaurantInfoContainer = addRestaurantInfo();
    const businessInfoContainer = addBusinessInfo();
    const chefImgContainer = addChefImg();
    const chefInfoContainer = addChefInfo();

    home.classList.add("home");

    home.appendChild(restaurantImgContainer);
    home.appendChild(createDivider());
    home.appendChild(restaurantInfoContainer);
    home.appendChild(createDivider());
    home.appendChild(businessInfoContainer);
    home.appendChild(createDivider());
    home.appendChild(chefImgContainer);
    home.appendChild(chefInfoContainer);

    return home;
}

function addRestaurantImg() {
    const restaurantImgContainer = document.createElement("div");
    const mainRestaurantImg = document.createElement("img");
    
    restaurantImgContainer.classList.add("img-container");
    
    mainRestaurantImg.classList.add("img");
    mainRestaurantImg.src = MainRestaurant;

    restaurantImgContainer.appendChild(mainRestaurantImg);

    return restaurantImgContainer;
}

function addRestaurantInfo() {
    const restaurantInfoContainer = document.createElement("div");
    const restaurantInfoHeading = document.createElement("h2");

    restaurantInfoContainer.classList.add("info-container");

    restaurantInfoHeading.classList.add("bakery-info-heading");
    restaurantInfoHeading.textContent = "Come have something sweet!";

    const restaurantInfo = "Come in to Beiko's Bakery, where passion and flavor unite to create mouthwatering delights that will satisfy your sweet cravings. We specialize in crafting extraordinary cakes and delectable pastries that are as visually stunning as they are delicious. Our skilled bakers blend traditional recipes with innovative techniques, resulting in creations that are both nostalgic and contemporary. From elegantly designed wedding cakes to whimsical birthday treats, each confection is meticulously handcrafted with the finest ingredients and an abundance of love. Step into our bakery and indulge in a world of irresistible flavors and captivating aromas that will transport you to a realm of sweet enchantment.";
    
    restaurantInfoContainer.appendChild(restaurantInfoHeading);
    restaurantInfoContainer.appendChild(createParagraph(restaurantInfo));

    return restaurantInfoContainer;
}

function addBusinessInfo() {
    const businessInfoContainer = document.createElement("div");
    const hoursHeading = document.createElement("h2");

    businessInfoContainer.classList.add("business-info");

    hoursHeading.classList.add("hours-heading");
    hoursHeading.textContent = "Business Hours";

    const hoursWeekday = "Mon-Wed 8am-10pm";
    const hoursThur = "Thur CLOSED";
    const hoursFri = "Fri 8am-10pm";
    const hoursWeekend = "Sat-Sun 7am-11pm";

    const locationHeading = "Location"; 
    const locationClass = "location-heading";
    const locationInfo = "3355 Oakville Place"; 
    const locationInfo2 = "Anywhere Valley. NH";
    const locationInfo3 = "00000";

    businessInfoContainer.appendChild(hoursHeading);
    businessInfoContainer.appendChild(createParagraph(hoursWeekday));
    businessInfoContainer.appendChild(createParagraph(hoursThur));
    businessInfoContainer.appendChild(createParagraph(hoursFri));
    businessInfoContainer.appendChild(createParagraph(hoursWeekend));
    businessInfoContainer.appendChild(createH2(locationHeading, locationClass));
    businessInfoContainer.appendChild(createParagraph(locationInfo));
    businessInfoContainer.appendChild(createParagraph(locationInfo2));
    businessInfoContainer.appendChild(createParagraph(locationInfo3));

    return businessInfoContainer;
}

function addChefImg() {
    const chefImgContainer = document.createElement("div");
    const chefHeading = "Chef Beiko Fasso";
    const chefImg = document.createElement("img");

    chefImgContainer.classList.add("img-container");
     
    chefImg.classList.add("img");
    chefImg.src = Chef;
    chefImg.setAttribute("id", "chef-img");

    chefImgContainer.appendChild(createH2(chefHeading));
    chefImgContainer.appendChild(chefImg);

    return chefImgContainer;
}

function addChefInfo() {
    const chefInfoContainer = createContainer("info-container");
    const chefInfo = "Introducing our self-taught pastry wizard, who ignited his baking journey as a child and courageously opened his bakery at just 17. Radiating joy through his extraordinary creations, he finds true fulfillment in making others happy with his remarkable baking talent.";

    chefInfoContainer.appendChild(createParagraph(chefInfo));

    return chefInfoContainer;
}

function loadHome() {
    const mainContentArr = document.getElementsByClassName("main-content");
    const mainContent = mainContentArr[0];
    mainContent.textContent = "";

    mainContent.appendChild(createHome());
}

export default loadHome;
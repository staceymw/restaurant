import Bread from "./imgs/bread.jpeg";
import ChocolateCake from "./imgs/chocolate-cake.jpeg";
import Croissant from "./imgs/croissant.jpeg";
import Cupcake from "./imgs/cupcake.jpeg";
import Donut from "./imgs/donut.jpeg";
import FruitTart from "./imgs/fruit-tart.jpeg";
import {createContainer} from "./utility";

function createMenuItem(src, heading, price){
    const item = createContainer("item");
    const img = document.createElement('img');
    const itemHeading = document.createElement("h2");
    const itemPrice = document.createElement("p");

    img.src = src;
    img.classList.add("menu-img");
    itemHeading.textContent = heading;
    itemPrice.textContent = price;

    item.appendChild(img);
    item.appendChild(itemHeading);
    item.appendChild(itemPrice);

    return item
}

function createMenu() {
    const mainContentArr = document.getElementsByClassName("main-content");
    const mainContent = mainContentArr[0];
    const menu = document.createElement("div");
    const menuHeading = document.createElement("h1");

    menu.classList.add("menu");

    menuHeading.classList.add("menu-heading")
    menuHeading.textContent = "Menu";

    mainContent.appendChild(menuHeading);
    
    const item1 = createMenuItem(Croissant, "Daily Pastries", "$4.00");
    const item2 = createMenuItem(Cupcake, "Daily Cupcakes", "$4.00");
    const item3 = createMenuItem(Donut, "Daily Donuts", "$4.00");
    const item4 = createMenuItem(FruitTart, "Daily Tarts", "$4.00");
    const item5 = createMenuItem(ChocolateCake, "Whole Cakes", "$48.00+");
    const item6 = createMenuItem(Bread, "Bread Loaves", "$6.00");
   
    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);
    menu.appendChild(item4);
    menu.appendChild(item5);
    menu.appendChild(item6);

    return menu;
}

function loadMenu() {
    const mainContentArr = document.getElementsByClassName("main-content");
    const mainContent = mainContentArr[0];
    mainContent.textContent = "";

    mainContent.appendChild(createMenu());
}

export default loadMenu;
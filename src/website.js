/*import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact"*/

function createHeader() {
    const header = document.createElement('div');
    header.classList.add("header");

    const emptyDiv = document.createElement("div");
    emptyDiv.innerHTML = "";

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "Beiko's Bakery";

    

    header.appendChild(emptyDiv);
    header.appendChild(heading);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    const navList = document.createElement("ul");
    const homeNav = document.createElement("li");
    const menuNav = document.createElement("li");
    const contactNav = document.createElement("li");

    navList.classList.add("nav-list");
    
    homeNav.classList.add("nav-items");
    homeNav.textContent = "Home";

    menuNav.classList.add("nav-items");
    menuNav.textContent = "Menu";

    contactNav.classList.add("nav-items");
    contactNav.textContent = "Contact";

    navList.appendChild(homeNav);
    navList.appendChild(menuNav);
    navList.appendChild(contactNav);
    nav.appendChild(navList);

    /*addEventListener(homeNav, "click", loadHome);
    addEventListener(menuNav, "click", loadMenu);
    addEventListener(contactNav, "click", loadContact);*/


    return nav;
}

function addEventListener (element, event, handler) {
    element.addEventListener(event, handler, false);
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function createDivider() {
    const divider = document.createElement("hr");

    return divider;
}

function createImage()

function createMainContent() {
    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    return mainContent;
}

function createFooter() {
    const footer = document.createElement("footer");
    const gihubImg = document.createElement('img');

    gihubImg.src = 
    
    footer.appendChild(createDivider());
    footer.appendChild(createParagraph("Website by Stacey Walden"));


    
    

}


function initializeWebsite() {
    const body = document.getElementsByTagName("body")[0];
    const content = document.createElement('div');

    content.classList.add("content");

    content.appendChild(createHeader());
    content.appendChild(createMainContent());
    body.appendChild(content);
    body.appendChild(createFooter());
}

export default initializeWebsite
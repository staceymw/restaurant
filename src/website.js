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
    const buttonWrapper = document.createElement("div");

    buttonWrapper.classList.add("nav-list");
    
    const homeButton = document.createElement("button");
    homeButton.classList.add("nav-items");
    homeButton.textContent = "Home";

    const menuButton = document.createElement("button");
    menuButton.classList.add("nav-items");
    menuButton.textContent = "Menu";

    const contactButton = document.createElement("button");
    contactButton.classList.add("nav-items");
    contactButton.textContent = "Contact";

    buttonWrapper.appendChild(homeButton);
    buttonWrapper.appendChild(menuButton);
    buttonWrapper.appendChild(contactButton);
    nav.appendChild(buttonWrapper);


    return nav;
}



function initializeWebsite() {
    const body = document.getElementsByTagName("body")[0];
    const content = document.createElement('div');

    content.classList.add("content");

    content.appendChild(createHeader());
    body.appendChild(content);
}

export default initializeWebsite
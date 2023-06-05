function createMenu() {
    console.log("Hello from menu.js");
}

function loadMenu() {
    const mainContentArr = document.getElementsByClassName("main-content");
    const mainContent = mainContentArr[0];
    mainContent.textContent = "";

    createMenu();
}

export default loadMenu;
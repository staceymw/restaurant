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

function createH2(text, className) {
    const h2 = document.createElement("h2");
    h2.classList.add(className);
    h2.textContent = text;

    return h2;
}

function createContainer(className) {
    const container = document.createElement("div");
    container.classList.add(className);

    return container;
}

export {addEventListener, createParagraph, createDivider, createH2, createContainer};
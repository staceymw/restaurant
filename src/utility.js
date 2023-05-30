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

export {addEventListener, createParagraph, createDivider};
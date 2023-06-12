import { add } from "lodash";
import { createH2, createParagraph, createContainer } from "./utility";

function createContact() {
    const navItem = document.getElementById(nav3);
    console.log(nav3);
    const mainContentArr = document.getElementsByClassName("main-content");
    const mainContent = mainContentArr[0];
    const contactContainer = createContainer("contact-container");
    const contactHeading = document.createElement("h1");

    const phoneHeading = createH2("Phone Number", "contact-info-heading");
    const phoneNumber = createParagraph("555-123-4567");

    const addressHeading = createH2("Address", "contact-info-heading");
    const address = createParagraph("3355 Oakville Place");
    const address2 = createParagraph("Anywhere Valley, NH");
    const address3 = createParagraph("00000");

    const emailHeading = createH2("Email", "contact-info-heading");
    const emailInstruction = createParagraph("Send large orfer requests to:");
    const emailAddress = createParagraph("hello@beikosbakery.com");

    contactHeading.textContent = "Contact Us";

    mainContent.appendChild(contactHeading);
    contactContainer.appendChild(phoneHeading);
    contactContainer.appendChild(phoneNumber);
    contactContainer.appendChild(addressHeading);
    contactContainer.appendChild(address);
    contactContainer.appendChild(address2);
    contactContainer.appendChild(address3);
    contactContainer.appendChild(emailHeading);
    contactContainer.appendChild(emailInstruction);
    contactContainer.appendChild(emailAddress);

    

    return contactContainer;
}


function loadContact() {
    const mainContentArr = document.getElementsByClassName("main-content");
    const mainContent = mainContentArr[0];
    mainContent.textContent = "";

    mainContent.appendChild(createContact());
}

export default loadContact;
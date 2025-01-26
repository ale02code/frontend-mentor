const sectionSuccess = document.createElement("section");
const infoContainer = document.createElement("div");
const check = document.createElement("img");
const title = document.createElement("strong");
const moreInfo = document.createElement("p");
const dismissButton = document.createElement("button");

const hiddenContent = () => {
  sectionSuccess.style.display = "none";
}

export function success(email) {
  const mainContainer = document.querySelector(".main-container");
  sectionSuccess.classList.add("success-section");
  sectionSuccess.style.display = "flex";

  infoContainer.classList.add("success-section__information-container");

  check.src = "../assets/images/icon-success.svg"

  title.textContent = "Thanks for subscribing!"

  moreInfo.textContent = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription`

  dismissButton.textContent = "Dismiss message";

  dismissButton.addEventListener("click", hiddenContent)

  mainContainer.appendChild(sectionSuccess);
  sectionSuccess.appendChild(infoContainer);
  infoContainer.appendChild(check);
  infoContainer.appendChild(title);
  infoContainer.appendChild(moreInfo);
  sectionSuccess.appendChild(dismissButton);
}
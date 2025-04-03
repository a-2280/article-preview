const button = document.getElementById("share-button");
const popup = document.querySelector(".popup");
const icon = document.querySelector(".icon");
const mobilePopup = document.querySelector(".popup-contact-container");
const contactContainer = document.querySelector(".contact-container");
const mobileButton = document.querySelector(".popup-contact-button");

button.addEventListener("click", () => {
  const screenWidth = window.innerWidth;

  if (screenWidth > 700) {
    popup.classList.toggle("hide");
    button.classList.toggle("active-button");
    icon.classList.toggle("active-icon");
  } else {
    mobilePopup.classList.toggle("hide");
    contactContainer.classList.add("hide");
  }
});

mobileButton.addEventListener("click", () => {
  mobilePopup.classList.add("hide");
  contactContainer.classList.remove("hide");
});

function updateWindow() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 700) {
    mobilePopup.classList.add("hide");
    if (button.classList.contains("active-button")) {
      popup.classList.remove("hide");
    }
    if (contactContainer.classList.contains("hide")) {
      contactContainer.classList.remove("hide");
      button.classList.toggle("active-button");
      icon.classList.toggle("active-icon");
    }
  } else {
    popup.classList.add("hide");
    if (button.classList.contains("active-button")) {
      mobilePopup.classList.remove("hide");
      contactContainer.classList.add("hide");
    }
  }
}

window.addEventListener("resize", () => {
  updateWindow();
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".image-main-container");
  const image = document.createElement("img");

  if (document.body.clientWidth > 500) {
    image.src = "../assets/images/illustration-sign-up-desktop.svg";
  } else {
    image.src = "../assets/images/illustration-sign-up-mobile.svg";
  }

  container.appendChild(image);
});

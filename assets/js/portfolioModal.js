const ActiveClass = "active";

function displayModal(clickedImg) {
  const imgSrc = clickedImg.getAttribute("src");

  const carouselImages = document.querySelectorAll(".carousel-item img");

  setParentInactive(carouselImages);

  console.log(carouselImages);
  carouselImages.forEach((image) => {
    if (image.getAttribute("src") == imgSrc) {
      image.parentElement.classList.add(ActiveClass);
    }
  });
}

function setParentInactive(elements) {
  elements.forEach((element) => {
    if (element.parentElement.classList.contains(ActiveClass)) {
      element.parentElement.classList.remove(ActiveClass);
    }
  });
}

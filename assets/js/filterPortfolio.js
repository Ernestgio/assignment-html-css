const portfolioImageClassname = "port__img";
const webDesignClassname = "web__design";
const mobileAppClassname = "mobile__app";
const uiDesignClassname = "ui__design";

const allButtonId = "show__all__button";
const webDesignButtonId = "web__filter__button";
const mobileAppButtonId = "mobile__filter__button";
const uiDesignButtonId = "ui__filter__button";

const activeButtonClass = "active__filter";

function inactiveAllButton() {
  let allButton = document.getElementById(allButtonId);
  if (allButton.classList.contains(activeButtonClass)) {
    allButton.classList.remove(activeButtonClass);
  }

  let webDesignButton = document.getElementById(webDesignButtonId);
  if (webDesignButton.classList.contains(activeButtonClass)) {
    webDesignButton.classList.remove(activeButtonClass);
  }

  let mobileAppButton = document.getElementById(mobileAppButtonId);
  if (mobileAppButton.classList.contains(activeButtonClass)) {
    mobileAppButton.classList.remove(activeButtonClass);
  }

  let uiDesignButton = document.getElementById(uiDesignButtonId);
  if (uiDesignButton.classList.contains(activeButtonClass)) {
    uiDesignButton.classList.remove(activeButtonClass);
  }
}

function hideAll() {
  let images = document.getElementsByClassName(portfolioImageClassname);
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
}

function showAll() {
  inactiveAllButton();

  document.getElementById(allButtonId).classList.add(activeButtonClass);

  hideAll();
  let images = document.getElementsByClassName(portfolioImageClassname);
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "block";
  }
}

function showWebDesign() {
  inactiveAllButton();

  document.getElementById(webDesignButtonId).classList.add(activeButtonClass);

  hideAll();
  let images = document.getElementsByClassName(webDesignClassname);
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "block";
  }
}

function showMobileApp() {
  inactiveAllButton();

  document.getElementById(mobileAppButtonId).classList.add(activeButtonClass);

  hideAll();
  let images = document.getElementsByClassName(mobileAppClassname);
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "block";
  }
}

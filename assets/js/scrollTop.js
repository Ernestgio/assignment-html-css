let scrollButton = document.getElementById("scrollup");

window.onscroll = function () {
  checkScroll();
};

function checkScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function scrollUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

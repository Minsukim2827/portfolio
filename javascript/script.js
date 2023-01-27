//ON BUTTON PRESS, SLIDE TO SECTION
function scrollToSection(section) {
  const container = document.querySelector(section);
  container.scrollIntoView({ behavior: "smooth" });
}

//BACK TO TOP SECTION ON PAGE RELOAD
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Navigation Links Key Map
const navigationLinks = {
  "#welcome": document.getElementById("welcomeLink"),
  "#profile": document.getElementById("profileLink"),
  "#skill": document.getElementById("skillLink"),
  "#projects": document.getElementById("projectsLink"),
};

// Skill circle map
const skillCirclesMap = [
  document.getElementsByClassName("fill-up-five-circles"),
  document.getElementsByClassName("fill-up-four-circles"),
  document.getElementsByClassName("fill-up-three-circles"),
  document.getElementsByClassName("fill-up-two-circles"),
  document.getElementsByClassName("fill-up-one-circle"),
];

function init() {
  if (location.hash.length === 0) {
    writing();
    welcomeLink.classList.add("nav-link-active");
  } else {
    navBar.style.opacity = 1;
    startOverlay.style.width = "0vw";
    startOverlay.style.backgroundColor = "rgba(63,63,67,1)";
    welcomeHeadline.style.opacity = 0;
    cursor.style.opacity = 0;
  }
}

function resetByLocationChanged() {
  // Remove class for active link on every link
  Object.values(navigationLinks).forEach((linkElement) => {
    linkElement.classList.remove("nav-link-active");
  });
  // Remoce circle animation on all circleElements
  skillCirclesMap.forEach((circleElement) => {
    for (var i = 0; i < circleElement.length; i++) {
      circleElement[i].classList.remove("circle-animation");
    }
  });
}

function locationHashChanged() {
  resetByLocationChanged();
  // Adding the background color for the current selected nav link
  navigationLinks[
    Object.keys(navigationLinks).find(
      (linkElement) => linkElement === location.hash
    )
  ].classList.add("nav-link-active");
  // Add the circle animation
  if (location.hash === "#skill") {
    skillCirclesMap.forEach((circleElement) => {
      for (var i = 0; i < circleElement.length; i++) {
        circleElement[i].classList.add("circle-animation");
      }
    });
  }
}

window.onhashchange = locationHashChanged;
window.onload = init;
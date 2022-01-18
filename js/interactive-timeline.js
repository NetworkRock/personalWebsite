// Get all cards
const flipCard = document.getElementsByClassName("flip-card");

// Get all timeline items
const timelineItems = document.getElementsByClassName("timeline-link-item");

for (let i = 0; i < flipCard.length; i++) {
  // Fill the combinded Map
  timelineItems[i].setAttribute("id", i);
  flipCard[i].setAttribute("id", i);
  // Set first default card
  if (i === 0) {
    flipCard[i].setAttribute("style", "display:inline");
  }

  timelineItems[i].addEventListener('click', (click) => {
    for (let card of flipCard) {
      if (card.getAttribute("id") === click.target.getAttribute("id")) {
        card.setAttribute("style", "display:inline");
        card.classList.add("slide-in-fwd-center");
      } else {
        card.setAttribute("style", "display:none");
      }
    }
  });
}

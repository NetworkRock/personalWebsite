var flipCard = document.getElementsByClassName("flip-card");
var timelineItems = document.getElementsByClassName("timeline-link-item");

var combinedCardItemMap = new Map();

var counter = 0;

for (var i = 0; i < this.flipCard.length; i++) {
  // Fill the combinded Map
  timelineItems[i].setAttribute("id", i);
  this.flipCard[i].setAttribute("id", i);
  // Set first default card
  if (i === 0) {
    this.flipCard[i].setAttribute("style", "display:inline");
  }
  timelineItems[i].addEventListener("click", (click) => {
    for (card of this.flipCard) {
      console.log(card.getAttribute("id"));
      console.log(click.target.getAttribute("id"));

      if (card.getAttribute("id") === click.target.getAttribute("id")) {
        card.setAttribute("style", "display:inline");
        card.classList.add("slide-in-fwd-center");
      } else {
        card.setAttribute("style", "display:none");
      }
    }
  });
}

// Which texts should be written to the headline?
var textsToType = ["Hello, I am Robin"];
// Get the elment in which the text should go
var elementToTypewrite = document.getElementById("welcome-headline");
// Get the cursor element
var cursor = document.getElementById("cursor");
// Make an iterator out of the text array
var textsIterator = textsToType.values();

var startOverlay = document.getElementById("start-overlay");
var welcomeHeadline = document.getElementById("welcome-headline");
var cursor = document.getElementById("cursor");
var navBar = document.getElementById("navbar");

// Boolean for deleteMode
var deleteMode = false;
// Letter counter;
var letterCounter = 0;
// Get first text
var nextTextObject = textsIterator.next();
// Word counter
var wordCounter = 1;
// Pause Boolean
var pauseWriting = true;

function writing() {
  setTimeout(async () => {
    if (this.letterCounter < nextTextObject.value.length && !deleteMode) {
      typingLetters();
    } else {
      if (letterCounter === 0) {
        getNextText();
        this.deleteMode = false;
      } else {
        if (!(wordCounter >= textsToType.length)) {
          // Pause a bit before continue writing
          if (this.pauseWriting) {
            await pauseBeforeNextWord();
          }
          deletingLetters();
        } else {
          await pauseBeforeStartAnimation();
          navBar.classList.add("fade-in");
          startOverlay.classList.add("slide-to-right");
          welcomeHeadline.classList.add("fade-out");
          cursor.classList.add("fade-out");
        }
      }
    }
    writing();
  }, 70);
}

function typingLetters() {
  this.elementToTypewrite.appendChild(
    document.createTextNode(nextTextObject.value.charAt(this.letterCounter))
  );
  this.letterCounter++;
}
function deletingLetters() {
  this.deleteMode = true;
  this.letterCounter--;
  this.elementToTypewrite.removeChild(
    this.elementToTypewrite.childNodes[this.letterCounter]
  );
}

function pauseBeforeNextWord() {
  return new Promise((resolve) => {
    setTimeout(() => {
      this.pauseWriting = false;
      resolve();
    }, 2000);
  });
}

function pauseBeforeStartAnimation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 900);
  });
}

function getNextText() {
  this.nextTextObject = textsIterator.next();
  this.letterCounter = 0;
  this.wordCounter++;
  this.pauseWriting = true;
}

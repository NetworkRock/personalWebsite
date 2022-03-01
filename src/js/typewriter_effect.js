// Which texts should be written to the headline?
var textsToType = ["Hello, I am Robin", "I'm a software professional"];
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

var deleteMode = false;
var letterCounter = 0;
// Get first text
var nextTextObject = textsIterator.next();
var wordCounter = 1;
var pauseWriting = true;



function startAnimations() {
  navBar.classList.add("fade-in");
  startOverlay.classList.add("slide-to-right");
  welcomeHeadline.classList.add("fade-out");
  cursor.classList.add("fade-out");
}

const writing = async () => {
  setTimeout(async () => {
    if (letterCounter < nextTextObject.value.length && !deleteMode) {
      typingLetters();
    } else {
      if (letterCounter === 0) {
        getNextText();
        deleteMode = false;
      } else {
        if (!(wordCounter >= textsToType.length)) {
          // Pause a bit before continue writing
          if (pauseWriting) {
            await pauseBeforeNextWord();
          }
          deletingLetters();
        } else {
          await pauseBeforeStartAnimation();
          startAnimations();
        }
      }
    }
    writing();
  }, 70);
}

function typingLetters() {
  elementToTypewrite.appendChild(
    document.createTextNode(nextTextObject.value.charAt(letterCounter))
  );
  letterCounter++;
}
function deletingLetters() {
  deleteMode = true;
  letterCounter--;
  elementToTypewrite.removeChild(
    elementToTypewrite.childNodes[letterCounter]
  );
}

function pauseBeforeNextWord() {
  return new Promise((resolve) => {
    setTimeout(() => {
      pauseWriting = false;
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
  nextTextObject = textsIterator.next();
  letterCounter = 0;
  wordCounter++;
  pauseWriting = true;
}


export default writing
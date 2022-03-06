import $ from "jquery";

const textsToType = ["Hello, I am Robin", "I'm a software professional"];
const elementToTypewrite = $("#welcome-headline");
const cursor = $("#cursor");
const textsIterator = textsToType.values();
const startOverlay = $("#start-overlay");
const welcomeHeadline = $("#welcome-headline");
const navBar = $("#navbar");
let deleteMode = false;
let letterCounter = 0;
let nextTextObject = textsIterator.next();
let wordCounter = 1;
let pauseWriting = true;

const startAnimations = () => {
  navBar.addClass("fade-in");
  startOverlay.addClass("slide-to-right");
  welcomeHeadline.addClass("fade-out");
  cursor.addClass("fade-out");
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
            cursor.addClass('blinking-cursor')
            await pauseBeforeNextWord();
          }
          deletingLetters();
        } else {
          cursor.addClass('blinking-cursor')
          await pauseBeforeStartAnimation();
          startAnimations();
        }
      }
    }
    writing();
  }, 70);
}

const typingLetters = () => {
  cursor.removeClass('blinking-cursor')
  elementToTypewrite.append(nextTextObject.value.charAt(letterCounter))
  letterCounter++;
}
const deletingLetters = () => {
  cursor.removeClass('blinking-cursor')
  deleteMode = true;
  letterCounter--;
  elementToTypewrite.text(elementToTypewrite.text().slice(0, letterCounter))
}

const pauseBeforeNextWord = () => {
  cursor.addClass('blinking-cursor')
  return new Promise((resolve) => {
    setTimeout(() => {
      pauseWriting = false;
      resolve();
    }, 2000);
  });
}

const pauseBeforeStartAnimation = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 900);
  });
}

const getNextText = () => {
  nextTextObject = textsIterator.next();
  letterCounter = 0;
  wordCounter++;
  pauseWriting = true;
}


export default writing
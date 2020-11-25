// Which texts should be written to the headline?
var textsToType = ["Hi, my name is Robin", "I am the best combination of programming and music", "Check out my projects!"];
// Get the elment in which the text should go
var elementToTypewrite = document.getElementById('welcome-headline');
// Get the couror element
var cursor = document.getElementById('cursor');
// Make an iterator out of the text array
var textsIterator = textsToType.values();

// Boolean for deleteMode
var deleteMode = false;
// Letter counter;
var letterCounter = 0;
// Get first text
var nextTextObject = textsIterator.next();
// Word counter
var wordCounter = 1;

writing();

function writing() {
    setTimeout(() => {
        if (!nextTextObject.done) {
            if (this.letterCounter < nextTextObject.value.length && !deleteMode) {
                typingLetters();
            } else {
                if (letterCounter === 0) {
                    getNextText();
                    this.deleteMode = false;
                } else {
                    if(!(wordCounter >= textsToType.length)) {
                        deletingLetters();
                    } else {
                        textsIterator.next();
                    }
                }
            }
            writing();
        }
    }, 100);
}

function typingLetters() {
    var letterToWrite = document.createTextNode(nextTextObject.value.charAt(this.letterCounter));
    this.elementToTypewrite.appendChild(letterToWrite);
    this.letterCounter++;
}
function deletingLetters() {
    this.deleteMode = true;
    this.letterCounter--;
    this.elementToTypewrite.removeChild(this.elementToTypewrite.childNodes[this.letterCounter]);
}

function getNextText() {
        console.log("GET NEXT TEXT");
        this.nextTextObject = textsIterator.next();
        this.letterCounter = 0;
        this.wordCounter++;
}


var elementToTypewrite = document.getElementById('typewriter');
var cursor = document.getElementById('cursor');
var textsToType = ["Hi, my name is Robin", "Fullstack developer", "Check out my projects!"];
var personalProfile = document.getElementById('profileLink');

var textsIterator = textsToType.values();
var nextText = textsIterator.next();
var letterIterator = toLetterArray(nextText).values();


var typingInterval = setInterval(() => {
    typingTheText()
    .then(() => {
        setTimeout(() => {
            //personalProfile.click();
        }, 500)
    });
}, 100);

function typeTheNextLetter(nextLetter) {
    cursor.classList.remove("blinking-cursor");
    var letter = document.createTextNode(nextLetter.value);
    this.elementToTypewrite.insertBefore(letter, cursor);
}

function makeANewline() {
    var lineBreak = document.createElement('br');
    this.elementToTypewrite.insertBefore(lineBreak, cursor);
}

function toLetterArray(object) {
    var targetletterArray = [];
    var array = [];
    array.push(object.value);
    array.forEach(element => {
        for (var i = 0; i < element.length; i++) {
            targetletterArray.push(element[i]);
        }
    });
    return targetletterArray;
}

function typingTheText() {
    const promiseA = new Promise((resolve) => {
        cursor.classList.add("blinking-cursor");
        var nextLetter = this.letterIterator.next();
        if (!nextLetter.done) {
            typeTheNextLetter(nextLetter);
        } else {
            this.nextText = this.textsIterator.next();
            if (!this.nextText.done) {
                makeANewline();
                this.letterIterator = toLetterArray(this.nextText).values();
            } else {
                console.log('completed');
                clearInterval(this.typingInterval);
                resolve();
            }
        }
    });
    return promiseA;
}



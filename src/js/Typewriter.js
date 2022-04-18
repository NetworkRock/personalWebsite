import $ from "jquery";

/**
 * Describes the Typewriter
 * @class
 * @property {string[]} textsToType
 * @property {JQuery<HTMLElement>} elementToTypewrite
 * @property {JQuery<HTMLElement>} cursor
 * @property {IterableIterator<string>} textsIterator
 * @property {JQuery<HTMLElement>} startOverlay
 * @property {JQuery<HTMLElement>} navBar
 * @property {boolean} deleteMode
 * @property {number} letterCounter
 * @property {boolean} pauseWriting
 * @property {number} wordCounter
 * @property {IteratorResult<string, any>} nextTextObject
 * @classdesc This class representing a simulation of typing texts
*/

export class Typewriter {
  textsToType = [''];
  elementToTypewrite = null;
  #cursor = $("#cursor");
  #textsIterator = null
  #startOverlay = $("#start-overlay");
  #navBar = $("#navbar");
  #deleteMode = false;
  #letterCounter = 0;
  #pauseWriting = true;
  #wordCounter = 1;
  #nextTextObject = null

  /**
   * @constructs Typewriter
   * @param {string[]} textsToType
   * @param {JQuery<HTMLElement>} elementToTypewrite
   * @description 
   * The {@link textsToType} is the texts which gets typed by the typewriter class and the {@link elementToTypewrite}
   * is the html element where the text goes inside
   */
  constructor(textsToType, elementToTypewrite) {
    this.textsToType = textsToType
    this.elementToTypewrite = elementToTypewrite
    this.#textsIterator = this.textsToType.values();
    this.#nextTextObject = this.#textsIterator.next();
  }

  /**
   * @function
   * @inner
   * Asynchronous function which is the loop for writing whats inside {@link textsToType}
   */
  writing = async () => {
    setTimeout(async () => {
      if (this.#letterCounter < this.#nextTextObject.value.length && !this.#deleteMode) {
        this.#typingLetters();
      } else {
        if (this.#letterCounter === 0) {
          this.#getNextText();
          this.#deleteMode = false;
        } else {
          if (!(this.#wordCounter >= this.textsToType.length)) {
            // Pause a bit before continue writing
            if (this.#pauseWriting) {
              this.#cursor.addClass('blinking-cursor')
              await this.#pauseBeforeNextWord();
            }
            this.#deletingLetters();
          } else {
            this.#cursor.addClass('blinking-cursor')
            await this.#pauseBeforeStartAnimation();
            this.#startAnimations();
          }
        }
      }
      this.writing();
    }, 70);
  }
  /**
   * @function
   * @inner
   * Typewriter~startAnimations
   * Start the anination after the text is written
   */
  #startAnimations = () => {
    this.#navBar.addClass("fade-in");
    this.#startOverlay.addClass("slide-to-right");
    this.elementToTypewrite.addClass("fade-out");
    this.#cursor.addClass("fade-out");
  }

  /**
   * @function
   * @inner
   * Type the next character
   * Remove the class for blinking cursor
   */
  #typingLetters = () => {
    this.#cursor.removeClass('blinking-cursor')
    this.elementToTypewrite.append(this.#nextTextObject.value.charAt(this.#letterCounter))
    this.#letterCounter++;
  }

  /**
   * @function
   * @inner
   * Delete the last character
   * Remove the class for blinking cursor
   */
  #deletingLetters = () => {
    this.#cursor.removeClass('blinking-cursor')
    this.#deleteMode = true;
    this.#letterCounter--;
    this.elementToTypewrite.text(this.elementToTypewrite.text().slice(0, this.#letterCounter))
  }
  /**
   * @function
   * @inner
   * Make a short pause before the next word
   */
  #pauseBeforeNextWord = () => {
    this.#cursor.addClass('blinking-cursor')
    return new Promise((resolve) => {
      setTimeout(() => {
        this.#pauseWriting = false;
        resolve();
      }, 2000);
    });
  }
  /**
   * @function
   * @inner
   * Give the cursor a better look and feel
   * by pause blinking before next word
   */
  #pauseBeforeStartAnimation = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 900);
    });
  }
  /**
   * @function
   * @inner
   * Get the next text in the {@link textsToType}
   */
  #getNextText = () => {
    this.#nextTextObject = this.#textsIterator.next();
    this.#letterCounter = 0;
    this.#wordCounter++;
    this.#pauseWriting = true;
  }

}
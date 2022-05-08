// Mocks
import {
  typewriter_headline_correct,
  typewriter_headline_incorrect
} from "../../../__mocks__/typewriterHeadlineMock.js"
import {empty_data} from "../../../__mocks__/emptyDataMock"
import { Typewriter } from "../Typewriter"

const initial = '<navbar id="navbar"></navbar><section class="section-cards" id="welcome"><div id="start-overlay"><span><span id="welcome-headline" class="headline"></span><span id="cursor" class="blinking-cursor">|</span></span></div></section>'

const expectedHTMLOutputForCorrectDataAfterSecondRun = '<navbar id="navbar" class="fade-in"></navbar><section class="section-cards" id="welcome"><div id="start-overlay" class="slide-to-right"><span><span id="welcome-headline" class="headline fade-out">I\'m a software professional</span><span id="cursor" class="blinking-cursor fade-out">|</span></span></div></section>'

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('Typewriter', () => {
  beforeEach(() => {
    document.body.innerHTML = initial
  })
  test('write headline with correct', async () => {
    const typewriter = new Typewriter(typewriter_headline_correct, $("#welcome-headline"))
    await typewriter.writing()
    jest.runAllTimers();
    await typewriter.writing()
    jest.runAllTimers();
    await typewriter.writing()
    expect(document.body.innerHTML).toEqual(expectedHTMLOutputForCorrectDataAfterSecondRun)
  });

  test('write headline with incorrect', async () => {
    const typewriter = new Typewriter(typewriter_headline_incorrect, $("#welcome-headline"))
    await typewriter.writing()
    expect(document.body.innerHTML).toEqual(initial)
  });
  test('write headline with empty data', async () => {
    const typewriter = new Typewriter(empty_data, $("#welcome-headline"))
    typewriter.writing()
    expect(document.body.innerHTML).toEqual(initial)
  });
})







    
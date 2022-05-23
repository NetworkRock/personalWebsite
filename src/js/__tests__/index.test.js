import { init, locationHashChanged } from '../index';

const initialNavbar = '<navbar id="navbar"><ul id="nav-list"><li><a id="profileLink" class="nav-link" href="#profile">PROFILE</a></li></ul></navbar>'
const initialCircle = '<div class="fill-up-five-circles"><div class="circle-container"></div><div class="circle-container"></div><div class="circle-container"></div><div class="circle-container"></div><div class="circle-container"></div></div>'
const initialOverlay = '<div id="start-overlay"></div>'
const initialHeadline = '<span id="welcome-headline" class="headline"></span><span id="cursor" class="blinking-cursor">|</span>'

const expectedNavbar = '<navbar id="navbar" style="opacity: 1;"><ul id="nav-list"><li><a id="profileLink" class="nav-link" href="#profile">PROFILE</a></li></ul></navbar>'
const expectedCircle = '<div class="fill-up-five-circles circle-animation"><div class="circle-container"></div><div class="circle-container"></div><div class="circle-container"></div><div class="circle-container"></div><div class="circle-container"></div></div>'
const expectedOverlay = '<div id="start-overlay" style="width: 0vw; background-color: rgb(63, 63, 67);"></div>'
const expectedHeadline = '<span id="welcome-headline" class="headline" style="opacity: 0;"></span><span id="cursor" class="blinking-cursor" style="opacity: 0;">|</span>'

describe('Index', () => {
  beforeEach(() => {
    window.onload = init
    window.onhashchange = locationHashChanged
  })

  test('should add css classes when a location is given', () => {
    document.body.innerHTML = `${initialNavbar}${initialOverlay}${initialHeadline}`
    window.location.hash = '#profile'
    locationHashChanged()
    expect(document.body.innerHTML).toEqual(`${expectedNavbar}${expectedOverlay}${expectedHeadline}`)
  });

  test('should NOT add css classes when no location is given', () => {
    document.body.innerHTML = `${initialNavbar}${initialOverlay}${initialHeadline}`
    window.location.hash = ''
    locationHashChanged()
    expect(document.body.innerHTML).toEqual(document.body.innerHTML)
  });

  test('should NOT add circle animation when location is changed #profile', () => {
    document.body.innerHTML = `${initialCircle}`
    window.location.hash = '#profile'
    locationHashChanged()
    expect(document.body.innerHTML).toEqual(initialCircle)
  });

})
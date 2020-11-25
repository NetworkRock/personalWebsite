var startOverlay = document.getElementById('start-overlay');
var welcomeHeadline = document.getElementById('welcome-headline');
var navBar = document.getElementById('navbar');
var triangleRight = document.getElementById('triangle-right');
var welcomeLink = document.getElementById('welcomeLink');

startOverlay.onclick = function(){
    if (!startOverlay.classList.contains('slide-to-right')) {
        navBar.classList.add('fade-in');
        startOverlay.classList.add('slide-to-right');
        welcomeHeadline.classList.add('fade-out');
        triangleRight.classList.add('fade-out');
    }
}
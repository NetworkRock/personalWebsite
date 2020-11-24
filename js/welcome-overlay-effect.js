var welcomeOverlay = document.getElementById('welcome-overlay');
var welcomeHeadline = document.getElementById('welcome-headline');
var navBar = document.getElementById('navbar');
var triangleRight = document.getElementById('triangle-right');

welcomeOverlay.onclick = function(){
    if (!welcomeOverlay.classList.contains('slide-to-right')) {
        navBar.classList.add('fade-in');
        welcomeOverlay.classList.add('slide-to-right');
        welcomeHeadline.classList.add('fade-out');
        triangleRight.classList.add('fade-out');
    }
}
var startOverlay = document.getElementById('start-overlay');
var welcomeHeadline = document.getElementById('welcome-headline');
var cursor = document.getElementById('cursor');
var navBar = document.getElementById('navbar');
var welcomeLink = document.getElementById('welcomeLink');


document.getElementById("myVideo").currentTime = 0;
document.getElementById('myVideo').pause();



startOverlay.onclick = function(){
    document.getElementById('myVideo').play();
    if (!startOverlay.classList.contains('slide-to-right')) {
        navBar.classList.add('fade-in');
        startOverlay.classList.add('slide-to-right');
        welcomeHeadline.classList.add('fade-out');
        cursor.classList.add("fade-out");
    }
}
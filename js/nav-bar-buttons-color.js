// Get all links
var welcomeLink = document.getElementById('welcomeLink');
var profileLink = document.getElementById('profileLink');
var skillLink = document.getElementById('skillLink');
var projectsLink = document.getElementById('projectsLink');

// Skill circles container
var fiveCircle = document.querySelectorAll('.fill-up-five-circles');
var fourCircle = document.querySelectorAll('.fill-up-four-circles');
var threeCircle = document.querySelectorAll('.fill-up-three-circles');
var twoCircle = document.querySelectorAll('.fill-up-two-circles');
var oneCircle = document.querySelectorAll('.fill-up-one-circle');

// Set the active link to welcome when the site first time loaded
window.addEventListener("load", () => {
    if (location.hash.length === 0) {
        welcomeLink.classList.add("nav-link-active");
    }
})

function resetByLocationChanged() {
    // Remove all classes on links
    profileLink.classList.remove("nav-link-active");
    skillLink.classList.remove("nav-link-active");
    projectsLink.classList.remove("nav-link-active");
    welcomeLink.classList.remove("nav-link-active");
    document.getElementById('welcome-headline').style.display = "none";
    // Resest Skill Animation
    for (var i = 0; i < fiveCircle.length; i++) {
        fiveCircle[i].classList.remove("circle-animation");
    }
    for (var i = 0; i < fourCircle.length; i++) {
        fourCircle[i].classList.remove("circle-animation");
    }
    for (var i = 0; i < threeCircle.length; i++) {
        threeCircle[i].classList.remove("circle-animation");
    }
    for (var i = 0; i < twoCircle.length; i++) {
        twoCircle[i].classList.remove("circle-animation");
    }
    for (var i = 0; i < oneCircle.length; i++) {
        oneCircle[i].classList.remove("circle-animation");
    }
}


function locationHashChanged() {
    console.log("test");
    // Reset first - then overwrite
    resetByLocationChanged();

    if (location.hash === '#welcome-section') {
        // Set the active class for the active location
        welcomeLink.classList.add("nav-link-active");

        // Continue the video
        document.getElementById('myVideo').play();
        document.getElementById('welcome-headline').style.display = "inline";
    }
    else if (location.hash === '#profile-section') {
        // Set the active class for the active location
        profileLink.classList.add("nav-link-active");

        // Pause the video on a specific time
        document.getElementById("myVideo").currentTime = 0.15;
        document.getElementById('myVideo').pause();


    } else if (location.hash === '#skill-section') {
        // Set the active class for the active location
        skillLink.classList.add("nav-link-active");

        // Pause the video on a specific time
        document.getElementById("myVideo").currentTime = 4.00;
        document.getElementById('myVideo').pause();


        // Add the animtaion class for every circle container
        for (var i = 0; i < fiveCircle.length; i++) {
            fiveCircle[i].classList.add("circle-animation");
        }
        for (var i = 0; i < fourCircle.length; i++) {
            fourCircle[i].classList.add("circle-animation");
        }
        for (var i = 0; i < threeCircle.length; i++) {
            threeCircle[i].classList.add("circle-animation");
        }
        for (var i = 0; i < twoCircle.length; i++) {
            twoCircle[i].classList.add("circle-animation");
        }
        for (var i = 0; i < oneCircle.length; i++) {
            oneCircle[i].classList.add("circle-animation");
        }
    }
    else if (location.hash === '#projects-section') {
        // Set the active class for the active location
        projectsLink.classList.add("nav-link-active");

        // Pause the video on a specific time
        document.getElementById("myVideo").currentTime = 7.13;
        document.getElementById('myVideo').pause();
    }
}
window.onhashchange = locationHashChanged;
const header1 = document.getElementById("header1");
const mySidenav = document.getElementById("mySidenav");
const about = document.getElementById("about");
const client = document.getElementById("client");
const contact = document.getElementById("contact");

mySidenav.addEventListener("mouseover", function () {
    mySidenav.style.width = "250px";
    about.style.visibility = "visible";
    client.style.visibility = "visible";
    contact.style.visibility = "visible";

    about.style.animationName = "slideInFromLeft";
    about.style.animationDuration = "0.3s";
    about.style.animationTimingFunction = "ease-out";
    about.style.animationDelay = "0s";
    about.style.animationIterationCount = "1";
    about.style.animationDirection = "normal";


    client.style.animationName = "slideInFromLeft";
    client.style.animationDuration = "0.3s";
    client.style.animationTimingFunction = "ease-out";
    client.style.animationDelay = "0s";
    client.style.animationIterationCount = "1";
    client.style.animationDirection = "normal";

    contact.style.animationName = "slideInFromLeft";
    contact.style.animationDuration = "0.3s";
    contact.style.animationTimingFunction = "ease-out";
    contact.style.animationDelay = "0s";
    contact.style.animationIterationCount = "1";
    contact.style.animationDirection = "normal";

})

mySidenav.addEventListener("mouseout", function () {
    mySidenav.style.width = "80px";
    about.style.visibility = "hidden";
    client.style.visibility = "hidden";
    contact.style.visibility = "hidden";

    about.style.animation = "none";
    contact.style.animation = "none";
    client.style.animation = "none";

})


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("menu").style.visibility = "hidden";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("menu").style.visibility = "visible";
}

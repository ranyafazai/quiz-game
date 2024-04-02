let monoprix=localStorage.getItem("monoprix");
const monoprixHtml = document.getElementById("monoprixHtml");
monoprixHtml.innerText=monoprix;

let grait=localStorage.getItem("grait");
const graitHtml = document.getElementById("graitHtml");
graitHtml.innerText=grait;



let zen=localStorage.getItem("zen");
const zenHtml = document.getElementById("zenHtml");
zenHtml.innerText=zen;


let maxi=localStorage.getItem("maxi-mag");
const maxiHtml = document.getElementById("maxiHtml");
maxiHtml.innerText=maxi;

let fatales=localStorage.getItem("fatales");
const fatalesHtml = document.getElementById("fatalesHtml");
fatalesHtml.innerText=fatales;


let exist=localStorage.getItem("exist");
const existHtml = document.getElementById("existHtml");
existHtml.innerText=exist;

function logout() {
    // Show confirmation dialog
    var confirmLogout = confirm('Are you sure you want to log out?');

    // If user clicks OK, proceed with logout
    if (confirmLogout) {
        window.location.href = "../login/login.html";
    } 
    }
// Define your variable

var myVariable = localStorage.getItem('user');
document.getElementById("welcome").innerHTML = "Welcome"+myVariable;
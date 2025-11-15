////////////
//Document properties
let dayCount = document.getElementById("days");

//Calculating days left
let today = new Date();
const fiveTenDay = new Date("December 28, 2025 00:00:00 UTC-00:00");
today.setDate(today.getDate());
let days_left = Math.ceil(Math.abs(fiveTenDay - today)/(1000*60*60*24));


//Update day count
document.addEventListener('DOMContentLoaded', function() {
    dayCount.innerHTML = days_left;
    console.log(days_left);
}, false);


function makeResponsive() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive_header";
  } else {
    x.className = "topnav";
  }
}
const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', (e) => {
        setTimeout(() => {
            splash.classList.add('display-none');
        }, 2200);
    })
    //dark mode images 
function changeImage() {
    let image = document.getElementById('images');

    document.body.classList.toggle('dark-theme')


    if (image.src.match("https://img.icons8.com/material-rounded/24/ffffff/bright-moon.png")) {
        image.src = "https://img.icons8.com/material-rounded/24/000000/sun--v2.png";
    } else {
        image.src = "https://img.icons8.com/material-rounded/24/ffffff/bright-moon.png"
    }

}



function changeBackgroundImages() {
    let backgroundImage = document.getElementById('backgroundImage');
    if (backgroundImage.src.match("images/3084793.jpg")) {
        backgroundImage.src = "images/black.jpg";
    } else {
        backgroundImage.src = "images/3084793.jpg"
    }
}

function changeBackgroundImages1() {
    let backgroundImage1 = document.getElementById('backgroundImage1');
    if (backgroundImage1.src.match("images/3084793.jpg")) {
        backgroundImage1.src = "images/black.jpg";
    } else {
        backgroundImage1.src = "images/3084793.jpg"
    }
}

function changeBackgroundImages2() {
    let backgroundImage2 = document.getElementById('backgroundImage2');
    if (backgroundImage2.src.match("images/3084793.jpg")) {
        backgroundImage2.src = "images/black.jpg";
    } else {
        backgroundImage2.src = "images/3084793.jpg"
    }
}

var aText = new Array(
    "Take a look at my Skills. "
);

var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();



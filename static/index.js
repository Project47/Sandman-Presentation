function init () {
console.log ("STARETEEE");
loadCount=0;
var i=0;
document.getElementById ("oneing").style.left=window.innerWidth/2+240+"px";
slide = [];
slide [0] = -1;

for (i=1;i<28;i++) {
var sld = "slide"+i;
 slide [i] = document.getElementById (sld);
}


for (i=1;i<28;i++) {
slide [i].style.width=((window.innerWidth > 0) ? window.innerWidth : screen.width)+"px";
slide [i].style.height = ((window.innerWidth > 0) ? window.innerHeight : screen.height)+"px";
slide [i].style.opacity = 1;
slide [i].style.zIndex = (-1*i);
}

  currentSlide=1;
  document.body.addEventListener ("keydown", function (e) {
/*

left arrow    37
up arrow     38
right arrow  39
down arrow   40
*/
if (e.keyCode === 37) {
  if (currentSlide===1) {
    return;
  }
  gotoSlide (currentSlide-1);
}
    else if (e.keyCode === 39) {

      if (currentSlide === 27) {
        return;

      }
      gotoSlide (currentSlide+1);
}

  }, false);
console.log ("asdghgfdsdghjhgfdsgjhgfds");
}

function gotoSlide (slideto) {
/*
document.getElementById ("foot"+currentSlide).style.background="#2b5d74";

if (currentSlide===4) {
opacity=0;
evt = setInterval (faderRestart, 10);
}
else {
opacity=1;
evt = setInterval (fader, 10);
}
*/
opacity=0;
if (slideto>27) {
return;
}
if (slide<1) {
return;
}
if (slideto === currentSlide) {
return;
}
if (slideto>currentSlide) {
fillFader (currentSlide, slideto);
opacity=1;
//  evt = setInterval (function () { faderOut (currentSlide, slideto);}, 1);


slide [currentSlide].style.opacity = 0;


document.getElementById ("foot"+currentSlide).style.background="#2b5d74";
currentSlide=slideto;
document.getElementById ("foot"+currentSlide).style.background="black";


}
else {
opacity=0;
//  evt = setInterval (function () { faderIn (currentSlide, slideto);}, 1);


slide [slideto].style.opacity = 1;
fillFader (currentSlide,slideto);
document.getElementById ("foot"+currentSlide).style.background="#2b5d74";
currentSlide=slideto;
document.getElementById ("foot"+currentSlide).style.background="black";

}


}

function faderRestart () {
slide [0].style.opacity = opacity;
opacity=opacity+0.1;
if (slide [0].style.opacity>=1) {
currentSlide=0;
for (i=0;i<5;i++) {
slide [i].style.opacity = 1;
}
clearInterval (evt);
document.getElementById ("foot"+currentSlide).style.background="black";
}

}
function faderOut (slideNo,  nextSlide) {

slide [slideNo].style.opacity = opacity;
opacity=opacity-0.1;

if (slide [slideNo].style.opacity<=0) {
slide [slideNo].style.opacity = 0;
currentSlide=nextSlide;
clearInterval (evt);
}
}

function faderIn (slideNo,  nextSlide) {
slide [nextSlide].style.opacity = opacity;
opacity=opacity+0.1;
if (slide [nextSlide].style.opacity>=1) {
slide [nextSlide].style.opacity = 1;
fillFader (currentSlide, nextSlide);
currentSlide=nextSlide;
clearInterval (evt);
}
}


function fillFader (slide1, slide2) {
// (from, to)
var i=0;
if (slide1<slide2) {
for (i=slide1+1;i<slide2;i++) {
slide [i].style.opacity =0;
}
}
else if (slide1>slide2) {
for (i=slide2+1;i<slide1;i++) {
slide [i].style.opacity =1;
}

}

}

window.onresize = function () {

for (i=1;i<28;i++) {

slide [i].style.width=((window.innerWidth > 0) ? window.innerWidth : screen.width)+"px";
slide [i].style.height = ((window.innerWidth > 0) ? window.innerHeight : screen.height)+"px";
}
document.getElementById ("oneing").style.left=window.innerWidth/2+240+"px";
}

function loaded () {
loadCount=0;
}

function nxtSlide () {
gotoSlide (currentSlide+1);
}

function prevSlide () {
gotoSlide (currentSlide-1);
}

function startSlide () {
gotoSlide (1);
}

function endSlide () {
gotoSlide (27);
}

window.onload=init;

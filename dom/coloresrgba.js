const body = document.querySelector('body');
const btnColor = document.querySelector('#btnColor')
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

function setColor(){
    //rgb (0,255,14);
    const redVal = red.value * 2.6 ;
    const greenVal = green.value *2.6;
    const blueVal  = blue.value * 2.6;
    const rgbaColor = `rgb(${ redVal}, ${ greenVal}, ${ blueVal})`;
    body.style.background = rgbaColor;
}

setColor();
btnColor.addEventListener('click', setColor);
// var d = new Date();
// var m = d.getMinutes();
// var s = d.getSeconds();
// var x = document.getElementById("time-left");
// x.innerHTML = m +" : "+s ;

const breakLength = document.getElementById("break-length");
let breakLengthValue = breakLength.innerHTML = 5;

const breakIncrement = document.getElementById("break-increment");
const breakDecrement = document.getElementById("break-decrement");

const sessionLength = document.getElementById("session-length");
const sessionIncrement = document.getElementById("session-increment");
const sessionDecrement = document.getElementById("session-decrement");

const sessionDisplay = document.getElementById("time-left");

breakIncrement.addEventListener('click', function(e){
    if(breakLengthValue < 60) {
       breakLength.innerHTML = ++breakLengthValue;
    }
})

breakDecrement.addEventListener('click', function(e){
    if(breakLengthValue > 0) {
       return breakLength.innerHTML = --breakLengthValue;
    }
})
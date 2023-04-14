var counter = 1;

const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const radio4 = document.getElementById("radio4");
const radio5 = document.getElementById("radio5");
const radio6 = document.getElementById("radio6");
const radio7 = document.getElementById("radio7");
const radio8 = document.getElementById("radio8");
const radio9 = document.getElementById("radio9");
const radio10 = document.getElementById("radio10");
const radio11 = document.getElementById("radio11");


setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    
    radio1.addEventListener("click", () => {
        counter = 1;
    })
    radio2.addEventListener("click", () => {
        counter = 2;
    })
    radio3.addEventListener("click", () => {
        counter = 3;
    })
    radio4.addEventListener("click", () => {
        counter = 4;
    })
    radio5.addEventListener("click", () => {
        counter = 5;
    })
    radio6.addEventListener("click", () => {
        counter = 6;
    })
    radio7.addEventListener("click", () => {
        counter = 7;
    })
    radio8.addEventListener("click", () => {
        counter = 8;
    })
    radio9.addEventListener("click", () => {
        counter = 9;
    })
    radio10.addEventListener("click", () => {
        counter = 10;
    })
    radio11.addEventListener("click", () => {
        counter = 11;
    })

    counter++;
    if(counter > 11){
        counter = 1;
    }
},5000);

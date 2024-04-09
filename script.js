let a = document.getElementById("btn1");
let b = document.getElementById("btn2");
let span =document.querySelector("span");
let body=document.querySelector("body");



a.style.background="chartreuse";
b.style.background="red"
b.style.width="23px"
body.style.background='beige'
span.style.color='black'
let son = 0;

a.addEventListener("click", ()=>{
    son++;
    luboy();
    
})

function luboy() {
    span.textContent=son;
}

b.addEventListener("click", ()=>{
    son--;
    luboy();
})

function luboy() {
    span.textContent=son;
};


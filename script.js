var p1 = prompt("What's your Name ? ");
document.getElementsByClassName("p1")[0].innerHTML = p1;
var h3 = document.getElementsByTagName("h3")[0];
let btn = document.querySelector(".btn");
btn.addEventListener("click",function(){
 let r1 = Math.floor(Math.random()*6+1);
let r2 = Math.floor(Math.random()*6+1);
let src1= "./img/dice"+r1+".png";
let src2 = "./img/dice"+r2+".png";
let p1img = document.getElementById("p1img");
let p2img= document.getElementById("p2img");
p1img.setAttribute("src",src1);
p2img.setAttribute("src",src2);
if(r1==r2){
h3.innerHTML="Ties UP!!!⭐";
}
else if(r1> r2){
    h3.innerHTML=`${p1} wins🚩`;
}
else{
    h3.innerHTML="Oops! Computer wins..🔥"
}
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var x = document.getElementById("header");
    var y = document.getElementById("footer");

var currentScrollPos = window.pageYOffset;
    if(x.style.display==="none"&&y.style.display==="none" ||x.style.display==="block"&&y.style.display==="block"  ){ 
        x.style.display="block";
        y.style.display="block";

if (prevScrollpos < currentScrollPos) {
   
   document.getElementById("header").style.top = "-50px";
   document.getElementById('footer').style.bottom="0"
   } else {
document.getElementById("header").style.top = "0px";
document.getElementById('footer').style.bottom="-50px"
}
prevScrollpos = currentScrollPos;

    }  
 }
    function toggle(data){
        if(data==='S'){
            window.location="../search.html";
        }
    }
function myFunction() {
var x = document.getElementById("header");
var y = document.getElementById("footer");
var card=document.getElementById('main');
if (x.style.display === "none") {
x.style.display = "block";
card.style.top="30px";
x.style.top="0px"

} else {
x.style.display = "none";
card.style.top="0px";
}
if (y.style.display === "none") {
y.style.display = "block";
y.style.bottom="0px"

} else {
y.style.display = "none";
}
}


// heading = document.getElementById("heading");
// heading.innerText = p;
// heading.innerHTML += "<i>"+ p +"</i>"; 
//(heading.innerHTML =heading.innerHTML + "<i>"+ p +"</i>";)


//Dem nguoc js
// p = prompt("Moi ban nhap phut: ");    
// p= parseInt(p);
// min.innerText =p;
// check =setInterval(function(){
//     let min= document.getElementById("min");
//     let sec= document.getElementById("sec");
    
//     sec.innerText--;
//     if(sec.innerText<0){
//         sec.innerText = 59;
//         min.innerText--;
//     }   
//     if(min.innerText<=0 && sec.innerText <=0){
//         clearInterval(check);
//     }
// },10)
menu = 
[
    "CHO",
    "LON",
    "MEO",
    "GA",
    "CHIM",
    "CHIM"

]
m = document.getElementsByClassName("mon");
for (var i = 0; i < m.length; i++) {
    m[i].innerText = menu[i];
}
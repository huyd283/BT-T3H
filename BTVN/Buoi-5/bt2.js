var a = prompt("Vui long nhap 1 so tu 0->55:");
a = parseInt(a);
if(a<0){
    a = NaN;
}else if(a>55){
    a = NaN;
}
while(isNaN(a)){
    var a = prompt("Vui long nhap 1 so tu 0->55:");
    a = parseInt(a);
    if(a<0){
        a = NaN;
    }else if(a>55){
        a = NaN;
    }
}
var b = prompt("Vui long nhap 1 so tu 0->55:");
b = parseInt(b);
if(b<0){
    b = NaN;
}else if(b>55){
    b = NaN;
}
while(isNaN(b)){
    var b = prompt("Vui long nhap 1 so tu 0->55:");
    b = parseInt(b);
    if(b<0){
        b = NaN;
    }else if(b>55){
        b = NaN;
    }
}
var c = prompt("Vui long nhap 1 so tu 0->55:");
c = parseInt(c);
if(c<0){
    c = NaN;
}else if(c>55){
    c = NaN;
}
while(isNaN(c)){
    var c = prompt("Vui long nhap 1 so tu 0->55:");
    c = parseInt(c);
    if(c<0){
        c = NaN;
    }else if(c>55){
        c = NaN;
    }
}
var d = prompt("Vui long nhap 1 so tu 0->55:");
d = parseInt(d);
if(d<0){
    d = NaN;
}else if(d>55){
    d = NaN;
}
while(isNaN(d)){
    var d = prompt("Vui long nhap 1 so tu 0->55:");
    d = parseInt(d);
    if(d<0){
        d = NaN;
    }else if(d>55){
        d = NaN;
    }
}
var e = prompt("Vui long nhap 1 so tu 0->55:");
e = parseInt(e);
if(e<0){
    e = NaN;
}else if(e>55){
    e = NaN;
}
while(isNaN(e)){
    var e = prompt("Vui long nhap 1 so tu 0->55:");
    e = parseInt(e);
    if(e<0){
        e = NaN;
    }else if(e>55){
        e = NaN;
    }
}
var f = prompt("Vui long nhap 1 so tu 0->55:");
f = parseInt(f);
if(f<0){
    f = NaN;
}else if(f>55){
    f = NaN;
}
while(isNaN(f)){
    var f = prompt("Vui long nhap 1 so tu 0->55:");
    f = parseInt(f);
    if(f<0){
        f = NaN;
    }else if(f>55){
        f = NaN;
    }
}

var g = parseInt(Math.random()*56)+1;
while(g == h){
    var h = parseInt(Math.random()*56)+1;
}
while(g == i || i ==h){
    var i = parseInt(Math.random()*56)+1;
}
while(g == j || h==j || i==j){
    var j = parseInt(Math.random()*56)+1;
}
while (g == k || h==k || i==k || j==k){
    var k = parseInt(Math.random()*56)+1;
}
while (g == l || h==l || i==l || j==l ||k ==l){
    var l = parseInt(Math.random()*56)+1;
}

const lucky = [a, b , c, d, e, f];
const random = [g, h, i, j, k, l];

let isEqual=0;

// if(lucky.length !== random.length) {
// isEqual = false;
// }
// else{
//     for (let i = 0; i < lucky.length; i++) {
//         // let count = 0;
//         if(lucky[i] !== random[i]) {
//             isEqual = false;
//             break;
//         }
//         // else if(){}

//         isEqual = true;
//     }
// }
// if (isEqual){
//     alert("Ban da chung thuong jackpot");
// }
// else{
//     alert("Chuc ban may man lan sau");
// }
if(a == g || a==h||a==i||a==j||a==k||a==l){
    isEqual++
}
if(b == g || b==h||b==i||b==j||b==k||b==l){
    isEqual++
}
if(c == g || c==h||c==i||c==j||c==k||c==l){
    isEqual++
}
if(d == g || d==h||d==i||d==j||d==k||d==l){
    isEqual++
}
if(e == g || e==h||e==i||e==j||e==k||e==l){
    isEqual++
}
if(f == g || f==h||f==i||f==j||f==k||f==l){
    isEqual++
}
if(isEqual==6){
     alert("Ban da chung thuong jackpot");
}else if(isEqual==5){
    alert("Ban da chung thuong 200 trieu");
}else if(isEqual==4){
    alert("Ban da chung thuong 10 trieu");
}else if(isEqual==3){
    alert("Ban da chung thuong 500.000VND");
}
else{
    alert("Chuc ban may man lan sau");
}
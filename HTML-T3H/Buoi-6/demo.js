var x = 10;
console.log(x); 
var a = 8; 
if(a>=18){
    console.log("success");
}
else{
    console.log("error");
}
var y=Math.PI;
console.log(y);
function sum(a,b){
    var x = a+b;
    return x;
} 
console.log(sum(a,4));
function checksochan(a){
    if(a%2==0){
        console.log("so chan" );
    }
    else{
        console.log("so le");
    }
}
console.log(checksochan(7));


alert("Ban co du tuoi truy cap?");
y = confirm("Are you sure you want to");
y = prompt("moi ban nhap so tuoi truy cap:  ");
console.log(parseInt(y));


// bt1-yeu cau nguoi dung nhap ten va tuoi neu >= 18 thi hien thong bao cha mung. else => yeu cau roi khoi
a = prompt("Ten cua ban")
setTimeout(function(){
b = prompt("Moi ban nhap so tuoi truy cap: ");
b = parseInt(b);
while(isNaN(b)){
    b = prompt("Moi ban nhap so tuoi truy cap: ");
    b = parseInt(b); 
}
},2000)
alert("Chao mung ban: " + a);



// bt2-viet chuong trinh con so may man, sinh ra ngau nhien 1 so 0 ->99 cho nguoi choi 5 luot nhap 
//  so xem co trung giai thuong hay khong. Tro choi ket thuc khi het 5 luot 
//  hoac nguoi choi doan trung so may man !

setTimeout(function(){
    let b = prompt("Moi ban nhap so may man: ");
    for(let i = 0; i < 5; i++) {
        let lucky = parseInt(Math.random()*100);
        if(b === lucky) {
            alert("Ban da trung so may man")
        }else{
        b = prompt("Moi ban nhap so may man: ");
        }
    }
    alert("Ban da het luot choi")
},1000)

for()
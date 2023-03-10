// arr =[];
// arr[0] = 9;
// arr[1] = "hello";
// arr[2] = true;
// arr.push("world");

// for (var i = 0; i < arr.length;i++) {
//     console.log(arr[i]);
// }


// 6 so ngau nhien 1->55
// var random = [];
// while (random.length < 6){
//     var   j = parseInt(Math.random()*54)+1;
//     // f = false;
//     // for (var i = 0; i < random.length; i++) {
//     //     if(random[i] ==j){
//     //        f = true;
//     //     }
//     // }
//     // if(f==false){
//     //     random.push(j);
//     // }
//     if(!random.includes(j)){
//         random.push(j);
//     }
// }
// console.log(random);

// dem nguoc thoi gian
var min=10;
var sec =0;
t =setInterval(function(){
    console.log(min+ ":" +sec);
    sec--;
    if(sec<0){
        sec = 59;
        min--;
    }
    if(min<0){
        clearInterval(t);
    }
},10)
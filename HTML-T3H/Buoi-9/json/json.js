// product ={
//     name: "14 PRM",
//     price: 1000,
//     catery:{
//         name: "Smart phones"
//     },
//     hashtag:[
//         {
//             tag:"phone2"
//         },
//         {
//             tag:"apple"
//         },
//         {
//             tag:"smart"
//         },
//         {
//             tag:"samsung"
//         },
//     ]
// }

// document.getElementById("name").innerText = product.name;
// document.getElementById("price").innerText = product.price;
// document.getElementById("catery").innerText = product.catery.name;
// for (var i = 0; i < product.hashtag.length;i++) {
//     arr = document.getElementById("arr");
//     li = "<li>" + product.hashtag[i].tag + "</li>"
//     arr.innerHTML += li;
//     // arr.li[i]=product.hashtag[i];
//     // console.log("arr".li[i]);
// }
// // console.log(product.hashtags.length);
// p={
//     id:1,
//     title:"Iphone 9",
//     descrip:"An apple mobile device",
//     price:"$549",
//     discount:12.96,
//     rating:4.69,
//     stock:96,
//     brand:"Apple",
//     category:"Smartphone",
//     // thumbnal:
// }
// document.getElementById("ten-card").innerText = p.title;
// // console.log(p.title);
// document.getElementById("descrip").innerText = p.descrip;
// document.getElementById("price-2").innerText = p.price;
// document.getElementById("discount").innerText = p.discount;
// // document.getElementsByClassName("cate").innerText = p.category;
// r = document.getElementsByClassName("cate");
// // console.log(r);
// r.innerText = p.category;

 //-------------------//
var product=[
    {
        id:1,
        title:"Iphone 9",
        descrip:"An apple mobile device",
        price:"$549",
        discount:12.96,
        rating:4.69,
        stock:96,
        brand:"Apple",
        category:"Smartphone",
    },
    {
        id:1,
        title:"Iphone 9",
        descrip:"An apple mobile device",
        price:"$549",
        discount:12.96,
        rating:4.69,
        stock:96,
        brand:"Apple",
        category:"Smartphone",
    },
    {
        id:1,
        title:"Iphone 9",
        descrip:"An apple mobile device",
        price:"$549",
        discount:12.96,
        rating:4.69,
        stock:96,
        brand:"Apple",
        category:"Smartphone",
    },
    {
        id:1,
        title:"Iphone 9",
        descrip:"An apple mobile device",
        price:"$549",
        discount:12.96,
        rating:4.69,
        stock:96,
        brand:"Apple",
        category:"Smartphone",
    },
    {
        id:1,
        title:"Iphone 9",
        descrip:"An apple mobile device",
        price:"$549",
        discount:12.96,
        rating:4.69,
        stock:96,
        brand:"Apple",
        category:"Smartphone",
    },
    {
        id:1,
        title:"Iphone 9",
        descrip:"An apple mobile device",
        price:"$549",
        discount:12.96,
        rating:4.69,
        stock:96,
        brand:"Apple",
        category:"Smartphone",
    },
    {
        id:1,
        title:"Iphone 9",
        descrip:"An apple mobile device",
        price:"$549",
        discount:12.96,
        rating:4.69,
        stock:96,
        brand:"Apple",
        category:"Smartphone",
    },
    {
        id:1,
        title:"Iphone 9",
        descrip:"An apple mobile device",
        price:"$549",
        discount:12.96,
        rating:4.69,
        stock:96,
        brand:"Apple",
        category:"Smartphone",
    },
    {
        id:1,
        title:"Iphone 9",
        descrip:"An apple mobile device",
        price:"$549",
        discount:12.96,
        rating:4.69,
        stock:96,
        brand:"Apple",
        category:"Smartphone",
    }
];
p = {
    id:1,
    title:"Iphone 9",
    descrip:"An apple mobile device",
    price:"$549",
    discount:12.96,
    rating:4.69,
    stock:96,
    brand:"Apple",
    category:"Smartphone",
}
for(var i=0; i<p.length; i++){
    x =
    `<div class="card col-3" style="width: 18rem;">
    <img class="img1" src="http://openweathermap.org/img/wn/04n@2x.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${p.title}</h5>
      <p  class="card-text">Bầu trời đêm đầy sao on the card title and make up the bulk of the card's content..</p>
      <p  class="card-text">Bầu trời đêm đầy sao on the card title and make up the bulk of the card's content..</p>
      <p  class="card-text">Bầu trời đêm đầy sao on the card title and make up the bulk of the card's content..</p>
      <a href="#" class="btn btn-primary cate">Go somewhere</a> 
        </div>
    </div>`
    document.getElementById("list").innerHTML += x; 
    // x = document.getElementsByTagName("h5")[i];
    // console.log(p.title)[0];
    // x.innerHTML = p.title.[1];
}

var xhttp = new XMLHttpRequest();
xhttp.onload  = function() {
    console.log(xhttp.responseText);
};
xhttp.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric")
xhttp.send();

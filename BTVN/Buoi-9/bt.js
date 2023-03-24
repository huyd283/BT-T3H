xhttp = new XMLHttpRequest();
xhttp.onload = function(){
    data = this.responseText;// string
    data = JSON.parse(data);
    x=data.products;

};

function search(){
    x=data.products[0];
    thumbnail=x.thumbnail;
    title=x.title;
    description=x.description;
    price=x.price;
    // console.log(x.thumbnail);
        for(i=0; i<data.products.length; i++) {
            x=data.products;
            html="";
            html+=`<div class="col-3 mb-3" >
                <div class="card h-100"  >
                <img  class="card-img-top h-50" src=${thumbnail} alt="Card image cap">
                <div class="card-body" >
                    <h5 class="card-title" id="title">${title}</h5>
                    <p class="card-text" id="text">${description}</p>
                    <p class="card-text" id="text">Price: $${price}</p>
                    <a href="#" class="btn btn-primary rtl">Go somewhere</a>
                </div></div></div>`;
        };
        list=document.getElementById("list");
        list.innerHTML=html;
        xhttp.open("GET","https://dummyjson.com/products/search?q=apple");
        xhttp.send();
}
xhttp.open("GET","https://dummyjson.com/products/search?q=apple");
xhttp.send();
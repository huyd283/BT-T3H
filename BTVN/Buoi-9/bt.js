// xhttp = new XMLHttpRequest();
// xhttp.onload = function(){
//     data = this.responseText;// string
//     data = JSON.parse(data);
//     x=data.products;

// };

// function search(){
//     x=data.products[0];
//     thumbnail=x.thumbnail;
//     title=x.title;
//     description=x.description;
//     price=x.price;
//     // console.log(x.thumbnail);
//         for(i=0; i<data.products.length; i++) {
//             html="";
//             html+=`<div class="col-3 mb-3" >
//                 <div class="card h-100"  >
//                 <img  class="card-img-top h-50" src=${thumbnail} alt="Card image cap">
//                 <div class="card-body" >
//                     <h5 class="card-title" id="title">${title}</h5>
//                     <p class="card-text" id="text">${description}</p>
//                     <p class="card-text" id="text">Price: $${price}</p>
//                     <a href="#" class="btn btn-primary rtl">Go somewhere</a>
//                 </div></div></div>`;
//         };
//         list=document.getElementById("list");
//         list.innerHTML=html;
//         xhttp.open("GET","https://dummyjson.com/products/search?q=apple");
//         xhttp.send();
// }
// xhttp.open("GET","https://dummyjson.com/products/search?q=apple");
// xhttp.send();
// page = 1;
// function nextPage(){
//  page++;
//  search();
// }
// function prePage(){
//     if (page>=0) {
//         page--;
//         search();
//     }    
//     else{
        
//     }
// }


////////////////////////////////
page=1;
skip = (page -1)*12;
function search(){
    event.preventDefault();
    var v = document.getElementById("search").value;   
    document.getElementById("box-loading").style.display = "block";
    var xhttp = new XMLHttpRequest();
    xhttp.onload=  function(){
        // var v = document.getElementById("search").value;
        var rs = this.responseText;
        var data = JSON.parse(rs); // object
        var products = data.products; // array
        var html = ``;
        p_html = `<li class="page-item"><a class="page-link" onclick="prePage()" href="#">Previous</a></li>
        `;
        for(var i=0;i<products.length;i++){
            var thumb = products[i].thumbnail;
            var name = products[i].title;
            var desc = products[i].description;
            var price = products[i].price;
            html += `<div class="col-3">
                <div class="card" style="width: 18rem;">
                    <img src="${thumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${name}</h5>
                      <p class="card-text">${desc}</p>
                      <a href="#" class="text-danger">${price}</a>
                    </div>
                  </div>
            </div>`;
        }
        p_html+=`<li class="page-item"><a class="page-link" onclick="nextPage()" href="#">Next</a></li>`;
        document.getElementById("list").innerHTML = html;
        document.getElementById("box-loading").style.display = "none";
        document.getElementById("pagination").innerHTML = p_html;
    }
    xhttp.open("GET",`https://dummyjson.com/products/search?q=${v}&limit=12&skip=${skip}`);
    xhttp.send();
}
function nextPage(){
 page++;
 search();
}
function prePage(){
    if (page>1) {
        page--;
        search();
    }    
    else{
        page=0;
        search();

    }
}
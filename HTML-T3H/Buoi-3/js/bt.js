xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    data  = this.responseText;
    data = JSON.parse(data);
    // console.log(data.list);
    for (var i = 0; i < data.list.length;i++) {
        list =`
        <div class="card-weather col-3 content" style="width: 18rem;">
        <img class="img1" src="http://openweathermap.org/img/wn/03n@2x.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.country}</h5>
          <p class="card-text">Bầu trời đêm đầy sao on the card title and make up the bulk of the card's content..</p>
        </div>
    </div>
    `
    document.getElementById("element").innerText += list;
    }
};
xhttp.open('GET',"https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric");
xhttp.send();
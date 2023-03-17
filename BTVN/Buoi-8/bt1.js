var xhttp = new XMLHttpRequest();
xhttp.onload  = function() {
    var rs = this.responseText;
    var data = JSON.parse(rs);
    weather = data.weather;
    coord = data.coord;

    // console.log(coord);
    for(i=0;i<weather.length;i++){
        we = weather[i]
        descrip = we.description;
        id = we.id;
        icon = we.icon;
        main = we.main;
        // temp = main.temp;
        console.log(data);
        li = `
            <div class="col-4">
            <h2 id="id"> ${id} </h2>
            <div> September 15
            <br> Monday
            </div>
            <div> 
                <img src="" alt="">
                    <h2>${data.main.temp}</h2>
                Feels like ${data.main.feels_like} 
            </div>
            </div>
        <div class="col-4">
            <img  src="http://openweathermap.org/img/wn/03n@2x.png" alt="">
            <p>${main}</p>
        </div>
        <div class="col-4">
            <div>sunrise ${data.sys.sunrise} </div>
            <div>sunset ${data.sys.sunset} </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>`
    document.getElementById("element").innerHTML += li;
    }
};
xhttp.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric")
xhttp.send();

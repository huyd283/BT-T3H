var xhttp = new XMLHttpRequest();
xhttp.onload = function(){
    var data = this.responseText;// string
    data = JSON.parse(data);
    document.getElementById("city").innerText = data.name+", "+data.sys.country;
    document.getElementById("temp").innerText = data.main.temp;
    document.getElementById("desc").innerText = data.weather[0].description;
}
xhttp.open("GET","https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric");
xhttp.send();
        function loadWeather(){
            var city = document.getElementById("select-city").value;
            var units = document.getElementById("units").value;
            document.getElementById("sub-temp").innerText = units;
            var matric = "";
            if(units == "C"){
                matric = "units=metric"
            }
            var xhttp = new XMLHttpRequest();
            xhttp.onload = function(){
                var data = this.responseText;// string
                data = JSON.parse(data);
                document.getElementById("city").innerText = data.name+", "+data.sys.country;
                document.getElementById("temp").innerText = data.main.temp;
                document.getElementById("desc").innerText = data.weather[0].description;
            }
            xhttp.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&${matric}`);
            xhttp.send();
        }


// function change(){
//     xhttp.onload = function hanoi(){
//         var data = this.responseText;
//         data = JSON.parse(data);
//         document.getElementById("city").innerHTML = data.name +", "+data.sys.country;
//         document.getElementById("temp").innerHTML = data.main.temp;
//     }
//         value = document.getElementById("change").value;
        // temp = document.getElementById("temp").value;
    // if(value==="hanoi"){
    //     xhttp.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric")
    // }
    // else if(value==="london"){
    //     xhttp.open("GET","https://api.openweathermap.org/data/2.5/weather?q=london&appid=09a71427c59d38d6a34f89b47d75975c&units=metric")
    //     if(temp ==="celsius"){
    //     xhttp.open("GET","https://api.openweathermap.org/data/2.5/weather?q=london&appid=09a71427c59d38d6a34f89b47d75975c&")
    
    //     }
    // } 
    // else if(value==="newyork"){
    //     xhttp.open("GET","https://api.openweathermap.org/data/2.5/weather?q=new york&appid=09a71427c59d38d6a34f89b47d75975c&units=metric")
    // } 
    // else if(value==="saigon"){
    //     xhttp.open("GET","https://api.openweathermap.org/data/2.5/weather?q=saigon&appid=09a71427c59d38d6a34f89b47d75975c&units=metric")
    // }
    // xhttp.send();
    // console.log("temp: " + temp);
// }

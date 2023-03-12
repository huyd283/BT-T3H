function openPopup(){
    var bg = document.getElementById("bg-fade");
    bg.style.display = "block";
    document.getElementById("popup").style.display= "block";

}

function closePopup(){
    var bg = document.getElementById("bg-fade");
    bg.style.display = "none";
    document.getElementById("popup").style.display= "none";

}
function submitPopup(){
    event.preventDefault();
    e = document.getElementById("e");
    pw = document.getElementById("pw");
    email = document.getElementById("exampleInputEmail1");
    e.innerText = email.value;
    pwd = document.getElementById("exampleInputPassword1");
    pw.innerText = pwd.value ;

    bg = document.getElementById("bg-fade");
    bg.style.display = "none";
    document.getElementById("popup").style.display= "none";
};
function clickMe(){
    var t = prompt("Ten ban la gi");
    alert("Xin chao " + t);
}
function mouseEnter(){
    console.log("MouseEnter....");
};
function mouseLeave(){
    console.log("MouseLeave...");
};
ip = document.getElementById("search");
function search(){
    v = ip.value;
    console.log("Search keydown..."+v);
};
function searchup(){
    v = ip.value;
    console.log("Search keyup..."+v);
};
function searchPress(){
    v = ip.value;
    console.log("Search keypress..."+v);
};
function change(x){
    var v=x.value;
    console.log("Change..."+v);
};

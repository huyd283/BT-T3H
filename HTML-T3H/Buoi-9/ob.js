ob1={
    name: "Nguyen Van A",
    age: 18,
    tel: "009155414",
    run:function(){
        console.log(this.name + " Running1...");
    }
};
ob2={
    name: "Nguyen Van B",
    age: 20,
    tel: "001488412",
    run: function(){
        console.log(this.name + " Running2...");
    }
};
console.log(ob1.age);
console.log(ob2.age);
ob1.age = "32";
// ob1.name + ob1.run();
// ob2.name + ob2.run();
ob1.run();
ob2 .run();
product ={
    name: "14 PRM",
    price: 1000,
}
//배열(array) 생성 
const toBuy = ["potato", "tomato", "kimbab"];
console.log(toBuy[2]);

//배열에 추가
toBuy.push("pizza");
console.log(toBuy);

//객체(object) 생성 
const player = {
    name: "sally",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name);

player.fat = false;
console.log(player);

player.money = "1억";
console.log(player.money);

player.money = "100억";
console.log(player.money);

player.points = player.points + 15;
console.log(player.points);

function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 20);
sayHello("sally", 30);

function plus(a, b){
    console.log(a + b);
}
function divide(c, d){
    console.log(c / d)
}

plus(8, 60);
divide (98, 20);

const player2 = {
    name : "nico",
    sayHello: function(otherPersonName){
        console.log("hello!" + otherPersonName);
    },
};
player2.sayHello("Chris");
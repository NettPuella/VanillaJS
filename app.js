//배열(array) 생성/////////////// 
const toBuy = ["potato", "tomato", "kimbab"];
console.log(toBuy[2]); //인덱스에서 2번째 값을 가져옴 -> kimbab

//배열에 추가(마지막 순서에 할당)
toBuy.push("pizza"); //pizza 값을 넣음
console.log(toBuy); //["potato", "tomato", "kimbab", "pizza"] 
//인덱스 값 변경
toBuy[2] = "pasta"; //kimbab -> pasta로 변경
console.log(toBuy[2]); //pasta


//객체(object) 생성////////////// 
const player = {
    name: "sally",
    points: 10,
    fat: true,
};

console.log(player); //{name: "sally", points: 10, fat: true}
console.log(player.name); //name값만 출력 : sally

//특정 값 변경 (fat 값을 false로 변경)
player.fat = false; 
console.log(player); //{name: "sally", points: 10, fat: false}

//특정 값 추가
player.money = "1억"; 
console.log(player.money); //1억
console.log(player); //{name: "sally", points: 10, fat: false, money: "1억"}

//특정 값 추가
player.money = "100억"; //1억 -> 100억으로 변경
console.log(player.money); //100억

//기존값에 더하기
player.points = player.points + 15;
console.log(player.points); //25

//function(함수, 기능)//////////////////
//sayHello function은 콘솔에 "Hello my name is (nameOfPerson) and I'm (age)"문구를 출력하는 기능
//(nameOfPerson, age)은 함수를 출력할때 원하는 값을 넣으면 그 값이 적용됨 
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
} 

//sayHello function 호출방법
sayHello("nico", 10); //Hello my name is nico and I'm 10
sayHello("dal", 20); //Hello my name is nico and I'm 20
sayHello("sally", 30); //Hello my name is nico and I'm 30

//plus function은 a+b(더하기) 의 결과값을 콘솔에 출력하는 함수
function plus(a, b){
    console.log(a + b);
}
plus(60, 8); //68

//divide function은 c/d(나누기) 의 결과값을 콘솔에 출력하는 함수
function divide(c, d){
    console.log(c / d)
}

divide(98, 20); //4.9

//player2는 객체, 여기서 sayHello는 "hello! (otherPersonName) nice to meet you" 를 출력하는 함수
const player2 = {
    name : "nico",
    sayHello: function(otherPersonName){
        console.log("hello!" + otherPersonName + " nice to meet you");
    },
};
//player2 객체 안에 name 속성을 콘솔에 출력
console.log(player2.name); //nice
//(otherPersonName)값 입력
player2.sayHello("Chris"); //hello!Chris nice to meet you
player2.sayHello("Sally"); //hello!Sally nice to meet you


////데이터타입////

// 1. const(상수) : 변수 값 변경 불가
const a = 5;
console.log(a); //5

// 2. let, var : 변수 값 변경 가능 / 현재는 var는 잘사용하지 않음
let isNicofat = true;
console.log(isNicofat); //true

isNicofat = false; //변수 값 재할당
console.log(isNicofat); //false
//boolean의 value값으로 true or false 단 두가지만 있음

// 3. null
let hello
console.log(hello); //undefined : 변수에 아무것도 정의되어 있지 않음

let hello2 = null; // null : null값을 넣음
console.log(hello2); //null : 비어있다는 의미

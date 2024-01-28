//1~3day
//배열(array) 생성/////////////// 
const toBuy = ["potato", "tomato", "kimbab"];
console.log(toBuy[2]); //인덱스에서 2번째 값을 가져옴 -> kimbab

//배열에 추가(마지막 순서에 할당)
toBuy.push("pizza"); //pizza 값을 넣음
console.log(toBuy); //["potato", "tomato", "kimbab", "pizza"] 
//인덱스 값 변경
toBuy[2] = "pasta"; //kimbab -> pasta로 변경
console.log(toBuy[2]); //pasta


//객체(object) 생성///////////////////////// 
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
//function 안에서 data를 받는 방법 : () 안에 값을 넣어야 함
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

//과제
//console.log로 출력
//console.log 가 아닌 alert(a + b); 로 변경하면 경고창으로 표시됨
const calculator = {
    //더하기
    plus: function(a, b){
        console.log(a + b); 
    },
    //빼기
    minus: function(a, b){
        console.log(a - b); 
    },
    //곱하기
    times: function(a, b){
        console.log(a * b);
    },
    //나누기
    divide: function(a, b){
        console.log(a / b);
    },
    //제곱
    power: function(a, b){
        console.log(a ** b);
    },
};
//calculator 기능 별 출력
calculator.plus(2, 3); //5
calculator.times(2, 3); //6
calculator.minus(2, 3); //-1
calculator.divide(2, 3); //0.66666666
calculator.power(2, 3); //8


//console.log 가 아닌 return 값으로 반환받음 / 단, function은 return값을 반환하는 순간 종료됨
//return값을 사용하면 외부에서 값을 반환받을 수 있음 / console.log는 console 화면에먼 값을 나타냄
const calculator2 = {
    //더하기
    plus: function(a, b){
        return a + b; 
    },
    //빼기
    minus: function(a, b){
        return a - b; 
    },
    //곱하기
    times: function(a, b){
        return a * b;
    },
    //나누기
    divide: function(a, b){
        return a / b;
    },
    //제곱
    power: function(a, b){
        return a ** b;
    },
};
//console.log처럼 화면에는 나오지 않지만 실제로 실행됨, console에 직접 변수를 찍어보면 확이할 수 있음
const plusResult = calculator2.plus(2, 3); //5
const timesResult = calculator2.times(2, 3); //6
const minusResult = calculator2.minus(2, 3); //-1
const divideResult = calculator2.divide(2, 3); //0.66666666
const powerResult = calculator2.power(2, 3); //8


//예제
const age = 96;
function calculateKrAge(ageOfForeigner){
    //return 값을 쓰지 않으면 undefined, 값을 반환받기 위해 return값을 써야함
    return ageOfForeigner + 2; //ageOfForeigner = 96
}

const KrAge = calculateKrAge(age);
console.log(KrAge); //98

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



//4day//////
//document/////////
/* 
document는 DOM 트리의 최상위 객체이다.
브라우저는 HTML 문서를 로드하기 전에 document 객체를 먼저 만든다.
그리고 document 객체를 뿌리로 하는 DOM 트리를 만든다.
 
document 객체의 역할은 아래와 같다.
- 프로퍼티로 HTML 문서의 전반적 속성을 나타냄
- 메소드로 DOM 객체 검색
- 메소드로 새로운 DOM 객체 생성
- 메소드로 HTML 문서의 전반적 제어 지원
*/

const title = document.getElementById("title")
console.log(title.id);
console.log(title.className);



//prompt/////////////////////
//prompt: 사용자에게 메세지를 보여주고 값을 받는 창
const age1 = prompt("How old are you?");
//console.log(age1); //입력받은 값
//console.log(typeof age1) //입력받은 값의 타입

//사용자가 입력한 값의 타입을 반환
console.log(age1, parseInt(age1)); //텍스트 입력의 경우 : ㅁㄴㄹㅁㅇ NaN
//isNaN: boolean 값을 반환
//false : number값이 맞을때
//true : String값이 맞을때
console.log(isNaN(age1));

//조건문//////////////////////
if(isNaN(age1)){
    //String값을 입력(true)하면 콘솔에 하단의 문구가 출력
    console.log("Please write a number")
}
else{
    //Number값을 입력(false)하면 콘솔에 하단의 문구가 출력
    console.log("Thank you for writing your age!")
}


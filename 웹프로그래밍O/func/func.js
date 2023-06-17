/* func.js */ 

// 1. func hoisting:
//  함수 선언을 유효범위의 최상단으로 끌어올려서 함수 선언 전에도 사용 가능
// console.log(`add1(10, 20): ${add1(10, 20)}`);  // 30

// 함수 선언문
function add1(x, y){
    return x + y;
}

// 함수 객체를 const, let에 선언하면 func-hoisting 방지 가능
// console.log(`add2(10, 20): ${add2(10, 20)}`);  // Uncaught ReferenceError
// console.log(`add3(10, 20): ${add3(10, 20)}`);  // Uncaught ReferenceError

// 2. JavaScript에서 함수는 객체로 취급되므로 변수에 할당 가능
// 함수 표현식 1: 익명함수 활용
const add2 = function(x, y){
    return x + y;
};

// 함수 표현식 2: 기명함수 - 함수 식별자 존재
const add3 = function add4(x, y){
    return x + y;
};

// console.log(`add2(10, 20): ${add2(10, 20)}`);  // 30
// console.log(`add3(10, 20): ${add3(10, 20)}`);  // 30
// console.log(`add4(10, 20): ${add4(10, 20)}`);  // Uncaught ReferenceError


// 3. 재귀함수
// const add5 = function add6(isTrue){
//     if(isTrue){
//         console.log("stopped");
//     }
//     add6(true); // 함수 식별자는 재귀함수로 사용
// };
// console.log(add5(false)); 



const obj = {};
const g = () => {   // function g(){
    console.log('g()');
}

obj.f = g;
obj.f();
g();
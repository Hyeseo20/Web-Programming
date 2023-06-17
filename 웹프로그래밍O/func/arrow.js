/* arrow.js */
// let func = (param1, param2, ...paramN) => expression;

// 0. 기존 함수
function func_a(x, y) {
    return x + y;
  };
console.log(`func_a: ${func_a(1, 2)}`);  // 3

// 함수 객체 활용
const func_b = function(x, y) {
    return x + y;
  };
console.log(`func_b: ${func_b(1, 2)}`);  // 3

// => 함수로 변환
const func_c = (x, y) => {
    return x + y;
};
console.log(`func_c: ${func_c(1, 2)}`);  // 3
  



// => 함수
const func1 = (x, y) => {
    return x + y;
};
console.log(`func1: ${func1(2, 3)}`);  // 5

// 1. 한 줄짜리 return 구문만 존재하는 함수는 {}와 return 생략
const func2 = (x, y) => (x + y);
console.log(`func2: ${func2(2, 3)}`);  // 5


// 2-1. 매개변수가 없는 경우: () 사용
const func3 = () => {
    console.log('func3: no param');
};
func3();

// 2-2. 1줄짜리 함수는 {}와 return 생략
const func4 = () => console.log('func4: no param');
func4();


// 3-1. 매개변수가 1개인 경우: ()도 생략
const func5 = x => {
    return x*2;
};
console.log(`func5: ${func5(4)}`);  // 8

// 3-2. 1줄의 return 만 존재하는 함수는 {}과 return 생략
const func6 = x => x*2;
console.log(`func6: ${func6(4)}`);  // 8
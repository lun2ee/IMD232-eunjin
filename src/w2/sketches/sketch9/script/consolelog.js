console.log(2);
console.log('문자');
console.log(true);

// two 라는 변수에다가 2를 부여 -> console.log(two) 입력했을때 console 창에 2 가 적힘
// 설정값이 없는 변수일 때 let  함수
// let two;
// two = 2;
// console.log(two);

// const anotherTwo;
// anotherTwo = 2;
// let 변수와 다르게 const 에서는 안되는 이유
// const는 어떤 설정값을 쓰일때 사용됨
const two = 2;
console.log(two);

const four = 4;
console.log(4);

let undefinedVal;
console.log(undefinedVal);

const additionConst = two + four;
console.log(additionConst);

let addition = two + four;
console.log(addition);

let subtraction = two - four;
console.log(subtraction);

let multiplication = two * four;
console.log(multiplication);

let division = two / four;
console.log(division);

// additionConst = additionConst + 2;
// console.log(additionConst);

addition = addition + two;
console.log('addition', addition);
addition += two;
console.log('addition', addition);

// let subtraction = two - four;
// console.log(subtraction);
// subtraction으로 만들어 놓은 변수가 있기 때문에, -2 에서 -2 = -4

subtraction = subtraction - 2;
console.log('빼기', subtraction);
subtraction -= two;
console.log('빼기', subtraction);
// 교수님이 선호하는 식
subtraction -= -1 * two;
console.log('sub', subtraction);

multiplication = multiplication * two;
console.log('곱하기', multiplication);
multiplication *= two;
console.log('곱파기', multiplication);

console.log('square,제곱', 8 ** 2);
console.log('세제곱', 8 ** 3);
console.log('rootsquare,제곱근', 64 ** (1 / 2));
console.log('제곱근', 64 ** 1 / 2);

division = division / two;
console.log('나누기', division);
division /= two;
console.log('난우깉', division);
// 더 선호하는 방식
division *= -1 / two;
console.log('디비전', division);

let counter = 0;
counter += 1;
console.log('counter', counter);
counter += 1;
console.log('counter', counter);
counter++;
console.log('counter', counter);
counter++;
console.log('counter', counter);
counter++;
console.log('counter', counter);
counter--;
console.log('counter', counter);
// remainder = 나머지
// 8을 나누고 나머지를 불러옴
let remainder = counter % 8;
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
// 우리가 어떤 숫자를 8로 나누면, 나머지는 01234567 이 나옴
// 홀 짝을 구분하는 방법에는 어떤 숫자를 2로 나눴을때 나머지가 0이 나오냐, 1이 나오냐를 파악하면 됨

let boolean = true;
console.log('boolean', boolean);
boolean = false;
console.log('boolean', boolean);
// !=not
// false 의 not 은 true,
// true의 not 은 false
// 토글 같은 개념을 다룰때 쓰임
boolean = !boolean;
console.log('boolean', boolean);
boolean = !boolean;
console.log('boolean', boolean);

const textTwo = '2';
// 숫자 2+글자two =22
console.log('num+txt', two + textTwo);
// 숫자+숫자=4 사칙연산되어 나오기
console.log('num+num', two + two);
// 글자two + 글자two;=22
console.log('txt+txt', textTwo + textTwo);
// 보라색으로 출력 되면 글자가 아니라는것, 흰색으로 출력되면 글자라는 것.
console.log('solution', two + Number(textTwo));
// Number()함수 괄호 안에 글자가 숫자라면 숫자로 변경해서 출력됨

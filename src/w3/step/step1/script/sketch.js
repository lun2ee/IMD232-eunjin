let x;
let y;
// let velocityX = 1;
let velocityX = 3;
// let velocityY = 1;
let velocityY = 5;
// 화면상에 무언가 움직이는 것을 표현할 때, 위치 값을 매 프레임마다 변화를 줄 수 있는 계산식을 넣어줘서 표현한다.
// -> 속도 개념을 가지고 움직이는 물체를 표현하는 방법
function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  x = width / 2.0;
  y = height / 2.0;
}

function draw() {
  background('white');
  x += velocityX;
  y += velocityY;
  ellipse(x, y, 50);

  // if (x < 0) {
  //   velocityX *= -1;
  // } else if (x > width) {
  //   velocityX *= -1;
  // }
  if (x < 0 || x > width) {
    velocityX *= -1;
  }
  //   if (y < 0) {
  //     velocityY *= -1;
  //   } else if (y > height) {
  //     velocityY *= -1;
  //   }
  if (y < 0 || y > height) {
    velocityY *= -1;
  }
}

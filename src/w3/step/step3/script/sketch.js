// let x;
// let y;
// !!! vector 라는 것을 묶어서 사용할수도 있다 !!!
let position;
// 변수이름은 마음대로 정해도 되나, 내가 알기 쉽게 하기 _의미가 있는
// let velocityX = 3;
// let velocityY = 5;
let velocity;
// velocity 는 속력을 의미하는 변수

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  //   x = width / 2.0;
  //   y = height / 2.0;

  //   let 으로 변수 선언하고 시작하기는 createVector로
  position = createVector(width / 2, height / 2);
  //   position = createVector(x,y);
  velocity = createVector(3, 5);
  //   -> setup 안에서 초기값을 넣어주어야 한다.
}

function draw() {
  background('white');
  //   x += velocityX;
  //   y += velocityY;
  position.add(velocity);
  ellipse(position.x, position.y, 50);

  if (position.x < 0 || position.x > width) {
    velocity.x *= -1;
  }
  if (position.y < 0 || position.y > height) {
    velocity.y *= -1;
  }
}

// Bouncing Ball with Array
// let x;
// let y;
let pos;
// let velocityX = 3;
// let velocityY = 5;
let vel = [3, 5];
//   console 에서 vel의 Array(2)의 값임 /

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  //   x = width / 2.0;
  //   y = height / 2.0;
  pos = [width / 2, height / 2];
  //   console 에서 pos의 Array(2)의 값임 /

  console.log('pos', pos);
  console.log('vel', vel);
}

function draw() {
  background('white');
  //   x += velocityX;
  //   y += velocityY;

  //   Pos의 0번지 값에다가, vel 의 0번지 값을 더한다
  pos[0] += vel[0];
  //   Pos의 1번지 값에다가, vel 의 1번지 값을 더한다
  pos[1] += vel[1];
  //   ellipse(x, y, 50);
  ellipse(pos[0], pos[1], 50);

  //   if (x < 0 || x > width) {
  //     velocityX *= -1;
  //   }

  //   if (y < 0 || y > height) {
  //     velocityY *= -1;
  //   }

  if (pos[0] < 0 || pos[0] > width) {
    vel[0] *= -1;
  }
  //   x 에 해당하는것이 pos[0]
  //   y에 해당하는것이 pos[1]

  if (pos[1] < 0 || pos[1] > height) {
    vel[1] *= -1;
  }
  //   velocity 의 경우에도
  //   x = [0], y = [1]
}

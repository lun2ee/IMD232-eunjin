// let x;
// let y;

let p = {};
// let p = {
// //   add: function (otherVector) {
// //     this.x += otherVector.x;
// //     this.y += otherVector.y;
// //   },
// };

// let velocityX = 3;
// let velocityY = 5;
let v = {
  // velocity 의 x 라고 하면 바로 3이 나온다 _ 명료하게 제시되어 있음
  x: 3,
  y: 5,
};

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  //   x = width / 2.0;
  //   y = height / 2.0;
  p.x = width / 2;
  p.y = height / 2;
  console.log('p', p);
  console.log('v', v);
}

function draw() {
  background('white');
  //   x += velocityX;
  //   y += velocityY;

  p.x += v.x;
  p.y += v.y;
  //   p.add(v);

  //   ellipse(x, y, 50);
  ellipse(p.x, p.y, 50);

  //   if (x < 0 || x > width) {
  //     velocityX *= -1;
  //   }
  //   if (y < 0 || y > height) {
  //     velocityY *= -1;
  //   }

  if (p.x < 0 || p.x > width) {
    v.x *= -1;
  }
  if (p.y < 0 || p.y > height) {
    v.y *= -1;
  }
}

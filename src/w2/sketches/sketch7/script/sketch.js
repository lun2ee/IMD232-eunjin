function setup() {
  let canvas;
  //   위의 변수에다가 아래의 createCanvas를 담아줄것
  //   canvas 라고 하는 변수는 createCanvas에 의해 만들어지는 것을 지칭하게 됨.
  canvas = createCanvas(400, 300);
  let canvasParent;
  //   라는 또 다른 변수를 만들자
  // canvasParent 는 select 라는 함수가 있음.
  // ( 안에 아까 만든 id 를 넣어준다 '#canvas-goes-here')
  canvasParent = select('#canvas-goes-here');
  canvas.parent(canvasParent);
  //  11번 처럼 적어주면 container 안에 canvas가 들어가게 됨
  background(255);
}

function draw() {
  background(255, 0, 0);
  circle(mouseX, mouseY, 50);
}

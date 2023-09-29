function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  // 0은 검정, 255는 흰색
  background(255);

  //   한번 더 돌때 첫 줄의 도형에 주황색으로 물들지 않기 위해 fill 을 입력해줘야 함
  fill(255);
  rectMode(CORNER);
  // rect or ellipse(X,Y,가로, 세로)
  ellipse(100, 100, 50);
  rect(100, 100, 50, 50);
  //   원은 중앙 중심으로 그림을 그리는 것이 기본 셋팅이다.
  //   사각형은 왼쪽 위를 중심으로 그림을 그리는 것이 기본 셋팅이다.
  ellipse(200, 100, 50, 25);
  rect(200, 100, 25, 50);

  //   도형 그리기 한바퀴 더 돌때 또 CENTER가 적용이 되니까 이를 방지하기 위해서는 이미 그려진 도형의 rectMode를 설정해줘야한다.
  //   rectMode 를 활용하여 도형을 그리는 방식을 바꿀수 있다.
  rectMode(CENTER);
  rect(300, 100, 50, 50);
  ellipse(300, 100, 50, 50);
  rect(400, 100, 50, 25);
  ellipse(400, 100, 25, 50);

  fill(255, 127, 0);
  //   이 fill 만 넣게 되면 도형 전부 다 주황색으로 변하게 된다
  ellipse(100, 200, 50);
  fill('#00EE40');
  //   첫줄 도형과 두번째 줄 원 빼고 색이 입혀짐
  circle(200, 200, 50);
  colorMode(HSL);
  rect(300, 200, 50);
  square(400, 200, 50);
}

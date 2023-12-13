const t = () => millis() / 1000; //시간 함수 정의(초 단위)
// millis() / 1000 는 현재까지 경과한 밀리초를 초로 변환한 것이다.
//t() 함수는 프로그램이 시작된 후 흐른 전체 시간(초단위)을 반환한다.
let beams = []; //빔들을 담을 배열

function setup() {
  setCanvasContainer('mySketchGoesHere', 1, 1, true);
  createCanvas(windowWidth, windowHeight);

  strokeWeight(min(width, height) * 0.003);

  //초기에 24개의 Beam 객체를 생성하여 배열에 추가
  for (let i = 0; i < 24; i++) {
    beams.push(new Beam());
  }
}

function draw() {
  background(0);

  // 모든 Beam 객체에 대해 animate 와 render 매서드를 호출
  beams.forEach(function (val, ind, arr) {
    val.animate(); //빔의 상태 업데이트
    val.render(); //빔을 화면에 그림
  });
  //중심에 작은 원 그리기 (빨간색)
  fill('#ff0000');
  noStroke();
  circle(width / 2, height / 2, min(width, height) * 0.1);
}

function windowResized() {
  // 윈도우 크기가 변경되면 캔버스 크기를 조절
  resizeCanvas(windowWidth, windowHeight);

  beams = [];
  //윈도우 크기가 조절될 때, 다시 24개의 Beam 객체를 생성하여 배열에 추가
  for (let i = 0; i < 24; i++) {
    beams.push(new Beam());
  }
}

class Beam {
  constructor() {
    this.center = createVector(width / 2, height / 2); //빔의 중심 좌표
    this.leng = (min(width, height) * 0.8) / 2; //광선 길이의 반
    this.a = random() * TAU; //랜덤한 각도
    this.offset_range = PI / 15; //빔의 흔들림 범위 (랜덤 오프셋 범위)
    this.offset_seed = random(50000); //빔의 흔들림을 결정하는 시드값 (오프셋 시드)
    this.offset = this.get_offset(); //현재 빔의 흔들림 (현재 오프셋)
    this.hop_range = PI / 3; //빔의 점프 범위 (각도 변화 범위)
    this.charge_limit = 120; //빔이 충전되는 최대 값
    this.charge = floor(random(this.charge_limit)); //현재 빔의 충전 상태 (충전량 초기화)

    this.density = 30; //빔을 구성하는 곡선들의 개수
    this.squigle_range = this.leng * 0.06; //각 곡선의 흔들림 범위
    this.squiglies = [];
    // 선을 이루는 각 점에 대한 Squigle 벡터 생성
    for (let i = 0; i < this.density; i++) {
      this.squiglies.push(this.get_squigle(i)); //곡선들을 생성하여 배열에 추가
    }
  }

  //곡선의 흔들림을 결정하는 벡터를 생성
  get_squigle(i) {
    //노이즈를 활용하여 각 Squigle의 방향 벡터 생성
    let angle = noise(i / 24, t() / 6, this.offset_seed) * TAU;
    return p5.Vector.fromAngle(angle, this.squigle_range);
  }

  //빔의 흔들림을 결정하는 값을 반환
  get_offset() {
    //노이즈를 활용하여 현재 오프셋 값 생성
    return (noise(this.offset_seed, t()) * 2 - 1) * this.offset_range;
  }

  //주어진 좌표로부터 빔이 도달하는 위치를 반환
  get_pos(x = 0, y = 0) {
    if (x == 0 && y == 0)
      //초기값이 주어지지 않으면 현재 각도와 오프셋에 따른 위치 벡터 반환
      return p5.Vector.fromAngle(this.a + this.offset, this.leng).add(
        this.center
      );

    //주어진 좌표가 짐에 가까우면 그대로 반환
    //주어진 점이 원의 내부에 있을 경우, 해당 점의 위치 반환
    if (dist(x, y, this.get_pos().x, this.get_pos().y) < this.leng * 0.6) {
      if (dist(x, y, width / 2, height / 2) < this.leng) {
        return createVector(x, y);
      } else {
        //주어진 점이 원의 외부에 있을 경우, 해당 점을 원 위에 위치하도록 조정하여 반환
        return createVector(x, y)
          .sub(createVector(width / 2, height / 2))
          .setMag(this.leng)
          .add(this.center);
      }
    } else {
      //주어진 점이 원의 외부에 있고 원과 충돌하지 않을 경우, 현재 각도와 오프셋에 따른 위치 벡터 반환
      return this.get_pos();
    }
  }

  charge_up() {
    //일정 확률로 충전량 증가 및 충전 한계 도달 시 방향 전환
    this.charge += round(random());
    if (this.charge >= this.charge_limit) {
      this.hop();
      this.charge = 0;
    }
  }

  hop() {
    //랜덤한 각도 변화 적용
    this.a += random(-this.hop_range, this.hop_range);
  }

  animate() {
    //충전 및 선의 흔들림 업데이트
    this.charge_up();
    this.offset = this.get_offset();
    for (let i = 0; i < this.squiglies.length; i++) {
      this.squiglies[i] = this.get_squigle(i);
    }
  }

  render() {
    let cen = this.center.copy();
    let tar = this.get_pos(mouseX, mouseY);
    push();
    noFill();
    stroke('#8040de');
    beginShape();
    vertex(cen.x, cen.y);
    this.squiglies.forEach(function (val, ind, arr) {
      let amt = ind / arr.length;
      let v = p5.Vector.sub(tar, cen)
        .mult(0.1 + amt * 0.8)
        .add(cen)
        .add(val);
      vertex(v.x, v.y);
    });
    vertex(tar.x, tar.y);
    endShape();
    pop();
    push();
    fill('#ff0000');
    noStroke();
    circle(tar.x, tar.y, noise(this.offset_seed, t()) * this.leng * 0.1);
    pop();
  }
}

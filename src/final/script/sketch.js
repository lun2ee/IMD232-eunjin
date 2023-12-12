// sketch.js
let particles = [];

function setup() {
  setCanvasContainer('mySketchGoesHere', 1, 1, true);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // 파티클 개수가 30개가 될 때까지 생성 및 갱신
  if (particles.length < 30) {
    particles.push(new Particle(width / 2, height / 2));
  }

  // 파티클 갱신 및 그리기
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();

    // 파티클 이동 거리 시각화
    particles[i].displayTrail();
  }
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.prevPosition = createVector(x, y); // 이전 위치 저장
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.acceleration = createVector();
    this.color = color(random(100, 255), random(100, 255), random(100, 255));
    this.radius = random(5, 15);
  }

  update() {
    // 랜덤한 가속도를 더해줌으로써 플라즈마처럼 움직이게 함
    this.acceleration = createVector(random(-0.05, 0.05), random(-0.05, 0.05));
    this.velocity.add(this.acceleration);
    this.prevPosition.set(this.position); // 현재 위치를 이전 위치로 저장
    this.position.add(this.velocity);

    // 화면 밖으로 나가면 위치를 다시 설정
    if (
      this.position.x < 0 ||
      this.position.x > width ||
      this.position.y < 0 ||
      this.position.y > height
    ) {
      this.position = createVector(width / 2, height / 2);
      this.velocity = createVector(random(-1, 1), random(-1, 1));
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  }

  displayTrail() {
    stroke(this.color);
    line(
      this.prevPosition.x,
      this.prevPosition.y,
      this.position.x,
      this.position.y
    );
  }
}

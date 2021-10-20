var ball = {
  x: 30,
  y: 100,
  color: ["red", "blue", "green", "purple"],
  radius: 20,
  xspeed: 0,
  yspeed:0,
}

var student = {
  name: "Agam",
  class: 7,
  roll_no:12,
  favSubject:"coding",
  marks: [25,95,67,85,79]
};

function setup() {
  createCanvas(600, 200);

  console.log(student.name);
  console.log(student.class);
  student.roll_no = 45;
  console.log(student.roll_no);
  
  
}

function draw() {
  background(180);

 fill(ball.color[2])
 circle (ball.x, ball.y, ball.radius)
  ball.xspeed = 3
  ball.x = ball.x + ball.xspeed
  drawSprites();
}


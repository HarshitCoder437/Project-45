var bg1;
var bg2;
var soldier1, soldier2;
var soldier1Img, soldier2Img;
var laser, laser2, laserImg1, laserImg2, laserGrp;
var hurtSound;
var laserShoot1;
var laserShoot2;

function preload() {
  bg1 = loadImage("images/background.jpeg");
  bg2 = loadImage("images/backgroundlvl2.jpeg");
  soldier1Img = loadImage("images/soldier1.png");
  soldier2Img = loadImage("images/soldier2.png");
  laserImg1 = loadImage("images/laser.png");
  laserImg2 = loadImage("images/laser2.png");
}

function setup() {
  createCanvas(800, 600);

  soldier1 = createSprite(200, 450, 10, 10);
  soldier1.addImage(soldier1Img);
  soldier1.scale = 0.3;
  soldier1.setCollider("rectangle", -150, 0, 150, 550);

  laser = createSprite(330, 465, 10, 10);
  laser.addImage(laserImg1);
  laser.scale = 0.2;
  laser.visible = false;

  laser2 = createSprite(330, 465, 10, 10);
  laser2.addImage(laserImg2);
  laser2.scale = 0.15;
  laser2.visible = false;

  soldier2 = createSprite(600, 450, 10, 10);
  soldier2.addImage(soldier2Img);
  soldier2.scale = 0.35;
  soldier2.setCollider("rectangle", 150, 0, 150, 480);

  laserGrp = new Group();
}

function draw() {

  background(bg2);

  if (keyDown("UP_ARROW") && soldier2.y > 95) {
    soldier2.y -= 10;
  }

  if (keyDown("RIGHT_ARROW") && soldier2.x < 730) {
    soldier2.x += 10;
  }

  if (keyDown("DOWN_ARROW") && soldier2.y < 505) {
    soldier2.y += 10;
  }

  if (keyDown("LEFT_ARROW") && soldier2.x > 85) {
    soldier2.x -= 10;
  }

  if (keyDown("w") && soldier1.y > 89) {
    soldier1.y -= 10;
  }

  if (keyDown("a") && soldier1.x > 60) {
    soldier1.x -= 10;
  }

  if (keyDown("s") && soldier1.x < 732) {
    soldier1.x += 10;
  }

  if (keyDown("z") && soldier1.y < 518) {
    soldier1.y += 10;
  }

  if (keyDown("space")) {
    if (frameCount % 20 === 0) {
      laser = createSprite(soldier1.x + 155, soldier1.y + 15, 10, 10);
      laser.addImage(laserImg2);
      laser.scale = 0.15;
      laserGrp.add(laser);
      laser.velocityX = 10;
    }
  }

  if (keyDown("l")) {
    if (frameCount % 20 === 0) {
      laser = createSprite(soldier2.x - 150, soldier2.y - 30, 10, 10);
      laser.addImage(laserImg1);
      laser.scale = 0.2;
      laserGrp.add(laser);
      laser.velocityX = -10;
    }
  }

  if ((laser.x > width || laser.x < (width - width)) || (laser.y > height || laser.y < (height - height))) {
    laserGrp.destroyEach();
  }

  if (laserGrp.isTouching(soldier1)) {
    laserGrp.destroyEach();
  }

  if (laserGrp.isTouching(soldier2)) {
    laserGrp.destroyEach();
  }

  fill("yellow");
  textSize(15);
  text("Soldier1", soldier1.x - 50, soldier1.y - 90);
  text("Soldier2", soldier2.x - 25, soldier2.y - 95);

  drawSprites();
}
var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8d8bb160-6052-4a2f-ab37-a466ecfa4e50","533f2484-2b76-4819-b7b3-1547100664e6","741ff204-c4a7-48b6-a406-b8ff764fdfe4"],"propsByKey":{"8d8bb160-6052-4a2f-ab37-a466ecfa4e50":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"650PATOikA6SbuvicKtDv9I2SG3b9nE_","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/8d8bb160-6052-4a2f-ab37-a466ecfa4e50.png"},"533f2484-2b76-4819-b7b3-1547100664e6":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"lsnKkRfYn_jb2Y3IUZRtgXBz.2xhpBB2","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/533f2484-2b76-4819-b7b3-1547100664e6.png"},"741ff204-c4a7-48b6-a406-b8ff764fdfe4":{"name":"animation_4","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  
  sam = createSprite(20,190,10,10);
  sam.shapeColor = "green";
  
  sam.setAnimation("animation_1");
  sam.scale=0.3;

  car1 = createSprite(100,130,10,10);
  car1.setAnimation("animation_3");
  car1.scale=0.3;
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.setAnimation("animation_3");
  car2.scale=0.3;
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.setAnimation("animation_3");
  car3.scale=0.3;
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.setAnimation("animation_3");
  car4.scale=0.3;
  car4.shapeColor = "red";
  
 car1.velocityY= 8;
 car2.velocityY= 8;
 car3.velocityY= -8;
 car4.velocityY= -8;

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
 
if(keyDown("right")){
  sam.x+=2;
}
if(keyDown("left")){
  sam.x-=2;
}
if(sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)){
  sam.x=20;
  sam.y=190;
  life++;
}
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cac04a7c-f436-4cbe-ba61-6da170b5d6ef","b81e6205-2482-49f8-955d-56365a9d6325","cc83d3a4-b738-4bee-bcc0-461392bfc238","c2f403c3-c53a-410e-9104-41769969f16e","76af44dd-b2c4-440b-b345-8ae163d95cb0"],"propsByKey":{"cac04a7c-f436-4cbe-ba61-6da170b5d6ef":{"name":"plano_de_fundo","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"58ljs_l2Y.iyXbnPwxnONaizUnQvUXRa","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/cac04a7c-f436-4cbe-ba61-6da170b5d6ef.png"},"b81e6205-2482-49f8-955d-56365a9d6325":{"name":"jogador","sourceUrl":null,"frameSize":{"x":438,"y":613},"frameCount":2,"looping":true,"frameDelay":12,"version":"QCFidQbGINHcyYNnhpjVijGAABBs4yud","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":876,"y":613},"rootRelativePath":"assets/b81e6205-2482-49f8-955d-56365a9d6325.png"},"cc83d3a4-b738-4bee-bcc0-461392bfc238":{"name":"Inimigo 1","sourceUrl":null,"frameSize":{"x":389,"y":400},"frameCount":2,"looping":true,"frameDelay":12,"version":"kIn.aq.elFfPR6Z7hcP3jZAGkDogWY.H","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":389,"y":800},"rootRelativePath":"assets/cc83d3a4-b738-4bee-bcc0-461392bfc238.png"},"c2f403c3-c53a-410e-9104-41769969f16e":{"name":"Inimigo 2","sourceUrl":null,"frameSize":{"x":269,"y":400},"frameCount":2,"looping":true,"frameDelay":12,"version":"whb.TFNjKEUuqL7R5dsbdLHxfTlVv.vJ","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":538,"y":400},"rootRelativePath":"assets/c2f403c3-c53a-410e-9104-41769969f16e.png"},"76af44dd-b2c4-440b-b345-8ae163d95cb0":{"name":"Imagem fim de jogo byju´s.jpg_1","sourceUrl":null,"frameSize":{"x":537,"y":546},"frameCount":2,"looping":true,"frameDelay":12,"version":"d2RMk4z505rCN55_zqOiQ1WZ.VDc4dbt","loadedFromSource":true,"saved":true,"sourceSize":{"x":537,"y":1092},"rootRelativePath":"assets/76af44dd-b2c4-440b-b345-8ae163d95cb0.png"}}};
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

var plano_de_fundo = createSprite(200, 200);
plano_de_fundo.setAnimation("plano_de_fundo");
var jogador = createSprite(299, 202);
jogador.setAnimation("jogador");
jogador.scale = 0.13;
var inimigo1 = createSprite(104, 101);
inimigo1.setAnimation("Inimigo 1");
inimigo1.scale = 0.30;
var inimigo2 = createSprite(104, 298);
inimigo2.setAnimation("Inimigo 2");
inimigo2.scale = 0.35;
inimigo1.velocityX = 2.5;
inimigo1.velocityY = 3.5;
inimigo2.velocityX = 3.5;
inimigo2.velocityY = -4.5;
createEdgeSprites();
var vidas = 15;



function draw() {
drawSprites();
jogador.bounceOff(edges);
inimigo1.bounceOff(edges);
inimigo2.bounceOff(edges);
if (keyDown("up")) {
  jogador.velocityY = -5.5;
}
if (keyDown("down")) {
  jogador.velocityY = 5.5;
}
if (keyDown("right")) {
  jogador.velocityX = 5.5;
}
if (keyDown("left")) {
  jogador.velocityX = -5.5;
}
if (jogador.isTouching(inimigo1)) {
  vidas = vidas - 0.5;
}
if (jogador.isTouching(inimigo2)) {
  vidas = vidas - 0.5;
}
if (vidas <= 0) {
  jogador.destroy();
  var imagemfimdejogo = createSprite(200, 200);
  imagemfimdejogo.setAnimation("Imagem fim de jogo byju´s.jpg_1");
}
fill("white");
textSize(25);
text( "vidas " + vidas, 10, 25);
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

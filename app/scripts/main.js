console.log('\'Allo \'Allo!');
$(document).ready(function(){
var renderer = PIXI.autoDetectRenderer(400, 400);
$("#addPixi").append(renderer.view);
var stage = new PIXI.Container();
var clouds = PIXI.Sprite.fromImage('images/clouds.jpg');

clouds.anchor.x = 0.5;
clouds.anchor.y = 0.5;
clouds.position.x = 200;
clouds.position.y = 200;
stage.addChild(clouds);
var text = new PIXI.Text("Welcome", {font:"50px Arial", dropShadow: true, fill:"white"});
text.anchor.x = 0.5;
text.anchor.y = 0.5;
text.position.x = 200;
text.position.y = -25;
 stage.addChild(text);

render();//draw stuff in the box
var count = 0;
function render(){


var colorMatrix = [//esto es lo que le va a cambia r el color 

1, 0, 0, 0,
0, 1, 0, 0,
0, 0, 1, 0,
0, 0, 0, 1
];

var filter = new PIXI.filters.ColorMatrixFilter();
filter.matrix = colorMatrix;
var newValSat = 0 + Math.sin(count);//calculate variable that overtime is gonna be dependent 
filter.saturate(newValSat, false);
stage.filters = [filter];
count += .01;


requestAnimationFrame(render);//overtime interactes 
clouds.rotation += .001;
 if (text.position.y < 350) {
      text.position.y += 1;
    }
renderer.render(stage);
}

});




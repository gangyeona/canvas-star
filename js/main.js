/**
 * Created by upsmart on 2016/8/27.
 */
var can;
var ctx;
var canWidth;
var canHeight;

var starImage = new Image();
var moonImage = new Image();

var stars = [];
var num = 500;

var lastTime;
var dTime;

function init(){
    can = document.getElementById("canvas");
    ctx = can.getContext("2d");
    canWidth = can.width = window.innerWidth;

    canHeight = can.height =window.innerHeight;

    starImage.src = "src/star.png";
    moonImage.src = "src/moon.png";

    for(var i =0;i<num;i++){
        var obj = new starObj();
        stars.push(obj);
        stars[i].init();
    }

    lastTime = Date.now();

    loadLoop();
}

document.body.onload = init();

function loadLoop(){
    window.requestAnimationFrame(loadLoop);
    var now = Date.now();
    dTime = now - lastTime;
    lastTime = now;
    drawBackground();
    drawMoon();
    drawStars();

}

function drawBackground(){
    ctx.fillStyle = "#393550";
    ctx.fillRect(0,0,canWidth,canHeight);
}

function drawStar(){
    ctx.drawImage(starImage,100,100);
}
function drawMoon(){
    ctx.drawImage(moonImage,400,100,85,85);
}
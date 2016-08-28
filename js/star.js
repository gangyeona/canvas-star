/**
 * Created by upsmart on 2016/8/27.
 */
var starObj = function(){
    this.x;
    this.y;
    this.picNo;
    this.timer;
    this.xS;
    this.yS;

};

starObj.prototype.init = function () {
    this.x = Math.random()*(canWidth - 100);
    this.y = Math.random()*(canHeight - 100);

    this.picNo = Math.floor(Math.random()*7);
    this.timer = 0;
    this.xS = Math.random()*3 - 3;
    this.yS = Math.random()*3 - 3;
};

starObj.prototype.draw = function () {
    // ctx.drawImage(starImage,this.x,this.y);
    ctx.drawImage(starImage,this.picNo*7,0,7,7,this.x,this.y,7,7);
};

starObj.prototype.update = function(){
    this.x += this.xS * dTime * 0.001;
    this.y += this.yS * dTime * 0.001;
    this.timer += dTime;

    if(this.x >= (canWidth - 100)|| this.x < 100 || this.y>=(canHeight - 100) || this.y < 100){
        this.init();
    }

    if(this.timer>60){
        this.picNo += 1;
        this.picNo %= 7;
        this.timer = 0;
    }
};

function drawStars(){
    for(var i = 0;i < num; i++){
        stars[i].update();
        stars[i].draw();
    }
}
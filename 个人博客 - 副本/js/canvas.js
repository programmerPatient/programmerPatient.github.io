

var canvas=document.getElementsByTagName("canvas")[0];
///canvas.style.marginTop="1%";
var ctx=canvas.getContext("2d");//规定为2d画布,绘图操作的工具
var width=canvas.width=window.innerWidth-20;//规定画布的宽度
var height=canvas.height=window.innerWidth-20;//规定画布的高度
function random(h){
    return Math.floor(Math.random()*h);
}
function ball(color,size,x,y,vleX,vleY,vleSize){
    this.color=color;
    this.size=size;
    this.x=x;
    this.y=y;
    this.vleX=vleX;
    this.vleY=vleY;
    this.vleSize=vleSize;
}
ball.prototype.draw=function(){
    ctx.beginPath();
    ctx.fillStyle=this.color;//填充色
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);//画出的形状
    ctx.fill();
}
ball.prototype.undat=function(){
    if(this.x==0||this.x==width){this.x=random(width);this.y=random(height);this.size=2;}
    if((this.y>-2&&this.y<2)||(this.y>height-2&&this.y<height+2)){this.y=random(height);this.x=random(width);this.size=2} if(this.size="">10){this.size=1;}
    this.x+=this.vleX;
    this.y+=this.vleY;
    this.size+=this.vleSize;
}
var s=[];
for(let i=0;i</height+2)){this.y=random(height);this.x=random(width);this.size=2}></2)||(this.y>
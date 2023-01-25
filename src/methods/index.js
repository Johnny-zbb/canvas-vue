export class Ball {
    constructor(ctx, x, y, vx, vy, radius, color, opcity) {
        this.ctx = ctx
        this.x = x; // 横坐标
        this.y = y; // 纵坐标
        this.vx = vx; // 横坐标变化速率
        this.vy = vy; // 纵坐标变化速率
        this.radius = radius; // 半径大小
        this.color = color; // 颜色
        this.opcity = opcity; // 透明度
        this.edge = { // 运动边界
            top: this.y - 5,
            bottom: this.y + 5,
            left: this.x - 5,
            right: this.x + 5,
        }

    }
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.globalAlpha = this.opcity;
        const grd = this.ctx.createRadialGradient(this.x, this.y, this.radius * 0.25, this.x, this.y, this.radius);
        grd.addColorStop(0, this.color);
        grd.addColorStop(1, '#94e5ba');
        this.ctx.fillStyle = grd;
        // this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
    play() {
        this.draw()
        this.x += this.vx;
        this.y += this.vy;
        console.log('正在运动',this.x,this.y)
        // 运动边界
        if (this.y + this.vy > this.edge.bottom || this.y + this.vy < this.edge.top) {
            this.vy = -this.vy;
        }
        if (this.x + this.vx > this.edge.right || this.x + this.vx < this.edge.left) {
            this.vx = -this.vx;
        }
    }
    update(x, y) { // 不能更新太快，太频繁
        // console.log(this.ctx)
        // if(this.x == x && this.y ==y){
        //     console.log(x,y,this.x,this.y)
        //     return
        // }
        this.x = x;
        this.y = y;

        this.edge = { // 运动边界
            top: this.y - 5,
            bottom: this.y + 5,
            left: this.x - 5,
            right: this.x + 5,
        }
    }
}

export class Rect {
    constructor(ctx, x, y, w, h, color, opcity,speed) {
        this.ctx = ctx
        this.x = x; // 横坐标
        this.y = y; // 纵坐标
        this.w = w; // 长
        this.currentW = 0 // 初始化宽度
        this.h = h; // 宽
        this.color = color; // 颜色
        this.opcity = opcity; // 透明度
        this.playing = false //开始的时候没有动画播放
        this.speed =speed
    }
    draw() {
        this.ctx.globalAlpha = this.opcity;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.currentW, this.h);
    }
    play() {
        if(this.currentW>=this.w){
            this.currentW -= this.speed
            this.playing = true
        }else{
            this.playing = false
        }
        this.draw()
        // console.log(this.playing,'this.playing');
    }
}

export class Text {
    constructor(ctx,text, x, y,color, opcity,font,maxWidth) {
        this.ctx = ctx
        this.x = x; // 横坐标
        this.y = y; // 纵坐标
        this.color = color; // 颜色
        this.opcity = opcity; // 透明度
        this.text = text
        this.font = font
        this.maxWidth = maxWidth
    }
    draw() {
        this.ctx.font= this.font;
        this.ctx.globalAlpha = this.opcity;
        this.ctx.fillStyle = this.color;
        if(this.maxWidth){
            this.ctx.fillText(this.text,this.x,this.y,this.maxWidth);
        }else{
            this.ctx.fillText(this.text,this.x,this.y);
        }
    }
}
<script setup>
import { onMounted ,} from 'vue';
import { Ball, Rect ,Text} from '../methods/index'
let timeToPlayRect = false
let timeToPlayRect2 = false
let timeToPlayRect3 = false

let timeToPlayFont1 = false
let timeToPlayFont2 = false
let timeToPlayFont3 = false
let timeToPlayFont4 = false
let timeToPlayFont5 = false
let timeToPlayFont6 = false
let timeToPlayFont7 = false

// onMounted生命周期才可获取dom
onMounted(() => {
    const canvas = document.getElementById('tutorial')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    // 获取canvas的上下文
    const ctx = canvas.getContext("2d");
    let raf;
    // 创建实体
    const ball = new Ball(
        ctx,
        canvas.width / 2,
        canvas.height / 2,
        .1,
        .09,
        150,
        "#4ce2c8",
        1,
    )
    const ball2 = new Ball(
        ctx,
        canvas.width / 4,
        canvas.height / 4,
        .08,
        .1,
        90,
        "#4ce2c8",
        .5,
    )
    const rect = new Rect(
        ctx,
        canvas.width,
        0,
        -canvas.width * 3 / 4,
        canvas.height,
        "#0a1333",
        1,
        10,
    )
    const rect2 = new Rect(
        ctx,
        canvas.width/3+750,
        450,
        -750,
        7,
        "#7e8796",
        1,
        7,
    )
    const rect3 = new Rect(
        ctx,
        canvas.width-210,
        610,
        -140,
        7,
        "white",
        1,
        5,
    )
    const text1 = new Text(
        ctx,
        'Vaccine Doses',
        canvas.width/3,
        140,
        'white',
        1,
        "100px Times New Roman",
    )
    const text2 = new Text(
        ctx,
        'yesterday in the US (7-day average)',
        canvas.width/3,
        220,
        '#7e8796',
        1,
        "30px Georgia",
    )
    const text3 = new Text(
        ctx,
        '+301,449',
        canvas.width/3,
        400,
        '#32a575',
        1,
        "180px Arial",
    )
    
    const text4 = new Text(
        ctx,
        'fully vaccinated',
        canvas.width/3,
        500,
        '#7e8796',
        1,
        "30px Georgia",
    )
    const text5 = new Text(
        ctx,
        '70%of US ',
        canvas.width/3,
        600,
        'white',
        1,
        "60px Georgia",
    )
    const text6 = new Text(
        ctx,
        'population',
        canvas.width/3,
        670,
        'white',
        1,
        "60px Georgia",
    )
    const text7 = new Text(
        ctx,
        'Total 228.6M',
        canvas.width*2/3,
        600,
        'white',
        1,
        "60px Georgia",
    )
    // 视频帧更新函数
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ball.play();
        ball2.play();
        
        if (timeToPlayRect) { //如果变化矩形时间到了，就更新球的位置和矩形的位置
            rect.play();
            if(rect.playing){ // 当且仅当变化的时候更新球的位置，变化完成后不再更新
                ball.update((window.innerWidth+rect.currentW) / 2, window.innerHeight / 2)
                ball2.update((window.innerWidth+rect.currentW)  / 3, window.innerHeight / 3)
            }
        }
        if (timeToPlayFont1) { 
            text1.draw();
        }
        if (timeToPlayFont2) { 
            text2.draw();
        }
        if (timeToPlayFont3) { 
            text3.draw();
        }
        if (timeToPlayFont4) { 
            text4.draw();
        }
        if (timeToPlayRect2) { 
            rect2.play();
        }
        if (timeToPlayFont5) { 
            text5.draw();
        }
        if (timeToPlayFont6) { 
            text6.draw();
        }
        if (timeToPlayFont7) { 
            text7.draw();
        }
        if (timeToPlayRect3) { 
            rect3.play();
        }
        raf = window.requestAnimationFrame(draw);
    }
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        ball.update(window.innerWidth / 2, window.innerHeight / 2)
        ball2.update(window.innerWidth / 3, window.innerHeight / 3)
    })
    window.requestAnimationFrame(draw);

    setTimeout(() => { // 0.3s后 开始变化大矩形
        timeToPlayRect = true
    }, 300)
    setTimeout(() => { // 1.3s后 开始出现文字1
        timeToPlayFont1 = true
    }, 1300)
    setTimeout(() => { // 1.5s后 开始出现文字2
        timeToPlayFont2 = true
    }, 1500)
    setTimeout(() => { // 1.6s后 开始出现文字3
        timeToPlayFont3 = true
    }, 1600)
    setTimeout(() => { // 1.7s后 开始出现文字4和修饰的矩形2，3
        timeToPlayFont4 = true
        timeToPlayRect2 = true
        timeToPlayFont5 = true
        timeToPlayFont6 = true
        timeToPlayFont7 = true
        timeToPlayRect3 = true
    }, 1700)

    // canvas.addEventListener("mouseover", (e) => {
    //     raf = window.requestAnimationFrame(draw);
    // });

    // canvas.addEventListener("mouseout", (e) => {
    //     window.cancelAnimationFrame(raf);
    // });
})


</script>

<template>
    <canvas id="tutorial"></canvas>
</template>

<style scoped>
canvas {
    display: block;
    background: #64d084;
}
</style>

/*const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove", function(e){
const posX = e.clientX;
const posY = e.clientY;

cursorDot.style.left = `${posX}px`;
cursorDot.style.top = `${posY}px`;
cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
}, { duration: 500, fill: "forwards"});
});*/

let cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.onmousemove = function(e){
      let x = e.pageX - card.offsetLeft;
      let y = e.pageY - card.offsetTop;
      card.style.setProperty('--x', x + 'px');
      card.style.setProperty('--y', y + 'px');
    }  })
let cursor = document.querySelector('cursor');
let body = document.querySelector('body')
document.addEventListener('mousemove',(e) => {
    body.style.backgroundPositionX = e.pageX/-4 +'px';
    body.style.backgroundPositionY = e.pageY/-4 +'px';
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
})
/*<div class="cursor-dot" data-cursor-dot>
  <div class="cursor-outline" data-cursor-outline></div> \
  */
/*const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let spots = [];
let hue = 0;

const mouse = {
    x:undefined,
    y:undefined
}
canvas.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    for(let i = 0; i<3; i++){
        spots.push(new Particle());
    }
})
class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 2 -1;
        this.speedY = Math.random() * 2 -1;
        this.color = 'hsl(' + hue +', 100%, 50%)'; 
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size  -= 0.03;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2 );
        ctx.fill();
    }
}
function handleParticle() {
    for(let i = 0; i<spots.length; i++){
        spots[i].update();
        spots[i].draw();
        for(let j = i; j< spots.length; j++){
            const dx = spots[i].x + spots[j].x;
            const dy = spots[i].y + spots[j].y;
            const distance = Math.sqrt(dx * dx + dy*dy);
            if(distance < 90){
                ctx.beginPath();
                ctx.strokeStyle = spots[i].color;
                ctx.lineWidth = spots[i].size/10;
                ctx.moveTo(spots[i].x, spots[i].y);
                ctx.lineTo(spots[i].x , spots[j].y);
                ctx.stroke();
            }
        }
        if(spots[i].size <= 0.3){
            spots.splice(i, 1); i--;
        }
    }
}
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticle();
    hue++;
    requestAnimationFrame(animate);
}
window.addEventListener('resize', function(){
         canvas.width = innerWidth;
         canvas.height = innerHeight;
         init();
})
window.addEventListener('mouseout', function(){
    mouse.x = undefined;
    mouse.y = undefined;
})
animate();
<canvas id="canvas"></canvas>*/



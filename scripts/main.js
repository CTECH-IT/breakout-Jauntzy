let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20,40,50,50);
ctx.fillStyle = "3FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240,160,20,0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath9;
ctx.rect(160,10,100,40);
ctx.stokeStyle = "rgba(0,0,255,0.5)";
ctx.stroke();
ctx.closePath();
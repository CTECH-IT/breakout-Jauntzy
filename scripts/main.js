let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
SVGTextContentElement.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000"
ctx.fill();
ctx.closePath();
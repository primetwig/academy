var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var width = 500;
var height = 500;
canvas.width = width;
canvas.height = height;


function reset() {
    canvas.width = canvas.width;
}

function degToRad(deg) {
    return deg * Math.PI / 180;
}



//ctx.fillStyle = "green";
//ctx.strokeStyle = "#f00";
//
//
//ctx.fillRect(10, 10, 100, 100);
//
//ctx.fillStyle = "#00f";
//ctx.fillRect(30, 20, 100, 100);
//
//ctx.fillStyle = "#f00";
//ctx.strokeRect(20, 60, 100, 100);
//
//ctx.clearRect(15, 80, 100, 100);





////ctx.moveTo(x, y);
//ctx.beginPath();
//
//for (var x = 10; x < width; x+=10) {
//    ctx.moveTo(x, 0);
//    ctx.lineTo(x, height);
//}
//
//ctx.strokeStyle = "#f00";
//ctx.stroke();

//ctx.beginPath();
//ctx.moveTo(100, 100);
//ctx.lineTo(150, 100);
//ctx.lineTo(125, 150);
//ctx.fillStyle = "#f00";
//ctx.fill();

//ctx.strokeStyle = "#0f0";
//ctx.stroke();
//
//ctx.fillStyle = "#00f";
//ctx.fill();





//ctx.arc(100, 100, 50, Math.PI*3/2, Math.PI, false);
//ctx.strokeStyle = "#00f";
//ctx.stroke();





//ctx.font = "bold italic 42px Arial";
//ctx.fillText("Hello", 250, 100);
//
//ctx.textAlign = "left"; // "start", "left", "end", "right", "center"
//
//ctx.textBaseline = "top"; // "top", "middle", "bottom", "hanging", "alphabetic", "ideographic"

//var aligns = ["start", "left", "end", "right", "center"];
//aligns.forEach((align, i) => {
//    setTimeout(() => {
//        reset();
//        ctx.fillRect(250, 100, 5, 5);
//        ctx.font = "bold 42px Arial";
//        ctx.textAlign = align;
//        ctx.fillText("Hello", 250, 100);
//    }, i * 2000);
//});

//var textBaselines = ["top", "middle", "bottom"];
//textBaselines.forEach((align, i) => {
//    setTimeout(() => {
//        reset();
//        ctx.fillRect(250, 100, 5, 5);
//        ctx.font = "bold 42px Arial";
//        ctx.textBaseline = align;
//        ctx.fillText("Hello", 250, 100);
//    }, i * 2000);
//});






////ctx.createLinearGradient(x0, y0, x1, y1); // градиент вдоль линии из точки (x0, y0) к точке (x1, y1)
//var grad = ctx.createLinearGradient(0, 0, 300, 0);
//
//grad.addColorStop(0, "black");
//grad.addColorStop(1, "white");
//
//ctx.fillStyle = grad;
//ctx.fillRect(0, 0, 300, 200);
//
//
////ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);   // создается 2 круга, по которым рисуется конус.
//ctx.createRadialGradient(10, 10, 5, 200, 200, 500); // градиент идет в направлении этого конуса






//ctx.drawImage(image, dx, dy);
//ctx.drawImage(image, dx, dy, dw, dh);
//ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
//
//
//var img = document.querySelector('img');
//var img = document.createElement('img');






//new Path2D();     // empty path object
//new Path2D(path); // copy from another Path2D object
//new Path2D(d);    // path from SVG path data
//
//
//var circle = new Path2D();
//circle.moveTo(200, 300);
//circle.arc(100, 35, 25, 0, 2 * Math.PI);
//ctx.fill(circle);

























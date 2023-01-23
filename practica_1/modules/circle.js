function draw(ctx, x, y, r, angulo, grados, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, angulo, grados);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function randomCircle(ctx, x, y, r, angulo, grados, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, angulo, grados);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function reportArea(r) {
    return r ** 2 * Math.PI
}

function reportPerimeter(r) {
    return 2 * Math.PI * r
}



export { randomCircle, draw, reportArea, reportPerimeter };
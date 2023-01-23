import { draw, randomCircle, reportArea, reportPerimeter } from './modules/circle.js';
import { create } from './modules/canvas.js';

//EXERCICI 1
let canvas = create('myCanvas', document.body, 300, 150)
let colores = ['red', 'orange', 'yellow', 'green', 'blue', 'pink', 'purple']
for (let i = 0; i < 7; i++) {
    draw(canvas, 100, 75, 50 - i, 1 * Math.PI, 0, colores[i])
}
//EXERCICI2
let grises = ['#ECECEC', '#DCDCDC', '#CACACA', '#B3B3B3', '#969696', '#7D7D7D', 'grey', '#6C6C6C ', '#616161', '#4A4A4A']
let canvas2 = create('myCanvas2', document.body, 600, 300)
for (let i = 0; i < 10; i++) {
    let numAleatorioUno = Math.random() * 600;
    let numAleatorioDos = Math.random() * 300;
    let numAleatorioTres = Math.random() * 100;
    randomCircle(canvas2, numAleatorioUno, numAleatorioDos, numAleatorioTres, 0, 2 * Math.PI, grises[i])
}
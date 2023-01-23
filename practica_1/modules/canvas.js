export function create(id, parent, width, height) {

    let canvasElem = document.createElement('canvas');
    parent.appendChild(canvasElem);


    canvasElem.id = id;
    canvasElem.width = width;
    canvasElem.height = height;
    canvasElem.style.border = "2px solid black";
    let ctx = canvasElem.getContext('2d');

    return ctx
}
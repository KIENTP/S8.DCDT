function Employee(img, top, left, size) {
    this.img = img;
    this.top = top;
    this.left = left ;
    this.size = size;

    this.getElementImg = function () {
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.img +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    };
    this.moveRight = function () {
        this.left += 20;
    };
    this.moveLeft = function () {
        this.left -= 20;
    };
    this.moveDown = function () {
        this.top += 20;
    };
    this.moveUp = function () {
        this.top -= 20;
    };
}
let pikachu = new Employee('pikachu.png',20 , 30 ,200);
document.getElementById('game').innerHTML = pikachu.getElementImg();
function start(evt) {
    switch (evt.keyCode) {
        case 37:

            pikachu.moveLeft();
            document.getElementById('game').innerHTML = pikachu.getElementImg();

            break;
        case 39:
            pikachu.moveRight();
            document.getElementById('game').innerHTML = pikachu.getElementImg();

            break;
        case 38:
            pikachu.moveUp();
            document.getElementById('game').innerHTML = pikachu.getElementImg();

            break;
        case 40:
            pikachu.moveDown();
            document.getElementById('game').innerHTML = pikachu.getElementImg();

            break;
    }
}
function doReady() {
    window.addEventListener('keydown' , start);
}
    
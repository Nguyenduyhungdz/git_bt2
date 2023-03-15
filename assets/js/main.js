// click box1 -> box2
var box1 = document.querySelector('.box1');

box1.onclick = function () {

 this.style.backgroundColor = "black";
};

// click box2 -> box3
var box2 = document.querySelector('.box2');

box2.onclick = function () {

 this.style.backgroundColor = "pink";
};

// Click box3 -> box1
var box3 = document.querySelector('.box3');

box3.onclick = function () {

 this.style.backgroundColor = "red";
};
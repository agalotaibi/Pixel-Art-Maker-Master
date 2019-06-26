// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {

// Your code goes here!
event.preventDefault();
var hight = document.getElementById("inputHeight").value;
var width = document.getElementById("inputWidth").value;
var tablePixel = document.getElementById("pixelCanvas");


for (var i=0; i< hight; i++){
    var coulmn = document.createElement("tr");
    for (var n = 0; n < width; n++){
        var row = document.createElement("td")
        coulmn.appendChild(row);
    }
    tablePixel.appendChild(coulmn);
}
}

function coverPixel(event){

if (event.target.nodeName =="TD"){
    var pickedColor = document.getElementById("colorPicker").value;
    event.target.style.backgroundColor = pickedColor;

}

}
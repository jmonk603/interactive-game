var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 70;

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    background(220);
}

function draw() {

}

//function mousePressed(){
    //if (mouseButton == 'right'){
        //fill(255, 0, 0);
        //rectMode(CENTER)
        //rect(mouseX, mouseY, 70, 70);
    //}
    //if (mouseButton == 'left'){
        //fill(0,255,0);
        //rectMode(CENTER)
        //rect(mouseX, mouseY, 70, 70);
    //}
    //if (mouseButton == 'center'){
        //fill(0,0,255);
        //rectMode(CENTER)
        //rect(mouseX, mouseY, 70, 70);
    //}
//}

function keyPressed(){
    if(keyCode == ENTER){
        background(220);
    }
    if (key === ' '){
        c1 = document.getElementById("myInput1").value;
        c2 = document.getElementById("myInput2").value;
        c3 = document.getElementById("myInput3").value;
        c4 = document.getElementById("myInput4").value;
    }
    if (key === 'a'){
        fill(c1, c2, c3);
        noStroke()
        ellipse(mouseX, mouseY, c4);
    }
    if (key === 's'){
        fill(c1, c2, c3);
        rectMode(CENTER)
        noStroke()
        rect(mouseX, mouseY, c4, c4);
    }
    //if (key === 'd'){
        //fill(c1, c2, c3);
        //noStroke()
        //triangle(mouseX, mouseY, mouseX+50, mouseY, mouseX+20, mouseY-50);
    //}
}
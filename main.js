function preload(){
}
function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(110, 250);
   
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw(){
image(video,50 , 50, 402, 410);
tint(tint_color);
fill(0,255,0)
stroke(0,255,0)
rect(16,20,20, 470);

fill(255,0,0)
stroke(255,0,0)
circle(27,26,50);

fill(0,255,0)
stroke(0,255,0)
rect(52,14,399, 20);

fill(255,0,0)
stroke(255,0,0)
circle(475,27,50);

fill(0,255,0)
stroke(0,255,0)
rect(465,52,20, 438);

fill(0,128,128)
stroke(0,128,128)
ellipse(476, 265, 45, 45);

fill(0,255,0)
stroke(0,255,0)
rect(30,470,440, 20);

fill(0,128,128)
stroke(0,128,128)
ellipse(25, 266, 45, 45);
}
function take_snapshot(){
  save('Dayam.png');
}
function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}
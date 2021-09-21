
song="";

function preload(){
    song=loadSound("music_thinkstockphotos.jpg");
}

function setup(){
canvas=createCanvas(400,400);
canvas.center();

video=createCapture(VIDEO);
video.hide();
}

function play(){
    song.play();
}

function draw(){
    image(video,0,0,400,400);
}
Trampoline_song="";
Dandelions_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Trampoline_song = loadSound("trampoline.mp3");
    Dandelions_song = loadSound("Dandelions.mp3");
}

function draw(){
    image(video,0,0,600,530);
}

music1 = "music.mp3";
music2 = "music2.mp3";


function preload(){
    loadSound(music1);
    loadSound(music2);
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.position(575,250);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}
function draw(){
    image(video, 0, 0, 300, 300);
}
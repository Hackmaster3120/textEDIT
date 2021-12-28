RwX=0;
LwX=0;
size=0;
function setup() {
    canvas=createCanvas(600,400)
    video = createCapture(VIDEO);
    canvas.position(670,130);
    video.size(600,400);
    poseNAT=ml5.poseNet(video,modelLoaded);
    poseNAT.on('pose',gotResults);
}
function draw() {
    background("white")
    textSize(size)
    fill("lightgreen")
    text("Notice",100,100)
}
function modelLoaded() {
    console.log("dots on your face have been loaded");
}
function gotResults(results) {
    if(results.length>0){
        console.log(results)
        RwX=results[0].pose.rightWrist.x;
        LwX=results[0].pose.leftWrist.x;
        size=(Math.ceil(RwX-LwX))+400;
        document.getElementById("WHspan").innerHTML=size+"px";
    }
}
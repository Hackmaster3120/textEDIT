noseX=0;
noseY=0;
function setup() {
    canvas=createCanvas(600,400)
    canvas.position(670,130);
}
function draw() {
    rect(noseX,noseY,10,10)
}
function gotResults(results) {
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}
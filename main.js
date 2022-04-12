noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;


function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(400,150)

    canvas=createCanvas(550,500);
    canvas.position(1050,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#e3c2fc');

    document.getElementById("square_side").innerHTML="Width and Height of square will be:"+difference+"px";
    fill('#9cffde');
    stroke('#9cd9ff');
    square(noseX, noseY, difference);
}
function modelLoaded(){
    console.log('PoseNet has been Initialized!!');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("NoseX="+noseX+"NoseY="+noseY);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+ "difference="+difference);
    }
}
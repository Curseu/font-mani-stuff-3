nosex=0;
nosey=0;
leftwristx=0;
rightwrist=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,550);
    canvas=createCanvas(500,550);
canvas.position(520,150);
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes)
}
function draw(){
    background("limegreen");
fill("blue");
stroke("blue");
text("happyyburger657",nosex,nosey);
textSize(difference);

document.getElementById("sqaure_sides").innerHTML="The fontsize will be "+difference+"px";
}
function modelloaded(){
    console.log("poseNet is active")
}
function gotposes(results){
if(results.length>0){
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log("nosex= "+nosex+" nosey= "+nosey);

leftwristx=results[0].pose.leftWrist.x;
rightwrist=results[0].pose.rightWrist.x;
console.log("leftwristx= "+leftwristx+" rightwristx= "+rightwrist);

difference=floor(leftwristx-rightwrist);
console.log("difference= "+difference);
}


}
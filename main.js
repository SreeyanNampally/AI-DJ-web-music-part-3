music1 = "";
music2 = "";

lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide()
    pose = ml5.poseNet(video)
    posenet.on("pose", gotPoses)
}

function draw(){
    image(video, 0, 0, 500, 500)
}

function preload(){
    music1 = loadSound("ringtone.mp3")
    music2 = loadSound("ring2.mp3")
}

function modelloaded(){
    console.log("model loaded")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        lwx = results[0].pose.leftWrist.x;
        rwx = results[0].pose.rightWrist.x;
        lwy = results[0].pose.leftWrist.y;
        rwy = results[0].pose.rightWrist.y;
    }
}
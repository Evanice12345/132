img = "";
status = "";

function preload(){
img = loadImage("flower.jpeg");

}

function setup(){
canvas = createCanvas(580,470);
canvas.center();
objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function modelLoaded(){
console.log("the model is loaded! :D")
objectDetector.detect(img, gotResult);

}

function gotResult(error, results){
if(error){
    console.log("sorry! There is an error in the system. :(")

}
else{
    console.log(results);
    console.log("It's working!! :D");
}

}

function draw(){
image(img, 0, 0, 580, 530);
fill("#F97068");
text("Flower",65,95);
noFill();
stroke("#F97068");
rect(65,100,350,400);

}
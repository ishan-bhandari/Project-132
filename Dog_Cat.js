img = "";
Status = " ";
L = " ";
X = "0";
Y = "0";
H = "0";
W = "0";
LX = "0";
LY = "0";
L1 = " ";
X1 = "0";
Y1 = "0";
H1 = "0";
W1 = "0";
LX1 = "0";
LY1 = "0";
function preload(){
    img = loadImage("Dog_Cat.jpg");
}
function setup() {
    Canvas = createCanvas(640, 420);
    Canvas.position(350, 180);

    Coco = ml5.objectDetector('cocossd', modelloaded);
}
function draw() {
    image(img, 0, 0, 640, 420);
    stroke('BLue');
    noFill();
    rect(X, Y, H, W);
    text(L, LX, LY);
    stroke('Yellow');
    noFill();
    rect(X1, Y1, H1, W1);
    text(L1, LX1, LY1);
}
function Home() {
    window.location = "index.html";
}
function modelloaded() {
    console.log("Coco SSD Is Loaded Successfully!!");
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    Status = true;
    Coco.detect(img, gotresults);
}
function gotresults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        L = results[0].label;
        X = results[0].x;
        Y = results[0].y;
        H = results[0].height;
        W = results[0].width;
        LX = X + 10;
        LY = Y + 10;
        L1 = results[1].label;
        X1 = results[1].x;
        Y1 = results[1].y;
        H1 = results[1].height;
        W1 = results[1].width;
        LX1 = X1 + 10;
        LY1 = Y1 + 10;
    }
}
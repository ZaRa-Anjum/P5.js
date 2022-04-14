function preload()
{

}

function setup() 
{
    canvas = createCanvas(640, 480);
    canvas.position(450, 200);
    video = createCapture(VIDEO);
    video.size = (300, 300);
    video.hide();
    
}
function draw()
{
    image(video, 170, 100, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(610, 30, 50);
    circle(30, 30, 50);
    circle(30, 450, 50);
    circle(610, 450, 50);
    fill(26, 237, 7)
    stroke(26, 237, 7)
    rect(15, 57, 30, 370);
    rect(55, 15, 530, 30);
    rect(600, 57, 30, 370);
    rect(55, 435, 530, 30);
    
}
function take_snapshot()
{
    save('My_Image.png');
}

function preload(){
    img= loadImage('https://th.bing.com/th/id/OIP.IumWkT1hfQ3DbUZJ47fYiQHaFj?pid=ImgDet&rs=1')
}

function setup(){
    canvas= createCanvas(640,480);
    canvas.position(110, 250);
}


function draw(){
    image(img, 40,40,390,390)

    
    rect(30,30,400,30);
    rect(20,30,30,400);
    rect(400,30,30,400);
    rect(30,400,400,30);
    circle(35,43,40);
    circle(415,35,40);
    circle(415,415,40);
    circle(35,415,40);

} 

function take_snapshot(){
    save('img.png')
}
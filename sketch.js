// let Nipper1, Nipper2;
let nipperSystem =[]; 

function setup(){
    createCanvas(400,400);
    background(161,90,0);
    // Nipper1 = new Nipper(200,200);
    // Nipper2 = new Nipper(random(0,400),random(0,400));

    for(x=0; x<27; x++){
        let rx=random(15, width-15);
        let ry=random(15,height-15);
        let rr=random(10,50);
        nipperSystem[x] = new Nipper (rx,ry,rx,ry,rx,ry);
    }
}

function draw(){
    
    // Nipper1.move();
    // Nipper1.show();
    // Nipper1.checkEdges();
    // Nipper2.move();
    // Nipper2.show();
    // Nipper2.checkEdges();
    for (x=0; x<nipperSystem.length; x++){
        nipperSystem[x].move();
        nipperSystem[x].show();
        // nipperSystem[x].checkEdges();
        nipperSystem[x].step();

    }
}


class Nipper{

    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    move(){
        this.x=this.x+random(-4,4);
        this.y=this.y+random(-4,4);
    }

    step(){
        strokeWeight(2);
        stroke(0);
        point(this.x,this.y);
        // this.x+=random(-1,1);
        // this.y+=random(-1,1);
    }

    show(){
            fill(100,200,3);
            noStroke();
            triangle(this.x-13,this.y,this.x + 20, this.y + 20, this.x, this.y + 20);
    }
    checkEdges(){
        if (this.x< 15)
            {this.x=15;} 
        else if
        (this.x > width - 15){
           this.x = width - 15; 
       
        if (this.y<15)
        {this.y=15;} 
        else if
        (this.y > height - 15){
            this.y = height - 15; 
        }

}


}

}
//amount of balls per array
var N = 1000;

//array names
var B1;
var B2;

var MaxDist;

function setup() {
  createCanvas( windowWidth , windowHeight );
  background( 0 , 0 , 0 );
  
  //creating the arrays (array is a table of variables for a for-loop)
  B1 = new Array(N);
  B2 = new Array(N);
  
  //create for-loop for the arrays)
  for ( n = 0 ; n < N ; n++ ){
    B1[n] = new Ball();
    B2[n] = new Ball();
  }
  
  MaxDist= sqrt( width * width + height* height);
  
  colorMode(HSB);
  
}

function draw() {
  //for-loop to create the arrays
  for ( n = 0 ; n < N ; n++ ){
    B1[n].evolveDraw();
    B2[n].evolveDraw();
    
    var Dist = B1[n].pos.dist(B2[n].pos);
    //C1 = color( Dist / MaxDist * 100  , 100 , 100 , .02);
    //C2 = color( 90 + Dist / MaxDist * 180  , 100 , 100 , .02);
    //C3 = color( 230 + Dist / MaxDist * 150  , 100 , 100 , .02);
    C4 = color( Dist/MaxDist * 360 , 100 , 100 , .01 );
    
    stroke( C4 );
    line( B1[n].pos.x , B1[n].pos.y , B2[n].pos.x , B2[n].pos.y );
  }
}

//new function-anything that is classified as ball will follow these instructions
var Ball = function(){
  //create vector for position of the bal
  this.pos = createVector( random( 0 , width ) , random( 0 , height ) );
  
  //create vector for velocity
    //direction (randomized)
  this.v = p5.Vector.random2D();
    //speed
  this.v.mult( random( 1 , 5 ) );
  
  //new function-anything told to evolveDraw will follow these instructions
  this.evolveDraw =function() {
    //adds velocity to position
    this.pos.add( this.v );
  
  //set boundries for balls)
    if ( this.pos.x >= width || this.pos.x <= 0 ){
      this.v.x *=-1;
    }
    if ( this.pos.y >= height || this.pos.y <= 0 ){
      this.v.y *=-1;
    }
    
  };
  
};

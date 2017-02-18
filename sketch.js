//amount of balls per array
var N;

//array names
var B1;
var B2;

var MaxDist;

var center;

var ext;

var area;

function setup() {
  createCanvas( windowWidth , windowHeight );
  background( 0 , 0 , 0 );
  
  ext = width+height/2;
  
  area = width * height;
  
  N = floor( area / 12000 );
  
  console.log( N );
  
  //creating the arrays (array is a table of variables for a for-loop)
  B1 = new Array(N);
  B2 = new Array(N);
  
  center= createVector( width*0.5 , height*0.5 );
  
  //create for-loop for the arrays)
  for ( n = 0 ; n < N ; n++ ){
    B1[n] = new Ball();
    B2[n] = new Ball();
  }
  
  MaxDist= sqrt( width * width + height* height);
  
  colorMode(HSB);
  
}

function draw() {
//  background( 0 , 0 , 0 , 0.01 );
  
  //for-loop to create the arrays
  for ( n = 0 ; n < N ; n++ ){
    B1[n].evolveDraw();
    B2[n].evolveDraw();
    
    var Dist = center.dist(B1[n].pos);
    
    
    var C1 = color( Dist / MaxDist * 750 % 360 , 100 , 100 , 0.02);
    
    stroke( C1 );
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
  this.v.mult( random( 1 , 3 ) );
  
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
function keyTyped() {
 if( key === 's' ) {
   saveCanvas( 'saved web' , 'jpg' );
   console.log("saved");
 }
}

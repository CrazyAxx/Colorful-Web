//amount of balls per array
var N;

//array names
var B1;


function setup() {
  createCanvas( windowWidth , windowHeight );
  background( 0 , 0 , 0 );
  
  
  //create for-loop for the arrays)
  B1 = new Ball();
  
  colorMode(HSB);
  
}

function draw() {
  B1.evolveDraw();
  B1.draw2();
}

var Ball = function(){
    
    var area = width * width;
    
     N = floor( area / 20000 );
     console.log( N );
  this.pos1 = new Array(N);
  this.pos2 = new Array(N);
  
  this.v1 = new Array(N);
  this.v2 = new Array(N);
  
  for( n = 0 ; n < N ; n++ ){
    this.pos1[n] = createVector( random( 0 , width ) , random( 0 , height));
    this.pos2[n] = createVector( random( 0 , width) , random( 0 , height));
    this.v1[n] = p5.Vector.random2D();
    this.v2[n] = p5.Vector.random2D();
    this.v1[n].mult( random( 1 , 3 ) );
    this.v2[n].mult( random( 1 , 3 ) );
  
  }
  
  
  //new function-anything told to evolveDraw will follow these instructions
  this.draw2 = function(){
    for( n= 0 ; n < N ; n++ ){
      
      var center= createVector( width*0.5 , height*0.5 );
      var dist1 = center.dist(this.pos1[n]);
      
      var MaxDist= sqrt( (width * width) + (height * height) );
      
      var C1 = color( dist1 / MaxDist * 750 % 360 , 100 , 100 , 0.01);
      //var C1 =color( 290 , 100 , 100 , .02 )
      
      stroke( C1 );
      line( this.pos1[n].x , this.pos1[n].y , this.pos2[n].x , this.pos2[n].y );
    }
  };
  
  //new function-anything told to evolveDraw will follow these instructions
    
  this.evolveDraw = function(){
    for( n= 0 ; n < N ; n++ ){
      //adds velocity to position
        this.pos1[n].add( this.v1[n] );
        this.pos2[n].add( this.v2[n] );
    
    //set boundries for balls)
        if ( this.pos1[n].x >= width || this.pos1[n].x <= 0 ){
          this.v1[n].x *=-1;
        }
        if ( this.pos1[n].y >= width || this.pos1[n].y <= 0 ){
          this.v1[n].y *=-1;
        }
        
        if ( this.pos2[n].x >= width || this.pos2[n].x <= 0 ){
          this.v2[n].x *=-1;
        }
        if ( this.pos2[n].y >= width || this.pos2[n].y <= 0 ){
          this.v2[n].y *=-1;
        }
    }
  };
  
};
function keyTyped() {
 if( key === 's' ) {
   saveCanvas( 'Web' , 'jpg' );
   console.log("saved");
 }
 if( key === 'n' ){
   background( 0 , 0 , 0 );
 }
}

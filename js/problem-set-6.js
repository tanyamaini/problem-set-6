/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {

  var canvas = document.getElementById("canvas1");
  var text = canvas.getContext("2d");
  text.font = "48px Sans-serif";
  text.strokeText("Hello, World",10,50);

}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let height;
  let width;
  let x;
  let y;
  var canvas = document.getElementById("canvas2");
  do{
    height = Number(prompt("Enter a height greater than 1."));
    if(height==0){
      return;
    }
  } while (height < 1 || Number.isNaN(height))
  do{
    width = Number(prompt("Enter a width greater than 1."));
    if(width==0){
      return;
    }
  } while (width < 5 || Number.isNaN(width))
  do{
    x = Number(prompt("Enter a x coordiante greater than 5."));
    if(x==0){
      return;
    }
  } while(x<5 || Number.isNaN(x))
  do{
    y = Number(prompt("Enter a y coordiante greater than 5."));
    if(y==0){
      return;
    }
  } while(y<5 || isNaN(y))
  if(height > canvas2.height && width > canvas2.width){
    alert("Sorry. The height and width you input are too large.");
  }
  else if(height > canvas2.height){
    alert("Sorry. The height you input is too large.");
  }
  else if(width > canvas2.width){
    alert("Sorry. The width you input is too large.");
  }
  else if(x > 510){
    alert("Sorry. The x coordiante you input is too large.");
  }
  else if(y > 411){
    alert("Sorry. The y cordinate you input is too large.");
  }
  else if(height>canvas2.height || width>canvas2.width || x>510 || y>411){
    alert("Sorry. The rectangle will not fit on the canvas.");
  }

  if (width <= canvas2.width && height<=canvas2.height && x<=510 && y<=411){
    var rectangle = canvas.getContext("2d");
    rectangle.clearRect(0, 0, canvas2.width, canvas2.height);
    rectangle.strokeRect(x, y, width, height);
  }
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  let color;
  var canvas=document.getElementById("canvas3");
  var rectangle=canvas.getContext("2d");
  color = prompt("What color do you want the rectangle to be?");
  if(color==null){
    return;
  }
  if(color==="red" || color==="blue" || color==="green" || color==="black" || color==="orange" || color==="purple" || color==="yellow"){
    rectangle.fillStyle= color;
    rectangle.fillRect(10,10,50,50);
  }
  else{
    alert(`${color} is not a suppored color.`);
  }
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {

  var canvas=document.getElementById("canvas4");
  var triangle=canvas.getContext("2d");
  let side= [-1, -1, -1];
  do{
    side[0]= Number(prompt("Enter the length for side 1 of the right triangle."));
    if(side[0]==0){
      return;
    }
  } while(isNaN(side[0]) || side[0] <1)
  do{
    side[1]= Number(prompt("Enter the length for side 2 of the right triangle."));
    if(side[1]==0){
      return;
    }
  } while(isNaN(side[1]) || side[1] <1)
  do{
    side[2]= Number(prompt("Enter the length for side 3 of the right triangle."));
    if(side[2]==0){
      return;
    }
  } while(isNaN(side[2]) || side[2] <1)
  console.log(side[0]);
  console.log(side[1]);
  console.log(side[2]);
  side.sort(function(a, b){return a-b});
if((side[0]*side[0])+ (side[1]*side[1])== (side[2]*side[2])){
  triangle.clearRect(0, 0, canvas4.width, canvas4.height);
  triangle.beginPath();
  triangle.moveTo(10, 10);
  triangle.lineTo(10, 10+side[0]);
  triangle.lineTo(10+side[1], side[0]+10);
  triangle.lineTo(10,10);
  triangle.stroke();
}
else{
  alert("Sorry. The dimensions you inputted do not make a right triangle.");
}
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let canvas = document.getElementById("canvas5");
  let smile = canvas.getContext("2d");
  smile.clearRect(0, 0, canvas5.width, canvas5.height);
  let radius;

  while(true){
    radius = Number(prompt("Enter the radius you want the smiley face."));
    if(radius>0 && radius<=(512/2)){
      break;
    }
    else{
      alert("Sorry, the smiley face cannot fit on the canvas.");
        return;
    }
  }
  smile.beginPath();
  smile.arc(radius + 10, radius+10, radius, 0, 2 * Math.PI);
  smile.stroke();

  smile.beginPath();
  smile.arc(radius + 10, radius+10, radius * 0.7, 0, 1 * Math.PI);
  smile.stroke();

  smile.beginPath();
  smile.arc(radius+10 - radius/3, radius+10, radius * 0.10, 0, 2 * Math.PI);
  smile.stroke();

  smile.beginPath();
  smile.arc(radius+10 + radius/3, radius+10, radius * 0.10, 0, 2 * Math.PI);
  smile.stroke();

}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar(){
    let outerRadius;
    let innerRadius;
    outerRadius=Number(prompt("Enter the outer radius."));
    if(outerRadius==0){
      return;
    }
    innerRadius=Number(prompt("Enter the inner radius"));
    if(innerRadius==0){
      return;
    }
    if(innerRadius>outerRadius){
      alert("Sorry. The outer radius must be larger than the inner radius.");
        return;
    }
    if(Number.isNaN(outerRadius)|| Number.isNaN(innerRadius)){
      alert("Sorry. The inputs must be numbers.");
      return;
    }
    if(innerRadius<1 || outerRadius<1){
      alert("Sorry. Your inputs must be at least 1.");
      return;
    }
    if(Number.isNaN(outerRadius) == false && outerRadius > 0 && Number.isNaN(innerRadius)== false && innerRadius > 0 && innerRadius < outerRadius){
          let canvas = document.getElementById("canvas6");
          let star = canvas.getContext("2d");
          star.clearRect(0, 0, canvas6.width, canvas6.height);
          star.beginPath();
          let innerPentSide = 2 * innerRadius * Math.sin(0.2 * Math.PI);
          let outerPentSide = 2 * outerRadius * Math.sin(0.2 * Math.PI);
          star.moveTo(125, 125 - outerRadius);
          star.lineTo(125+ innerRadius* Math.cos(0.3* Math.PI), 125- innerRadius* Math.sin(0.3* Math.PI));
          star.lineTo(125+ outerRadius* Math.sin(0.4* Math.PI), 125- outerRadius* Math.cos(0.4* Math.PI));
          star.lineTo(125+ innerRadius* Math.cos(0.1* Math.PI), 125+ innerRadius* Math.sin(0.1* Math.PI));
          star.lineTo(125+ outerRadius* Math.sin(0.2* Math.PI), 125+ outerRadius* Math.cos(0.2* Math.PI));
          star.lineTo(125, 125+innerRadius);
          star.lineTo(125- outerRadius* Math.sin(0.2* Math.PI), 125+ outerRadius* Math.cos(0.2* Math.PI));
          star.lineTo(125- innerRadius* Math.cos(0.1* Math.PI), 125+ innerRadius* Math.sin(0.1* Math.PI));
          star.lineTo(125- outerRadius* Math.sin(0.4* Math.PI), 125- outerRadius* Math.cos(0.4* Math.PI));
          star.lineTo(125- innerRadius* Math.cos(0.3* Math.PI), 125- innerRadius* Math.sin(0.3* Math.PI));
          star.lineTo(125, 125- outerRadius);
          star.stroke();
        }
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let canvas = document.getElementById("canvas7");
  let stopSign = canvas.getContext("2d");
  stopSign.clearRect(0, 0, canvas7.width, canvas7.height);
  let length = 80;
  let sideways = length * Math.sqrt(1/2);
  let x = 10;
  let y = 10;
  stopSign.beginPath();
  stopSign.moveTo(x, y=y+ 60);
  stopSign.lineTo(x, y=y+length);
  stopSign.lineTo(x= x+ sideways, y=y+sideways);
  stopSign.lineTo(x= x+ length, y);
  stopSign.lineTo(x= x+ sideways, y=y-sideways);
  stopSign.lineTo(x, y= y- length);
  stopSign.lineTo(x=x-sideways, y=y-sideways);
  stopSign.lineTo(x=x- length, y);
  stopSign.lineTo(x=x- sideways, y=y+ sideways);
  stopSign.fillStyle = 'red';
  stopSign.fill();
  stopSign.closePath();
  stopSign.fillStyle = "white";
  stopSign.font = "65px Sans-Serif";
  stopSign.fillText("STOP", 18, 130);
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  var canvas = document.getElementById('canvas8');
     let pyramid = canvas.getContext('2d');
     pyramid.clearRect(0, 0, canvas.width, canvas.height);
     let length=Number(prompt("Enter the length of pyramid you would like."));
    if (length==0){
      return;
    }
     if(isNaN(length)){
       alert("Sorry. Your input must be a number.");
       return;
     }
     if(length > 100){
       alert("Sorry. Your pyramid will not fit on the canvas.");
       return;
     }
     let x = 10;
     let y = canvas.height-10;
     let i = 0;
     line = 1;
     while(i < 5 && length <=100){
       for(let j = 0+line;j <= 5; j++){
         pyramid.strokeRect(x, y - length, length, length);
         x = x + length;
       }
       x = 10 + (length / 2) * line;
       y -= length;
       line++;
       i++;
     }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let houseColor;
  let doorColor;
  var canvas=document.getElementById("canvas9");
  var house=canvas.getContext("2d");
  house.clearRect(0, 0, canvas.width, canvas.height);
  houseColor = prompt("What color do you want the house to be?");
  if(houseColor==null){
    return;
  }
  doorColor= prompt("What color do you want the door to be?");
  if(doorColor==null){
    return;
  }
  if(houseColor==doorColor){
    alert("Sorry. The door and house cannot be the same colors.");
    return;
  }
  else if(houseColor==="brown" ||houseColor==="red" || houseColor==="blue" || houseColor==="green" || houseColor==="orange" || houseColor==="purple" || houseColor==="yellow" || doorColor==="brown" ||doorColor==="red" || doorColor==="blue" || doorColor==="green" || doorColor==="orange" || doorColor==="purple" || doorColor==="yellow"){
    // HOUSE
    house.fillStyle= houseColor;
    house.strokeStyle= 'black';
    house.beginPath();
    house.strokeRect(150,canvas.height-460,700,450);
    house.fillRect(150,canvas.height-460,700,450);
    house.closePath();
    // ROOF
    house.fillStyle='gray';
    house.strokeStyle= 'black';
    house.beginPath();
    house.moveTo(150, 300);
    house.lineTo(500, 10);
    house.lineTo(850, 300);
    house.closePath();
    house.stroke();
    house.fill();
    // DOOR
    house.fillStyle= doorColor;
    house.strokeStyle= 'black';
    house.beginPath();
    house.strokeRect(450, canvas.height-160, 100, 150);
    house.fillRect(450, canvas.height-160, 100, 150);
    house.closePath();
    // DOOR HANDLE
    house.strokeStyle= 'black';
    house.fillStyle='gold';
    house.beginPath();
    house.arc(535,670,7,0,Math.PI*2);
    house.closePath();
    house.stroke();
    house.fill();
    // WINDOWS
    house.fillStyle= 'lightBlue';
    house.strokeStyle= 'black';
    house.beginPath();
    house.strokeRect(250, 375, 80, 80);
    house.fillRect(250, 375, 80, 80);
    house.closePath();
    house.fillStyle= 'lightBlue';
    house.strokeStyle='black';
    house.beginPath();
    house.strokeRect(670, 375, 80, 80);
    house.fillRect(670, 375, 80, 80);
    house.closePath();
    house.fillStyle= 'lightBlue';
    house.strokeStyle= 'black';
    house.beginPath();
    house.strokeRect(250, 375, 80, 80);
    house.fillRect(250, 600, 80, 80);
    house.closePath();
    house.fillStyle= 'lightBlue';
    house.strokeStyle= 'black';
    house.beginPath();
    house.strokeRect(250, 375, 80, 80);
    house.fillRect(670, 600, 80, 80);
    house.closePath();
  }
  else {
    alert("One of the colors you inputted is not supported.");
  }
}

function draw() {
	 let canvas = document.getElementById('canva');
	 let ctx = canvas.getContext('2d');
	 let pi = Math.PI;
  ctx.lineWidth = 5; // толщина линии
  // x,y,radius,startAngle,endAngle,anticlockwise
   ctx.arc(200,200,70,0, 2*Math.PI,true);
   ctx.stroke();  
   ctx.fillStyle = "yellow"; //цвет заливки
   ctx.fill();

ctx.beginPath();
   ctx.lineWidth = 5;
   ctx.arc(200,80,50,0, 2*Math.PI,true); 
   ctx.stroke();  
   ctx.fillStyle = "pink"; //цвет заливки
   ctx.fill();

   ctx.beginPath();
   ctx.lineWidth = 5; 
   ctx.arc(320,200,50,0, 2*Math.PI,true);
   ctx.stroke();
   ctx.fillStyle = "pink"; 
   ctx.fill();

   ctx.beginPath();
   ctx.lineWidth = 5; 
   ctx.arc(80,200,50,0, 2*Math.PI,true);
   ctx.stroke();    
   ctx.fillStyle = "pink"; 
   ctx.fill();

   ctx.beginPath();
   ctx.lineWidth = 5; 
   ctx.arc(115,115,50,0, 2*Math.PI,true);
   ctx.stroke();  
   ctx.fillStyle = "pink"; 
   ctx.fill();

   ctx.beginPath();
   ctx.lineWidth = 5; 
   ctx.arc(285,115,50,0, 2*Math.PI,true);
   ctx.stroke();
   ctx.fillStyle = "pink"; 
   ctx.fill();

    ctx.beginPath();
   ctx.lineWidth = 5; 
   ctx.arc(285,285,50,0, 2*Math.PI,true);
   ctx.stroke();
   ctx.fillStyle = "pink"; 
   ctx.fill();

   ctx.beginPath();
   ctx.lineWidth = 5; 
   ctx.arc(115,285,50,0, 2*Math.PI,true);
   ctx.stroke();
   ctx.fillStyle = "pink"; 
   ctx.fill();

   ctx.beginPath();
   ctx.lineWidth = 5; 
	ctx.moveTo(200,270);
	ctx.lineTo(200,600);
   ctx.stroke();

   ctx.beginPath();
ctx.lineWidth = 7; 
ctx.strokeStyle = "green"; 
ctx.arc(200, 450, 75, 0, pi/2, false );
ctx.stroke();
 ctx.fillStyle = "green"; 
   ctx.fill();

   ctx.beginPath();
ctx.lineWidth = 7; 
ctx.strokeStyle = "green"; 
ctx.lineCap = "round";
ctx.arc(275, 525, 75, 3*pi/2, pi, true );
ctx.stroke();
  ctx.fillStyle = "green"; 
   ctx.fill();

    ctx.beginPath();
ctx.lineWidth = 7; 
ctx.strokeStyle = "green"; 
ctx.lineCap = "round";
ctx.arc(200, 350, 75, pi, pi/2, true );
ctx.stroke();
 ctx.fillStyle = "green"; 
   ctx.fill();

   ctx.beginPath();
ctx.lineWidth = 7; 
ctx.strokeStyle = "green"; 
ctx.arc(125, 425, 75, 3*pi/2, 2*pi, false );
ctx.stroke();
 ctx.fillStyle = "green"; 
   ctx.fill();
	}

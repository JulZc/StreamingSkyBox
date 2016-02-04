function degToRad(degree) {
	var factor = Math.PI/180;
	return degree*factor;
}



//right
function paintPosX(){
	var img = document.getElementById("myimage");
	var canvas = document.getElementById('posx');
	var ctx = canvas.getContext('2d');

	canvas.width = 540;
	canvas.height = 540;
	canvas.style.backgroundColor = "black";
	
    ctx.drawImage(img, 1080, 0, 540, 540, 0, 0, 540, 540); 
	return canvas.toDataURL("image/png", 1.0);
};
//left
function paintNegX(){
	var img = document.getElementById("myimage");	
	var canvas = document.getElementById('negx');
	var ctx = canvas.getContext('2d');
	canvas.width = 540;
	canvas.height = 540;
	canvas.style.backgroundColor = "black";
	
	ctx.scale( 2, 2 );
	ctx.drawImage( img, 0, 0, (img.width/2), (img.height/2));
	
	return canvas.toDataURL("image/png", 1.0);
}



//front
function paintPosZ(){
	var img = document.getElementById("myimage");
	var canvas = document.getElementById('posz');
	var ctx = canvas.getContext('2d');

	canvas.width = 540;
	canvas.height = 540;
	canvas.style.backgroundColor = "black";
	
    ctx.drawImage(img, 540, 0, 540, 540, 0, 0, 540, 540); 
	return canvas.toDataURL("image/png", 1.0);
};

//back
function paintNegZ(){
	var img = document.getElementById("myimage");
	var canvas = document.getElementById('negz');
	var ctx = canvas.getContext('2d');

	canvas.width = 540;
	canvas.height = 540;
	canvas.style.backgroundColor = "black";
	
    ctx.drawImage(img, 0, 540, 540, 540, 0, 0, 540, 540); 
	return canvas.toDataURL("image/png", 1.0);
};



//top
function paintPosY(){
	var img = document.getElementById("myimage");
	var canvas = document.getElementById('posy');
	var ctx = canvas.getContext('2d');

	canvas.width = 540;
	canvas.height = 540;
	canvas.style.backgroundColor = "black";
	
	ctx.translate(270,270);
	ctx.rotate(degToRad(90));
	ctx.translate(-270,-270);	
	
    ctx.drawImage(img, 540, 540, 540, 540, 0, 0, 540, 540); 

	return canvas.toDataURL("image/png", 1.0);
};
//bottom
function paintNegY(){
	var img = document.getElementById("myimage");
	var canvas = document.getElementById('negy');
	var ctx = canvas.getContext('2d');

	canvas.width = 540;
	canvas.height = 540;
	canvas.style.backgroundColor = "black";

	ctx.translate(270,270);
	ctx.rotate(degToRad(270));
	ctx.translate(-270,-270);	
		
    ctx.drawImage(img, 1080, 540, 540, 540, 0, 0, 540, 540); 
	return canvas.toDataURL("image/png", 1.0);
};
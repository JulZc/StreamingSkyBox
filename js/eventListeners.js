function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseDown( event ) {

	event.preventDefault();

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.addEventListener( 'mouseup', onDocumentMouseUp, false );

}

function onDocumentMouseMove( event ) {

	var movementX = event.movementX || event.mozMovementX || event.movementY || 0;
	var movementY = event.movementY || event.mozMovementY || event.movementY || 0;

	lon -= movementX * 0.1;
	lat += movementY * 0.1;

}

function onDocumentMouseUp( event ) {

	document.removeEventListener( 'mousemove', onDocumentMouseMove );
	document.removeEventListener( 'mouseup', onDocumentMouseUp );

}

function onDocumentMouseWheel( event ) {

	camera.fov -= event.wheelDeltaY * 0.05;
	camera.updateProjectionMatrix();

}

function onDocumentTouchStart( event ) {

	event.preventDefault();

	var touch = event.touches[ 0 ];

	touchX = touch.screenX;
	touchY = touch.screenY;

}

function onDocumentTouchMove( event ) {

	event.preventDefault();

	var touch = event.touches[ 0 ];

	lon -= ( touch.screenX - touchX ) * 0.1;
	lat += ( touch.screenY - touchY ) * 0.1;

	touchX = touch.screenX;
	touchY = touch.screenY;

}

window.onload = function(){
	var size = window.innerWidth-20;
	var sizeUnits = "px";
	var newsize = size + sizeUnits;
	document.getElementById("loading_screen").style.width = newsize;
	
	var size = window.innerHeight;
	var sizeUnits = "px";
	var newsize = size + sizeUnits-20;				
	document.getElementById("loading_screen").style.height = newsize;
};


function animate() {

	requestAnimationFrame( animate );

	lon +=  0.1;
	lat = Math.max( - 85, Math.min( 85, lat ) );
	phi = THREE.Math.degToRad( 90 - lat );
	theta = THREE.Math.degToRad( lon );

	target.x = Math.sin( phi ) * Math.cos( theta );
	target.y = Math.cos( phi );
	target.z = Math.sin( phi ) * Math.sin( theta );

	camera.lookAt( target );

	renderer.render( scene, camera );

}
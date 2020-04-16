
//menu und erkläerung
var counter= 5
function showerklaerung() {
	var eDiv=document.getElementById("erklaerung");
	if (eDiv.style.display === "none") {

	  eDiv.style.display = "block";
	} else {
	
	  eDiv.style.display = "none";
	}
}

function showmenu() {
	var eDiv=document.getElementById("container");
	if (eDiv.style.display === "none") {
		eDiv.style.display = "block";
	} else {
	  	eDiv.style.display = "none";
	}
}
	
	

//resize window
window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjektMatrix();
})


//Scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 10;


//light
var light = new THREE.PointLight(0xffffff, 1);
light.position.set(-10, 0, 25);
scene.add(light);
console.log('test3')


//correct color
var pickedColor=0;


//cubes
var AnzahlCubes = 20
var cubeArray = [];
var group = new THREE.Group(); 
var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
var material = new THREE.MeshLambertMaterial({color: Math.random()*0xffffff}); 

var cube = new THREE.Mesh(geometry, material);
var sovieleCubes=0



	//create cubes
function createcube() {
	
	scene.add(cube);
	//cube.position.set(2, 2, 2);
var r= Math.round(Math.random()*20) //for Position
AnzahlCubes+=10
	for (var i = sovieleCubes; i < AnzahlCubes; i++) {

		var cube = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color: Math.random()*0xffffff}));
		cube.position.x = ((Math.random() - 0.5) * 10); 
		cube.position.y = ((Math.random() - 0.5) * 10);
		cube.position.z = ((Math.random() - 0.5) * 10);
		cubeArray[i] = cube;
		group.add(cube)

		//picking color
		if (i==r) {
		pickedcolor1=cube.material.color.getHex()
		pickedcolor= ('000000'+pickedcolor1.toString(16)).slice(-6);
		console.log(pickedcolor);

		document.getElementById("boxfive").style.background='#'+pickedcolor;
		}
	}
	scene.add(group) 

	sovieleCubes+=10
 
}



//mouseclick on cube
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseClick(event) {
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	raycaster.setFromCamera(mouse, camera);

	var intersect = raycaster.intersectObjects(scene.children, true)
	for (var i = 0; i < intersect.length; i++) {
		var size=2
		this.tl = new TimelineMax().delay(.3)
		this.tl.to(intersect[i].object.scale, 0.5, { x: size, ease: Elastic.easeInOut })
		this.tl.to(intersect[i].object.scale, 0.5, { y: size, ease: Expo.easeInOut })
		this.tl.to(intersect[i].object.scale, 0.5, { z: size++, ease: Elastic.easeOut })
		this.tl.to(intersect[i].object.scale, 0.5, { x: size, ease: Elastic.easeInOut })
		this.tl.to(intersect[i].object.scale, 0.5, { y: size, ease: Expo.easeInOut })
		this.tl.to(intersect[i].object.scale, 0.5, { z: size++, ease: Elastic.easeOut })
		this.tl.to(intersect[i].object.scale, 0.5, { x: size, ease: Elastic.easeInOut })
		this.tl.to(intersect[i].object.scale, 0.5, { y: size, ease: Expo.easeInOut })
		this.tl.to(intersect[i].object.scale, 0.5, { z: size++, ease: Elastic.easeOut })
		
		var r=	intersect[i].object.material.color.getHex();
	

		//check color
		if (r==pickedcolor1) {
			
			document.getElementById("gewonnen").style.display = "block";
			return ; }
		else {
			if (counter==0) {
				document.getElementById("verloren").style.display = "block";
				return 
			} else {
				document.getElementById("counter").innerHTML='Anzahl Leben:'+ --counter;
				intersect[i].object.material.color.setHex(0xffffff);
			}
		}

	}
} 


//mousemove on cube
function onMouseMove(event) {
	event.preventDefault();
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	raycaster.setFromCamera(mouse, camera);
	
	var intersect = raycaster.intersectObjects(scene.children, true)
	for (var i = 0; i < intersect.length; i++) {
		//var startcolor;
		//startcolor=intersect[i].object.material.color.getHex();
		this.tl = new TimelineMax().delay(.3)
		this.tl.to(intersect[i].object.scale, 0.5, { x: 2, ease: Elastic.easeInOut })
		this.tl.to(intersect[i].object.scale, 0.5, { y: 3, ease: Expo.easeInOut })
		this.tl.to(intersect[i].object.scale, 0.5, { z: 2, ease: Elastic.easeOut })
		this.tl.to(intersect[i].object.scale, 0.5, { x: 1, ease: Elastic.easeInOut })
		this.tl.to(intersect[i].object.scale, 0.5, { y: 1, ease: Expo.easeInOut })
		this.tl.to(intersect[i].object.scale, 0.5, { z: 1, ease: Elastic.easeOut })
		//this.tl.to(intersect[i].object.material.color.setHex(0x000000))
	}
		

	}


createcube();


window.addEventListener('mousemove', onMouseMove);
window.addEventListener('click', onMouseClick);



function init() {
	
	location.reload();
	
}

function AnzahlWuerfel() {
	
	createcube()


}




//schwierigkeit
var schwierigkeit= 0;

function einfach() {
	schwierigkeit=0
}

function mittel() {
	schwierigkeit=1
}

	function schwer() {
		schwierigkeit=2
}




//animation
function animate() {
	requestAnimationFrame(animate);
	
	cube.rotation.x += 0.005;
	
	switch (schwierigkeit) {
		case 2:
			group.rotation.z += 0.01;
			group.position.z-=0.01;
			group.rotation.x += 0.005;

		 	
			
		case 1:
			
			group.rotation.y += 0.005;
			
		case 0:
			for (var i = 0; i < AnzahlCubes; i++) {
				cubeArray[i].rotation.x = 0.01 + i / (i + 400);
				cubeArray[i].rotation.y += 0.01 + i / (i + 400);
				cubeArray[i].rotation.z += 0.01 + i / (i + 400);
				group.rotation.x += 0.0001;
			}

		} 
	renderer.render(scene, camera);
};



animate();





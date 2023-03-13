

import * as THREE from 'three'

import { GLTFLoader } from './js/GLTFLoader.js';

import { OrbitControls } from 'https://unpkg.com/three@0.119.0/examples/jsm/controls/OrbitControls.js';

var container;

var camera, scene, renderer;

init();
animate();


function init() {

	container = document.createElement( 'div' );
	document.body.appendChild( container );

	camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.01, 1000 );
	camera.position.z = 1;
     camera.position.y = 1;
     camera.position.x = 1; 


	// scene

	scene = new THREE.Scene();



const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
				directionalLight.position.set( 1, 1, 1 ).normalize();
				scene.add( directionalLight );


const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );



	
antialias: true;

	var pointLight = new THREE.PointLight( 0xffffff, 0.4);
	camera.add( pointLight );
	scene.add( camera );


	// model

	var loader = new GLTFLoader();

	loader.load( 'mecq.glb', function ( gltf ) {

scene.add( gltf.scene );

	} );

	//

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	const controls = new OrbitControls( camera, renderer.domElement );

controls.minDistance = 300;
        controls.maxDistance = 2000;

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

//













function animate() {

	requestAnimationFrame( animate );
	render();

}

function render() {

	renderer.render( scene, camera );

}

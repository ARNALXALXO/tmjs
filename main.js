import * as THREE from'/js/three.module.js';
import{GUI}from'/js/lil-gui.module.min.js';
import{OrbitControls}from'/js/OrbitControls.js'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0xffff);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
//============GUI=================
const gui = new GUI();

gui.add(cube.position,'x',0, Math.PI).name('rotate X');
/*
gui.add(cube.rotation,'y',0, Math.PI).name('rotate Y');
gui.add(cube.rotation,'z',0, Math.PI).name('rotate Z');
gui.add(cube.scale,'x',0,2).name('scale X');
gui.add(cube.scale,'y',0,2).name('scale Y');
gui.add(cube.scale,'z',0,2).name('scale Z');
//======
const materialPalrams = {
  cubeColor: cube.material.color.getHex(),
};
gui.add(cube.material,'wireframe');
//======
var foloderRGB = gui.addFolder("RGB");
foloderRGB.add(cube.material.color,'r',0, 1).name('red color');

foloderRGB.add(cube.material.color,'g',0, 1).name('green color');
foloderRGB.add(cube.material.color,'b',0, 1).name('cyan color');

var rgb ={
  color: [0,255,255]
}
foloderRGB.addColor(rgb, 'color').onChange(function(value){
cube.material.color.r = value[0]/255;
cube.material.color.g = value[0]/255;
cube.material.color.b = value[0]/255;
});


*/

//============Guitar end===========

camera.position.z = -5;
const controls = new OrbitControls(camera,renderer.domElement);
controls.update();
function animate() {
  requestAnimationFrame(animate);
  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
}
animate();
